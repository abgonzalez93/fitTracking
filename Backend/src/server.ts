import dotenv from 'dotenv'
import path from 'path';
import databaseConnection from './database/databaseConnection';
import config from './config/config';
import app from './app';
import SignalHandler from './utils/processSignals';
import logger from './utils/logger';
import httpStatus from './constants/httpStatus';
import { getServerMessages } from './config/i18n/messages/server/serverMessages';
import { getDatabaseMessages } from './config/i18n/messages/database/databaseMessages';
import { ErrorHandler } from './middlewares/errorHandler';

dotenv.config({path: path.resolve(__dirname, '../.env')});

const port: number = config.PORT;

// Handle nodemon restarts and application termination
SignalHandler.handleNodemonRestarts();
SignalHandler.handleAppTermination();

// Connect to the database
databaseConnection.connect()
    .then(() => {
        app.listen(port, () => {
            logger.info(getServerMessages.listeningOnPort(port));
        });
    })
    .catch((error) => {
        let err = error;

        if (!(error instanceof ErrorHandler)) {
            err = new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.failedToConnect(error.message), error.stack);
        }

        logger.error(err);
        process.exit(1);
    });