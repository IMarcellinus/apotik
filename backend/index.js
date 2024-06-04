import cookieParser from 'cookie-parser';
import cors from "cors";
import express from "express";
import db from './config/Database.js';
import AuthRoute from './routes/AuthRoute.js';
import UserRoute from './routes/UserRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(UserRoute);
app.use(AuthRoute);

const startServer = async () => {
    try {
        await db.authenticate();
        console.log('Database connected...');
        await db.sync();  // Ensure this call is awaited
        app.listen(5000, () => console.log('Server up and running...'));
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();
