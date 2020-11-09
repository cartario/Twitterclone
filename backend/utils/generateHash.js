import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY;

export const generateMD5 = (value) => {
  return crypto.createHash('md5').update(value + SECRET_KEY).digest('hex');
};


