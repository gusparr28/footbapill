import jwt from 'jsonwebtoken';

export const createToken = (user: any) => {
    return jwt.sign({ id: user }, process.env.JWT_SECRET || '28552455565g');
};