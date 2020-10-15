// modules importation
import express from 'express';
import cors from 'cors';
import passport from 'passport';
import passportMiddleware from './middlewares/passport';
import path from 'path';
const app = express();

import authRoutes from './routes/auth';
import fileRoute from './routes/file';
import playerRoutes from './routes/player';
import countryRoutes from './routes/country';
import teamRoutes from './routes/team';
import competitionRoutes from './routes/competition';
import matchRoutes from './routes/match';
import coachRoutes from './routes/coach';

// middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
passport.use(passportMiddleware);

// routes
app.use(authRoutes);
app.use(fileRoute, express.static(path.resolve('uploads')));
app.use(playerRoutes);
app.use(countryRoutes);
app.use(teamRoutes);
app.use(competitionRoutes);
app.use(matchRoutes);
app.use(coachRoutes);

// settings
app.set('port', process.env.PORT || 3000);

export default app;