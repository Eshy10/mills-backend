require('dotenv').config();
const mongoose = require('mongoose');
const Mill = require('./models/Mill');  
const millData = require('./mills.json');

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  console.log('Database connected');
  try {
    await Mill.insertMany(millData);
    console.log('Data successfully seeded!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    mongoose.connection.close();
  }
})
.catch(error => console.error('Database connection error:', error));