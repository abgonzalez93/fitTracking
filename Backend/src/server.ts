import dotenv from 'dotenv'
import path from 'path';
import databaseConnection from './database/databaseConnection';
import config from './config/config';
import app from './app';
import { handleNodemonRestarts, handleAppTermination } from './utils/processSignals';

dotenv.config({path: path.resolve(__dirname, '../.env')});

const port: number = config.PORT;

// Handle nodemon restarts and application termination
handleNodemonRestarts()
handleAppTermination()

// Connect to the database
databaseConnection.connect();

app.listen(port);