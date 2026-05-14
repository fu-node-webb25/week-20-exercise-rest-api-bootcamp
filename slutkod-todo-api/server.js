import express from 'express';
import dotenv from 'dotenv';
import { logger } from './middlewares/logger.middleware.js';
import { errorHandler } from './middlewares/errorHandler.middleware.js';
import todosRouter from './routes/todos.route.js';
import authRouter from './routes/auth.route.js';

// Config
const app = express();
dotenv.config();
const PORT = process.env.PORT || 8081;

// Middlewares
app.use(express.json());
app.use(logger);

// Routes
app.use('/api/todos', todosRouter);
app.use('/api/auth', authRouter);

// Server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});

app.use(errorHandler);