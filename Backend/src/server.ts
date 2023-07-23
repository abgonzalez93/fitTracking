import dotenv from 'dotenv'
import path from 'path';
import dbConnect from './database/dbConnect';
import config from './config/config';
import app from './app';

dotenv.config({path: path.resolve(__dirname, '../.env')});

const port: number = config.PORT;

// Connect to the database
dbConnect();

app.listen(port);