const Service = require('../models/Service');
const catchAsync = require('../utils/catchAsync');

exports.getAll = catchAsync(async (req, res, next) => {
  const services = await Service.find();

  return res.status(200).json({
    status: 'success',
    data: {
      services,
    },
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const service = await Service.create({
    name: req.body.name,
    description: req.body.description,
  });

  res.status(201).json({
    status: 'success',
    data: {
      service,
    },
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const service = await Service.findByIdAndUpdate(
    req.body.serviceId,
    {
      name: req.body.name,
      description: req.body.description,
    },
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: 'success',
    data: {
      service,
    },
  });
});

exports.delete = catchAsync(async (req, res, next) => {
  await Service.findByIdAndDelete(req.body.serviceId);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
