const Service = require('../models/Service');
const ServiceTier = require('../models/ServiceTier');
const catchAsync = require('../utils/catchAsync');

exports.getTiersByServiceId = catchAsync(async (req, res, next) => {
  const service = await Service.findOne({
    slug: req.params.slug,
  });
  const serviceTiers = await ServiceTier.find({
    serviceId: service._id,
  }).populate({
    path: 'serviceId',
    select: '-__v',
  });

  res.status(200).json({
    status: 'success',
    data: {
      serviceTiers,
    },
  });
});

exports.create = catchAsync(async (req, res, next) => {
  const service = await Service.findOne({
    slug: req.params.slug,
  });
  const serviceTier = await ServiceTier.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    serviceId: service._id,
  });

  res.status(201).json({
    status: 'success',
    data: {
      serviceTier,
    },
  });
});

exports.update = catchAsync(async (req, res, next) => {
  const service = await Service.findOne({
    slug: req.params.slug,
  });
  const serviceTier = await ServiceTier.findOneAndUpdate(
    service._id,
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
  const service = await Service.findOne({
    slug: req.params.slug,
  });
  await ServiceTier.findOneAndDelete(service._id);

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
