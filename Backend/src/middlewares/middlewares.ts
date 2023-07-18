import express, { Application } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import { handleError  } from './errorHandler';

export const applyMiddleware = (app: Application): void => {
  // Middleware to help protect your application from well-known vulnerabilities
  app.use(helmet());
  
  // Middleware to enable CORS (Cross-Origin Resource Sharing)
  app.use(cors());

  // Middleware to limit repetitive API requests to prevent brute force attacks
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // Limit each IP to 100 requests per window
  }));

  // HTTP logging middleware
  app.use(morgan('dev'));

  // Middleware for centralized error handling
  app.use(handleError);

  // Middleware for parsing the body of incoming requests as JSON
  app.use(express.json());
};