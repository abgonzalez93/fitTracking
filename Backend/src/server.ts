import dotenv from 'dotenv'
import path from 'path';
import app from './app';
import databaseConnection from '@database/databaseConnection';
import SignalHandler from '@utils/processSignals';
import logger from '@utils/logger';
import httpStatus from '@constants/httpStatus';
import config from '@config/config';
import { getDatabaseMessages, getServerMessages } from '@config/i18n/messages'
import { ErrorHandler } from '@middlewares/errorHandler';

dotenv.config({path: path.resolve(__dirname, '../.env')});

const { PORT: port } = config;

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
        let err = error instanceof ErrorHandler ? error : new ErrorHandler(httpStatus.INTERNAL_SERVER_ERROR, getDatabaseMessages.failedToConnect(error.message), error.stack);
        throw err;
    });