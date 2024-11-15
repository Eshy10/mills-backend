const express = require('express');
const cors = require('cors')
const connectDB = require('./config/database');
const millRoutes = require('./routes/millRoutes');
const dumpsiteRoutes = require('./routes/dumpsiteRoutes');
const notFoundMidleware = require('./middleware/not-found')
const errorMidlleware = require('./middleware/error-handler')
require('dotenv').config();

const app = express();
connectDB();

app.use(express.json());
app.use(cors());


app.use('/api/mills', millRoutes);
app.use('/api/dumpsites', dumpsiteRoutes);

app.use(notFoundMidleware)
app.use(errorMidlleware)

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


module.exports = app; 












