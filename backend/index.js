import cookieParser from 'cookie-parser';
import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from 'url';
import db from './config/Database.js';
import './models/associations.js'; // Import associations
import AuthRoute from './routes/AuthRoute.js';
import CategorieRoute from './routes/CategorieRoute.js';
import OrderRoute from './routes/OrderRoute.js';
import ProductRoute from './routes/ProductRoute.js';
import SupplierRoute from './routes/SupplierRoute.js';
import UserRoute from './routes/UserRoute.js';

import multer from "multer";
const app = express();

// Convert import.meta.url to __dirname equivalent
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function Image
const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images');
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, new Date().getTime() + '-' + file.originalname);
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    } else {
        cb(null, false);
    }
};

app.use('/images', express.static(path.join(__dirname, 'images')));
// Update multer to accept the 'image' field
// app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).array('image', 3));

app.use(cors({
    origin: '*', // Replace with your allowed origin
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Replace with your allowed methods
}));

app.use(express.json());
app.use(cookieParser());
app.use(UserRoute);
app.use(AuthRoute);
app.use(SupplierRoute);
app.use(ProductRoute);
app.use(CategorieRoute);
app.use(OrderRoute);

// Error-handling middleware for Multer errors
app.use((err, req, res, next) => {
    if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        if (err.code === 'LIMIT_UNEXPECTED_FILE') {
            return res.status(400).json(err);
        }
        // Handle other Multer errors
        return res.status(400).json({ message: err.message });
    } else if (err) {
        // An unknown error occurred.
        return res.status(500).json({ message: 'Internal Server Error' });
    }

    // If no errors, proceed to the next middleware/route handler
    next();
});

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
