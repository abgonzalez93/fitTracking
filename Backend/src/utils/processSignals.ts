import { getDatabaseMessages } from '../config/i18n/messages/database/databaseMessages';
import DatabaseConnection from '../database/databaseConnection';

export const handleNodemonRestarts = (): void => {
    process.once('SIGUSR2', async () => {
        await DatabaseConnection.disconnect(getDatabaseMessages.connectionShutdown.nodemonRestart);
        process.kill(process.pid, 'SIGUSR2');
    });
};

export const handleAppTermination = (): void => {
    process.on('SIGINT', async () => {
        await DatabaseConnection.disconnect(getDatabaseMessages.connectionShutdown.applicationTermination);
        process.exit(0);
    });
};