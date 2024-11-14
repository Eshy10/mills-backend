const mongoose = require('mongoose');
const millSchema = new mongoose.Schema({
  name: String,
  latitude: Number,
  longitude: Number,
  quantity: Number,
  price: Number,
  transactions: Number,
  lastTransactionDate: Date
});
module.exports = mongoose.model('Mill', millSchema);