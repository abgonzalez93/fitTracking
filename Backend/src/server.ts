import express, { Express } from 'express';
import { applyMiddleware } from './middlewares/middlewares';
import routes from './routes/routes';
import dbConnect from './database/dbConnect';
import config from './config/config';
import dotenv from 'dotenv';
import path from 'path';
//import i18n from 'i18n';
//import { configureI18n } from './config/i18n/i18n';

dotenv.config({path: path.resolve(__dirname, '../.env')});

const app: Express = express();
const port: number = config.PORT;

// Configure i18n
//configureI18n(i18n);

// Initialize i18n module
//app.use(i18n.init); 

// Apply middleware
applyMiddleware(app);

// Connect to the database
dbConnect();

// Use routes
app.use(routes);

// Serve static files
app.use(express.static('public'));

app.listen(port);