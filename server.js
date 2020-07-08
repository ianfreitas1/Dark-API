const express = require('express');
const dotenv = require('dotenv');

const errorHandler = require('./middlewares/errorHandler');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Route files
const characters = require('./routes/characters');
const episodes = require('./routes/episodes');

connectDB();

const app = express();

// Mount routers
app.use('/api/characters', characters);
app.use('/api/episodes', episodes)

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log(`Server running on port ${PORT}`));