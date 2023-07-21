import mongoose, { Connection } from 'mongoose';
import { ErrorHandler } from '../middlewares/errorHandler';
import config from '../config/config';
import messages from '../config/i18n/en/messages';

const msg = messages.src.database.dbConnect;

// Function to handle database disconnection
const connectionShutdown = (db: Connection, message: string): Promise<void> => {
    return db.close().then(() => {
        console.log(msg.connectionShutdown.connectionShutdown(message));
    });
};

// Function to handle database events
const handleDBEvents = (db: Connection): void => {
    // Handle database error
    db.on('error', (error) => {
        throw new ErrorHandler(500, msg.handleDBEvents.connectionError(error.message), error.stack);
    });

    // Handle start of database connection
    db.on('connecting', () => {
        console.log(msg.handleDBEvents.startingConnection);
    });

    // Handle database connection initiation
    db.on('connected', () => {
        console.log(msg.handleDBEvents.connectionInitiated);
    });

    // Check for stable database connection
    db.once('open', () => {
        console.log(msg.handleDBEvents.connected);
    });

    // Handle start of database disconnection
    db.on('disconnecting', () => {
        console.log(msg.handleDBEvents.disconnecting);
    });

    // Handle database disconnection
    db.on('disconnected', () => {
        console.log(msg.handleDBEvents.connectionClosed);
    });

    // Handle database reconnection
    db.on('reconnected', () => {
        console.log(msg.handleDBEvents.successfulReconnection);
    });

    // Handle nodemon restarts
    process.once('SIGUSR2', () => {
        connectionShutdown(db, msg.handleDBEvents.nodemonRestart).then(() => {
            process.kill(process.pid, 'SIGUSR2');
        });
    });

    // Handle application termination
    process.on('SIGINT', () => {
        connectionShutdown(db, msg.handleDBEvents.applicationTermination).then(() => {
            process.exit(0);
        });
    });
};

// Function to attempt database connection
const attemptConnection = async (maxAttempts: number): Promise<void> => {
    for (let attempt = 0; attempt < maxAttempts; attempt++) {
        try {
            await mongoose.connect(config.MONGODB_URI);
            break; // Break the loop once the connection is successful.
        } catch (error) {
            // If we are not on the last attempt, wait a bit before retrying.
            if (attempt < maxAttempts - 1) {
                console.log(msg.attemptConnection.connectionFailed(attempt, config.RECONNECTION_RETRY_TIME / 1000));
                await new Promise(resolve => setTimeout(resolve, config.RECONNECTION_RETRY_TIME));
            } else {
                if(error instanceof Error){
                    throw new ErrorHandler(500, msg.attemptConnection.connectionToDatabaseError(error.message), error.stack);
                } else {
                    throw new ErrorHandler(500, msg.attemptConnection.unknownDatabaseError);
                }
            }
        }
    }
};

// Main database connection function
const dbConnect = async (): Promise<void> => {
    const db = mongoose.connection;
    handleDBEvents(db);
    await attemptConnection(config.RECONNECTION_MAX_ATTEMPS);
};

export default dbConnect;