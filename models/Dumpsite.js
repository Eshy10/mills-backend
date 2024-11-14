const mongoose = require('mongoose');
const dumpsiteSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  capacity: Number,
  status: {
    type: String,
    enum: ['active', 'inactive'],
    default: 'active'
  }
});
module.exports = mongoose.model('Dumpsite', dumpsiteSchema);