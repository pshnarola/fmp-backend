const mongoose = require('mongoose');
const validator = require('validator');

const userServiceSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, 'First name is required!'],
    },
    lastName: {
      type: String,
      required: [true, 'Last name is required!'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      validate: {
        validator: validator.isEmail,
        message: 'Please enter a valid email address!',
      },
    },
    address: {
      type: String,
      required: [true, 'Address is required!'],
    },
    zipcode: {
      type: String,
      required: [true, 'Zipcode is required!'],
    },
    state: {
      type: String,
      required: [true, 'State is required!'],
    },
    country: {
      type: String,
      required: [true, 'Country is required!'],
    },
    paymentMode: {
      type: String,
      default: 'PayPal',
    },
    serviceId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Service',
    },
    serviceTierId: {
      type: mongoose.Schema.ObjectId,
      ref: 'ServiceTier',
    },
  },
  { timestamps: true }
);

const UserService = mongoose.model('UserService', userServiceSchema);

module.exports = UserService;
