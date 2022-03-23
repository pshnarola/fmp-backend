const createError = require('http-errors');

const UserService = require('../models/UserService');
const catchAsync = require('../utils/catchAsync');

exports.create = catchAsync(async (req, res, next) => {
  if (!(req.body.serviceId && req.body.serviceTierId)) {
    return next(new createError(400, 'serviceId & serviceTierId is required!'));
  }

  const userService = await UserService.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    address: req.body.address,
    zipcode: req.body.zipcode,
    state: req.body.state,
    country: req.body.country,
    paymentMode: req.body.paymentMode,
    serviceId: req.body.serviceId,
    serviceTierId: req.body.serviceTierId,
  });

  res.status(201).json({
    status: 'success',
    data: {
      userService,
    },
  });
});

exports.all = catchAsync(async (req, res, next) => {
  const userServices = await UserService.find()
    .populate({
      path: 'serviceId',
      select: '-__v',
    })
    .populate({
      path: 'serviceTierId',
      select: '-__v',
    });

  res.status(200).json({
    status: 'success',
    data: {
      userServices,
    },
  });
});
