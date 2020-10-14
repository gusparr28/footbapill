// modules importation
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import path from 'path';
const app = express();

import authRoutes from './routes/auth';
import fileRoute from './routes/file';

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.use(authRoutes);
app.use(fileRoute, express.static(path.resolve('uploads')));

// settings
app.set('port', process.env.PORT || 3000);

export default app;