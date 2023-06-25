import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import morgan from 'morgan';
import cors from 'cors';

// MIDDLEWARES & UTULITIES
import connectDb from './db/connectDb.js';
import errorHandler from './middlewares/errorHandler.js';

// ENV CONSTANTS
const PORT = process.env.PORT || 5000;
const API = process.env.API;

// ROUTES
import TodoRoutes from './routes/TodoRoutes.js';

// APP
const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// ROUTES
app.use(`${API}/todos`, TodoRoutes);

// ERROR HANDLER
app.use(errorHandler);

const start = async () => {
  try {
    await connectDb();
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
