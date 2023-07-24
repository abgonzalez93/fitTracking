import express, { Express, Request, Response, NextFunction } from 'express';
import { applyMiddleware } from './middlewares/middlewares';
import routes from './routes/routes';


const app: Express = express();

// Apply middleware
applyMiddleware(app);

// Serve static files
app.use(express.static('public'));

// Use routes
app.use(routes);

export default app;