import express from 'express';
import { Todo } from '../models/Todo.js';
import { StatusCodes } from 'http-status-codes';
const router = express.Router();

// LIST ALL TODOS
router.get('/', async (req, res, next) => {
  try {
    const todos = await Todo.find();

    res.status(200).json(todos);
  } catch (error) {
    next(error);
  }
});

// CREATE A TODO
router.post('/', async (req, res, next) => {
  try {
    const todo = new Todo(req.body);

    const createdTodo = await todo.save();

    if (!createdTodo) {
      res.status(500).json({ message: 'Something went wrong' });
    } else {
      res.status(201).json(createdTodo);
    }
  } catch (error) {
    next(error);
  }
});

// GET A SINGLE TODO
router.get('/:id', (req, res) => {
  res.send('GET SINGLE');
});

// UPDATE A TODO
router.put('/:id', (req, res) => {
  res.send('UPDATE');
});

// DELETE A TODO
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findById(id);

  if (!todo)  {
    res.status(StatusCodes.NOT_FOUND).json({message: 'Todo not found'});
    return;
  }

  const deletedTodo = await Todo.findByIdAndDelete(id);

  if (!deletedTodo) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message: 'Something went wrong'});
  }

  res.status(StatusCodes.NO_CONTENT).json(null);
});

export default router;
