import express, { Express, Request, Response, NextFunction } from 'express';
import { applyMiddleware } from './middlewares/middlewares';
import routes from './routes/routes';
import { handleError, ErrorHandler } from './middlewares/errorHandler';
import { getServerErrorMessages } from './config/i18n/messages/server/serverMessages';

const app: Express = express();

// Apply middleware
applyMiddleware(app);

// Serve static files
app.use(express.static('public'));

// Use routes
app.use(routes);

// Error handling
app.use((req: Request, res: Response, next: NextFunction) => {
    throw new ErrorHandler(404, getServerErrorMessages.serverError.error404());
});

app.use((err: ErrorHandler, req: Request, res: Response, next: NextFunction) => handleError(err, req, res, next));

export default app;