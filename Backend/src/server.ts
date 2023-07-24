import dotenv from 'dotenv'
import path from 'path';
import databaseConnection from './database/databaseConnection';
import config from './config/config';
import app from './app';
import SignalHandler from './utils/processSignals';

dotenv.config({path: path.resolve(__dirname, '../.env')});

const port: number = config.PORT;

// Handle nodemon restarts and application termination
SignalHandler.handleNodemonRestarts();
SignalHandler.handleAppTermination();

// Connect to the database
databaseConnection.connect();

app.listen(port);