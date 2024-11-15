const Dumpsite = require("../models/Dumpsite");
const Joi = require("joi");

const dumpsiteSchema = Joi.object({
  latitude: Joi.number().required().min(-90).max(90).label("Latitude"),
  longitude: Joi.number().required().min(-180).max(180).label("Longitude"),
  capacity: Joi.number().required().positive().label("Capacity"),
  status: Joi.string().valid("active", "inactive").required().label("Status"),
});

const getAllDumpsites = async (req, res, next) => {
  try {
    const dumpsites = await Dumpsite.find();
    res.json(dumpsites);
  } catch (error) {
    next(error);
  }
};

const addDumpsite = async (req, res, next) => {
  const { error, value } = dumpsiteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const { latitude, longitude, capacity, status } = value;
  const newDumpsite = new Dumpsite({
    location: {
      type: "Point",
      coordinates: [longitude, latitude],
    },
    capacity,
    status,
  });

  try {
    await newDumpsite.save();
    res.status(201).json(newDumpsite);
  } catch (error) {
    next(error);
  }
};

const updateDumpsite = async (req, res, next) => {
  const { id } = req.params;

  const updateDumpsiteSchema = Joi.object({
    latitude: Joi.number().min(-90).max(90).optional().label("Latitude"),
    longitude: Joi.number().min(-180).max(180).optional().label("Longitude"),
    capacity: Joi.number().positive().optional().label("Capacity"),
    status: Joi.string().valid("active", "inactive").optional().label("Status"),
  });

  const { error, value } = updateDumpsiteSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  try {
    const updateData = { ...value };
    if (value.latitude !== undefined && value.longitude !== undefined) {

      // Update GeoJSON location with latitude and longitude if provided
      updateData.location = {
        type: "Point",
        coordinates: [value.longitude, value.latitude],
      };

      // removes these properties ~ (latitude and longitude) from updateData to avoid redundant or conflicting data being sent to the database.
      delete updateData.latitude;
      delete updateData.longitude;
    }

    const updatedDumpsite = await Dumpsite.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedDumpsite) {
      return res.status(404).json({ message: "Dumpsite not found." });
    }

    res.status(200).json(updatedDumpsite);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllDumpsites,
  addDumpsite,
  updateDumpsite,
};
