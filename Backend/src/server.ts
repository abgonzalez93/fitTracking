// External Libraries
import path from 'path'
import dotenv from 'dotenv'

// Constants
import httpStatus from '@constants/httpStatus'

// Utils
import logger from '@utils/logger'
import SignalHandler from '@utils/processSignals'
import startApp from '@utils/startApp'

// Database
import DatabaseConnection from '@database/databaseConnection'

// Middlewares
import { ErrorHandler } from '@middlewares/errorHandler'

// Configs and Messages
import { getDatabaseMessages } from '@config/i18n/messages'

// Local files
import app from './app'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

SignalHandler.handleNodemonRestarts()
SignalHandler.handleAppTermination()

DatabaseConnection.connect()
    .then(() => {
        startApp(app)
    })
    .catch((error) => {
        if (error instanceof ErrorHandler) {
            logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.failedToConnect(error.message)))
        } else {
            logger.error(new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.unknownDatabaseError))
        }

        process.exit(1)
    })
