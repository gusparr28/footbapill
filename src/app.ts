// modules importation
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
const app = express();

import authRoutes from './routes/auth';

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.use(authRoutes);

// settings
app.set('port', process.env.PORT || 3000);

export default app;