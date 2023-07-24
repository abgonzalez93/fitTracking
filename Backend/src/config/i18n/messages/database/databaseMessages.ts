import i18n from "@config/i18n/i18n";

export const getDatabaseMessages = {
    failedToConnect: (error: string): string => i18n.__('database.failedToConnect', { error: error }),
    unknownDatabaseError: i18n.__('database.unknownDatabaseError'),
    connectionShutdown: {
        errorShuttingDown: (signal: string, error: string): string => i18n.__('database.connectionShutdown.connectionShutdown', { signal: signal, error: error }),
        nodemonRestart: i18n.__('database.connectionShutdown.nodemonRestart'),
        nodemonRestartError: (error: string): string => i18n.__('database.connectionShutdown.nodemonRestartError', { error: error }),
        applicationTermination: i18n.__('database.connectionShutdown.applicationTermination'),
        applicationTerminationError: (error: string): string => i18n.__('database.connectionShutdown.applicationTerminationError', { error: error }),
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