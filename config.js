require('dotenv').config();

const { JWT_SECRET = 'SECRET' } = process.env;
const { PORT = '3000' } = process.env;
const DB = 'mongodb://127.0.0.1:27017/bitfilmsdb';

module.exports = {
  JWT_SECRET,
  PORT,
  DB,
};
