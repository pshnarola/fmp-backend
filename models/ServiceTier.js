const mongoose = require('mongoose');
const validator = require('validator');

const serviceTierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Service tier name is required!'],
    },
    description: {
      type: String,
      required: [true, 'Service tier description is required!'],
    },
    price: {
      type: Number,
      required: [true, 'Service tier price is required!'],
    },
    serviceId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Service',
    },
  },
  { timestamps: true }
);

const ServiceTier = mongoose.model('ServiceTier', serviceTierSchema);

module.exports = ServiceTier;
