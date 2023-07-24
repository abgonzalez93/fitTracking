import { getDatabaseMessages } from '../config/i18n/messages/database/databaseMessages';
import httpStatus from '../constants/httpStatus';
import DatabaseConnection from '../database/databaseConnection';
import { ErrorHandler } from '../middlewares/errorHandler';

export default class SignalHandler {
    private static async handleExit(signal: string, message: string) {
        try {
            await DatabaseConnection.disconnect(message);
            process.kill(process.pid, signal);
        } catch (error) {
            if (error instanceof ErrorHandler) {
                const err = new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.connectionShutdown.errorShuttingDown(signal, error.message), error.stack);
                console.error(err);
            } else {
                throw new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.unknownDatabaseError);
            }

            process.exit(1);
        }
    }

    public static handleNodemonRestarts(): void {
        process.once('SIGUSR2', () => this.handleExit('SIGUSR2', getDatabaseMessages.connectionShutdown.nodemonRestart));
    }

    public static handleAppTermination(): void {
        process.on('SIGINT', () => this.handleExit('SIGINT', getDatabaseMessages.connectionShutdown.applicationTermination));
    }
}