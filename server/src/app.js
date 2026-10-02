import express from 'express';
import cors from 'cors';
import healthRoutes from './routes/health.routes.js';
import { notFound, errorHandler } from './middleware/error.middleware.js';

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || 'http://localhost:5173' }));
app.use(express.json());

app.use('/api/health', healthRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
