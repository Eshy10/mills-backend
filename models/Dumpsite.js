const mongoose = require('mongoose');

const dumpsiteSchema = new mongoose.Schema(
  {
    location: {
      type: { type: String, enum: ['Point'], required: true }, 
      coordinates: {
        type: [Number],
        required: true,
      },
    },
    capacity: Number,
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
  },
  { timestamps: true }
);

// 2dsphere index for geospatial queries
dumpsiteSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Dumpsite', dumpsiteSchema);
