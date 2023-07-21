import { dietMessages, nutritionalGoalsMessages, userMessages } from "./components";

const messages = {
    server: {
        runningPort: (port: number): string => `Server running on port ${port}`,
    },
    src: {
        components: {
            user: userMessages,
            nutritionalGoals: nutritionalGoalsMessages,
            diet: dietMessages
        },
        database: {
            dbConnect: {
                connectionShutdown: {
                    connectionShutdown: (msg: string): string => `Mongoose has been disconnected due to ${msg}`,
                },
                handleDBEvents: {
                    connectionError: (error: string): string => `Connection error: ${error}`,
                    startingConnection: 'Starting connection to MongoDB...',
                    connectionInitiated: 'Connection initiated, waiting for it to open...',
                    connected: 'Connected to MongoDB!',
                    disconnecting: 'Disconnecting from MongoDB...',
                    connectionClosed: 'Connection to MongoDB closed',
                    successfulReconnection: 'Successful reconnection to MongoDB!',
                    nodemonRestart: 'nodemon restart',
                    applicationTermination: 'application termination',
                },
                attemptConnection: {
                    connectionFailed: (attempt: number, retryInSeconds: number): string => `Connection failed, retrying in ${retryInSeconds} seconds... (attempt ${attempt + 1})`,
                    connectionToDatabaseError: (error: string): string => `Error connecting to the database: ${error}`,
                    unknownDatabaseError: 'Unknown database connection error occurred',
                }
            }
        },
        middlewares: {
            errorHandler : {
                handleError : {
                    internalServerError: 'Internal server error',
                }
            }
        },
        routes: {}
    }
};

export default messages;