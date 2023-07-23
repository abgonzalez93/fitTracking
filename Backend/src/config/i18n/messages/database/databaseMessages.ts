import i18n from "../../i18n";

export const getDatabaseMessages = {
    connectionShutdown: {
        connectionShutdown: (msg: string): string => i18n.__('database.connectionShutdown.connectionShutdown', { msg: msg })
    },
    handleDBEvents: {
        connectionError: (error: string): string => i18n.__('database.handleDBEvents.connectionError', { error: error }),
        startingConnection: i18n.__('database.handleDBEvents.startingConnection'),
        connectionInitiated: i18n.__('database.handleDBEvents.connectionInitiated'),
        connected: i18n.__('database.handleDBEvents.connected'),
        disconnecting: i18n.__('database.handleDBEvents.disconnecting'),
        connectionClosed: i18n.__('database.handleDBEvents.connectionClosed'),
        successfulReconnection: i18n.__('database.handleDBEvents.successfulReconnection'),
        nodemonRestart: i18n.__('database.handleDBEvents.nodemonRestart'),
        applicationTermination: i18n.__('database.handleDBEvents.applicationTermination'),
    },
    attemptConnection: {
        connectionFailed: (attempt: number, retryInSeconds: number): string => i18n.__('database.attemptConnection.connectionFailed', { retry: retryInSeconds.toString(), attempt: (attempt + 1).toString() }),
        connectionToDatabaseError: (error: string): string => i18n.__('database.attemptConnection.connectionToDatabaseError', error),
        unknownDatabaseError: i18n.__('database.attemptConnection.unknownDatabaseError'),
    }
};