const mongoose = require('mongoose');

const millSchema = new mongoose.Schema({
    millName: {
    type: String,
    required: true, 
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true, 
  },
  p1Amount: {
    type: Number,
    default: 0,
  },
  numTransactions: {
    type: Number,
    default: 0,
  },
  p1PriceTon: {
    type: Number,
    default: 0,
  },
  transactions: {
    type: Number,
    default: 0, 
  },
  lastTransactionDate: {
    type: Date,
    default: Date.now, 
  },
});

module.exports = mongoose.model('Mill', millSchema);
