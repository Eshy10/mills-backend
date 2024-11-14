const Mill = require('../models/Mill');


const getAllMills = async (req, res) => {
  try {
    const mills = await Mill.find();
    res.json(mills);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllMills
};