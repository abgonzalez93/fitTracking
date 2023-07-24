import mongoose, { Connection } from 'mongoose';
import { ErrorHandler } from '../middlewares/errorHandler';
import config from '../config/config';
import { getDatabaseMessages } from '../config/i18n/messages/database/databaseMessages';
import logger from '../utils/logger';
import httpStatus from '../constants/httpStatus';

export default class DatabaseConnection {
    // Function to handle database events
    private static handleDBEvents(db: Connection) {
        // Handle database error
        db.on('error', (error) => {
            throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.handleDBEvents.connectionError(error.message), error.stack);
        });

        // Handle start of database connection
        db.on('connecting', () => {
            logger.info(getDatabaseMessages.handleDBEvents.startingConnection);
        });

        // Handle database connection initiation
        db.on('connected', () => {
            logger.info(getDatabaseMessages.handleDBEvents.connectionInitiated);
        });

        // Check for stable database connection
        db.once('open', () => {
            logger.info(getDatabaseMessages.handleDBEvents.connected);
        });

        // Handle start of database disconnection
        db.on('disconnecting', () => {
            logger.info(getDatabaseMessages.handleDBEvents.disconnecting);
        });

        // Handle database disconnection
        db.on('disconnected', () => {
            logger.info(getDatabaseMessages.handleDBEvents.connectionClosed);
        });

        // Handle database reconnection
        db.on('reconnected', () => {
            logger.info(getDatabaseMessages.handleDBEvents.successfulReconnection);
        });
    };

    // Function to attempt database connection
    private static async attemptConnection(maxAttempts: number) {
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            try {
                await mongoose.connect(config.MONGODB_URI, {
                    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
                    socketTimeoutMS: 45000, // Close sockets after 45s
                    family: 4, // Use IPv4, skip trying IPv6
                    autoCreate: true, // automatically create the database
                });
                break;
            } catch (error) {
                logger.info(getDatabaseMessages.attemptConnection.tryingToReconnect);
                if (attempt < maxAttempts - 1) {
                    logger.info(getDatabaseMessages.attemptConnection.connectionFailed(attempt, config.RECONNECTION_RETRY_TIME / 1000));
                    await new Promise(resolve => setTimeout(resolve, config.RECONNECTION_RETRY_TIME));
                } else {
                    throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.unknownDatabaseError);
                }
            }
        }
    };

    // Function to handle database disconnection
    public static async disconnect(message?: string) {
        const db = mongoose.connection;
        if (db.readyState === 1) {
            await db.close();
            if (message) {
                logger.info(message);
            }
        }
    }

    // Main database connection function
    public static async connect() {
        const db = mongoose.connection;
        this.handleDBEvents(db);
        try {
            await this.attemptConnection(config.RECONNECTION_MAX_ATTEMPS);
        } catch(error) {
            if(error instanceof ErrorHandler){
                throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.attemptConnection.connectionToDatabaseError(error.message), error.stack);
            } else {
                throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.unknownDatabaseError);
            }
        }
    };
}