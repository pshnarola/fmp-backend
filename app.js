const express = require('express');
const morgan = require('morgan');

const serviceRoutes = require('./routes/serviceRoutes');
const serviceTierRoutes = require('./routes/serviceTierRoutes');
const userServiceRoutes = require('./routes/userServiceRoutes');

const globalErrorHandler = require('./controllers/utils/errorController');

const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/services', serviceRoutes);
app.use('/api/service-tiers', serviceTierRoutes);
app.use('/api/user-service', userServiceRoutes);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
