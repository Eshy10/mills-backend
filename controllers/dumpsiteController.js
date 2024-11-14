const Dumpsite = require('../models/Dumpsite');
const Joi = require('joi');


const dumpsiteSchema = Joi.object({
  latitude: Joi.number().required().min(-90).max(90).label("Latitude"),
  longitude: Joi.number().required().min(-180).max(180).label("Longitude"),
  capacity: Joi.number().required().positive().label("Capacity"),
  status: Joi.string().valid('active', 'inactive').required().label("Status"),
});


const getAllDumpsites = async (req, res) => {
  try {
    const dumpsites = await Dumpsite.find();
    res.json(dumpsites);
  } catch (error) {
    next(error);
  }
};

const addDumpsite = async (req, res) => {

  const { error, value } = dumpsiteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  const { latitude, longitude, capacity, status } = value;
  const newDumpsite = new Dumpsite({ latitude, longitude, capacity, status });
  try {
    await newDumpsite.save();
    res.status(201).json(newDumpsite);
  } catch (error) {
    next(error);
  }
};


module.exports = {
  getAllDumpsites,
  addDumpsite
};














