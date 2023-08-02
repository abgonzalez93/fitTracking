// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import logger from '@utils/logger'

// Database
import DatabaseConnection from '@database/databaseConnection'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Configs and Messages
import { getDatabaseMessages } from '@config/i18n/messages'

export default class SignalHandler {
    private static async handleExit (signal: string, message: string): Promise<void> {
        try {
            await DatabaseConnection.disconnect(message)
            process.exit()
        } catch (error) {
            if (error instanceof ErrorHandler) {
                logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.connectionShutdown.errorShuttingDown(signal, error.message)))
            } else {
                logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.unknownDatabaseError))
            }

            process.exit(1)
        }
    }

    public static handleNodemonRestarts (): void {
        process.once('SIGUSR2', () => {
            (async () => {
                try {
                    await this.handleExit('SIGUSR2', getDatabaseMessages.connectionShutdown.nodemonRestart)
                } catch (error) {
                    if (error instanceof ErrorHandler) {
                        logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.connectionShutdown.nodemonRestartError(error.message)))
                    } else {
                        logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.unknownDatabaseError))
                    }

                    process.exit(1)
                }
            })().catch((error) => {
                logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, error))
            })
        })
    }

    public static handleAppTermination (): void {
        process.on('SIGINT', () => {
            (async () => {
                try {
                    await this.handleExit('SIGINT', getDatabaseMessages.connectionShutdown.applicationTermination)
                } catch (error) {
                    if (error instanceof ErrorHandler) {
                        logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.connectionShutdown.applicationTerminationError(error.message)))
                    } else {
                        logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.unknownDatabaseError))
                    }

                    process.exit(1)
                }
            })().catch((error) => {
                logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, error))
            })
        })
    }
}
