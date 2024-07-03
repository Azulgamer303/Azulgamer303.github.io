import dotenv from 'dotenv';
dotenv.config();
const apiKey = process.env.VUE_APP_API_KEY;
const secretKey = process.env.VUE_APP_SECRET_KEY;


export {apiKey, secretKey};