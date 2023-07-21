import { es } from "../../translations/es";

const translation = es.database;

const connectionShutdown = {
    connectionShutdown: (msg: string): string => `${translation.connectionShutdown.connectionShutdown} ${msg}`,
}

const handleDBEvents = {
    connectionError: (error: string): string => `${translation.handleDBEvents.connectionError} ${error}`,
    startingConnection: translation.handleDBEvents.startingConnection,
    connectionInitiated: translation.handleDBEvents.connectionInitiated,
    connected: translation.handleDBEvents.connected,
    disconnecting: translation.handleDBEvents.disconnecting,
    connectionClosed: translation.handleDBEvents.connectionClosed,
    successfulReconnection: translation.handleDBEvents.successfulReconnection,
    nodemonRestart: translation.handleDBEvents.nodemonRestart,
    applicationTermination: translation.handleDBEvents.applicationTermination,
}

const attemptConnection = {
    connectionFailed: (attempt: number, retryInSeconds: number): string => `${translation.attemptConnection.connectionFailed.connection} ${retryInSeconds} ${translation.attemptConnection.connectionFailed.seconds} ${translation.attemptConnection.connectionFailed.attempt} ${attempt + 1}`,
    connectionToDatabaseError: (error: string): string => `${translation.attemptConnection.connectionToDatabaseError} ${error}`,
    unknownDatabaseError: translation.attemptConnection.unknownDatabaseError,
}

export const databaseMessages = {
    connectionShutdown,
    handleDBEvents,
    attemptConnection
};