import { ExtractJwt, Strategy, StrategyOptions } from 'passport-jwt';

import { pool } from '../database';
import queries from '../utils/queries';

const opts: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || '28552455565g'
};

export default new Strategy(opts, async (payload, done) => {
    try {
        const user = await pool.query(queries.CHECK_USER, [payload]);
        if (user) {
            return done(null, user);
        }
        return done(null, false);
    } catch (e) {
        console.error(e);
    };
});