const Service = require('../models/serviceModel');
const ServiceTier = require('../models/serviceTierModel');
const catchAsync = require('../utils/catchAsync');

exports.all = catchAsync(async (req, res, next) => {
  const serviceTiers = await ServiceTier.find({
    serviceId: req.body.serviceId,
  });

  res.status(200).json({
    status: 'success',
    data: {
      serviceTiers,
    },
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const serviceTier = await ServiceTier.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    serviceId: req.body.serviceId,
  });

  res.status(201).json({
    status: 'success',
    data: {
      serviceTier,
    },
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const serviceTier = await ServiceTier.findByIdAndUpdate(
    req.body.serviceTierId,
    {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: 'success',
    data: {
      serviceTier,
    },
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  await ServiceTier.findByIdAndDelete(req.body.serviceTierId);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
