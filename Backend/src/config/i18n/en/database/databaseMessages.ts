const connectionShutdown = {
    connectionShutdown: (msg: string): string => `Mongoose has been disconnected due to ${msg}`,
}

const handleDBEvents = {
    connectionError: (error: string): string => `Connection error: ${error}`,
    startingConnection: 'Starting connection to MongoDB...',
    connectionInitiated: 'Connection initiated, waiting for it to open...',
    connected: 'Connected to MongoDB!',
    disconnecting: 'Disconnecting from MongoDB...',
    connectionClosed: 'Connection to MongoDB closed',
    successfulReconnection: 'Successful reconnection to MongoDB!',
    nodemonRestart: 'Nodemon restart',
    applicationTermination: 'application termination',
}

const attemptConnection = {
    connectionFailed: (attempt: number, retryInSeconds: number): string => `Connection failed, retrying in ${retryInSeconds} seconds... (attempt ${attempt + 1})`,
    connectionToDatabaseError: (error: string): string => `Error connecting to the database: ${error}`,
    unknownDatabaseError: 'Unknown database connection error occurred',
}

export const databaseMessages = {
    connectionShutdown,
    handleDBEvents,
    attemptConnection
};