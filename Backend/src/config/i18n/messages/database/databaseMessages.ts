import i18n from "../../i18n";

export const getDatabaseMessages = {
    unknownDatabaseError: i18n.__('database.attemptConnection.unknownDatabaseError'),
    connectionShutdown: {
        errorShuttingDown: (signal: string, error: string): string => i18n.__('database.connectionShutdown.connectionShutdown', { signal: signal, error: error }),
        nodemonRestart: i18n.__('database.handleDBEvents.nodemonRestart'),
        applicationTermination: i18n.__('database.handleDBEvents.applicationTermination'),
    },
    handleDBEvents: {
        connectionError: (error: string): string => i18n.__('database.handleDBEvents.connectionError', { error: error }),
        startingConnection: i18n.__('database.handleDBEvents.startingConnection'),
        connectionInitiated: i18n.__('database.handleDBEvents.connectionInitiated'),
        connected: i18n.__('database.handleDBEvents.connected'),
        disconnecting: i18n.__('database.handleDBEvents.disconnecting'),
        connectionClosed: i18n.__('database.handleDBEvents.connectionClosed'),
        successfulReconnection: i18n.__('database.handleDBEvents.successfulReconnection'),
    },
    attemptConnection: {
        tryingToReconnect: i18n.__('database.attemptConnection.tryingToReconnect'),
        connectionFailed: (attempt: number, retryInSeconds: number): string => i18n.__('database.attemptConnection.connectionFailed', { retry: retryInSeconds.toString(), attempt: (attempt + 1).toString() }),
        connectionToDatabaseError: (error: string): string => i18n.__('database.attemptConnection.connectionToDatabaseError', error),
    }
};