const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Service name is required!'],
    },
    description: {
      type: String,
      required: [true, 'Service description is required!'],
    },
    slug: {
      type: String,
      slug: 'name',
      unique: true,
    },
  },
  { timestamps: true }
);

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
