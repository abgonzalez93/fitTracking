// External Libraries
import mongoose, { type Connection } from 'mongoose'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import logger from '@utils/logger'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Configs and Messages
import config from '@config/config'
import { getDatabaseMessages } from '@i18n/messages'

export default class DatabaseConnection {
    private static handleDBEvents (db: Connection): void {
        db.on('error', (error) => {
            throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.handleDBEvents.connectionError(error.message))
        })

        db.on('connecting', () => {
            logger.info(getDatabaseMessages.handleDBEvents.startingConnection)
        })

        db.on('connected', () => {
            logger.info(getDatabaseMessages.handleDBEvents.connectionInitiated)
        })

        db.once('open', () => {
            logger.info(getDatabaseMessages.handleDBEvents.connected)
        })

        db.on('disconnecting', () => {
            logger.info(getDatabaseMessages.handleDBEvents.disconnecting)
        })

        db.on('disconnected', () => {
            logger.info(getDatabaseMessages.handleDBEvents.connectionClosed)
        })

        db.on('reconnected', () => {
            logger.info(getDatabaseMessages.handleDBEvents.successfulReconnection)
        })
    };

    private static async attemptConnection (maxAttempts: number): Promise<void> {
        for (let attempt = 0; attempt < maxAttempts; attempt++) {
            try {
                const uri = config.MONGODB_URI

                if (uri === null) {
                    throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.attemptConnection.uriNotSet)
                }

                await mongoose.connect(uri, {
                    serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of 30s
                    socketTimeoutMS: 45000, // Close sockets after 45s
                    family: 4, // Use IPv4, skip trying IPv6
                    autoCreate: true // automatically create the database
                })

                break
            } catch (error) {
                logger.info(getDatabaseMessages.attemptConnection.tryingToReconnect)

                if (attempt < maxAttempts - 1) {
                    logger.info(getDatabaseMessages.attemptConnection.connectionFailed(attempt, config.RECONNECTION_RETRY_TIME / 1000))
                    await new Promise(resolve => setTimeout(resolve, config.RECONNECTION_RETRY_TIME))
                } else {
                    throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.unknownDatabaseError)
                }
            }
        }
    }

    public static async disconnect (message?: string): Promise<void> {
        const db = mongoose.connection
        if (db.readyState === 1) {
            await db.close()
            if (message !== null && message !== undefined) {
                logger.info(message)
            }
        }
    }

    public static async connect (): Promise<void> {
        const db = mongoose.connection
        this.handleDBEvents(db)

        try {
            await this.attemptConnection(config.RECONNECTION_MAX_ATTEMPS)
        } catch (error) {
            if (error instanceof ErrorHandler) {
                throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.attemptConnection.connectionToDatabaseError(error.message))
            } else {
                throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.unknownDatabaseError)
            }
        }
    }
}
