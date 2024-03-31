// routes/tasks.js
const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Add a task
router.post('/', async (req, res) => {
  try {
    const { task } = req.body;
    const newTask = await Task.create({ task });
    res.status(201).json(newTask);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a task
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
