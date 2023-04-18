const path = require('path');
const express = require('express');
const { errors } = require('celebrate');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PORT, DB } = require('./config');
const errorsContainer = require('./middlewares/errors');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const router = require('./routes/index');

const app = express();

app.use(cors());
app.use(requestLogger);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.set('strictQuery', false);
app.use(express.static(path.join(__dirname, 'public')));
mongoose.connect(DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(router);

app.use(errorLogger);

app.use(errors());
app.use(errorsContainer);

app.listen(PORT, () => {});
