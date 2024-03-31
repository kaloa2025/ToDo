// server.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const tasksRouter = require('../routes/tasks.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://kaloa2025:21004@cluster0.xgpa9vt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/tasks', tasksRouter);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
