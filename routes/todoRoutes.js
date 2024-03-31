// routes/todoRoutes.js
const express = require('express');
const router = express.Router();
const Todo = require('../models/Todo');

// Route to add a task
router.post('/', async (req, res) => {
  try {
    const { task } = req.body;
    const newTodo = await Todo.create({ task });
    res.status(201).json(newTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to delete a task
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({ message: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Route to update a task
router.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { task } = req.body;
    const updatedTodo = await Todo.findByIdAndUpdate(id, { task }, { new: true });
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
