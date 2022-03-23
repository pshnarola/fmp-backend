const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const createError = require('http-errors');

const globalErrorHandler = require('./controllers/utils/errorController');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const router = express.Router();

app.use('/api', router);

router.use('/services', require('./routes/service.routes'));
router.use('/service-tiers', require('./routes/serviceTier.routes'));
router.use('/user-service', require('./routes/userService.routes'));

app.all('*', (req, res, next) => {
  next(new createError(404, `Can't find ${req.originalUrl} on this server!`));
});

app.use(globalErrorHandler);

module.exports = app;
