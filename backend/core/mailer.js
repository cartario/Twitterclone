import nodemailer from 'nodemailer';
const dotenv = require('dotenv').config();

const options = {
  host: process.env.NODEMAILER_HOST || "smtp.mailtrap.io",
  port: Number(process.env.NODEMAILER_PORT) || 2525,
  auth: {
    user: process.env.NODEMAILER_USER || "e9fea9b0b231e5",
    pass: process.env.NODEMAILER_PASS || "4f8ffd1ca31564"
  }
};

const transport = nodemailer.createTransport(options);

export default transport;
