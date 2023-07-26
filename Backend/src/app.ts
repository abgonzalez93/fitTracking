import express, { Express } from 'express';
import { applyMiddleware } from '@middlewares/middlewares';
import router from 'router/router';


const app: Express = express();

// Apply middleware
applyMiddleware(app);

// Serve static files
app.use(express.static('public'));

// Use routes
app.use(router);

export default app;