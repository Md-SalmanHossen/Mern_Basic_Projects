// app.js
const express = require('express');
const cors = require('cors');
const noteRoutes = require('./routes/noteRoutes');
const connectDB = require('./config/db');

const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/notes', noteRoutes);

module.exports = app;
