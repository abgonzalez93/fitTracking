// External Libraries
import { type Express } from 'express'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import logger from '@utils/logger'

// Database
import DatabaseConnection from '@database/databaseConnection'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Configs and Messages
import config from '@config/config'
import { getDatabaseMessages, getServerMessages } from '@config/i18n/messages'

const { PORT: port } = config

const startApp = async (app: Express): Promise<void> => {
    try {
        await DatabaseConnection.connect()
        app.listen(port, () => { logger.info(getServerMessages.listeningOnPort(port)) })
    } catch (error) {
        if (error instanceof ErrorHandler) {
            logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.failedToConnect(error.message), error.stack))
        } else {
            logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.unknownDatabaseError))
        }

        process.exit(1)
    }
}

export default startApp
