import { Router } from 'express';

const router = Router();

let todos: { id: string; task: string; completed: boolean }[] = [];

router.get('/', (req, res) => {
  res.json(todos);
});

router.post('/', (req, res) => {
  const { id, task, completed } = req.body;

  const newTodo = { id, task, completed: completed || false };
  todos.push(newTodo);

  res.status(201).json({ message: 'TODO added successfully', todo: newTodo });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const todoIndex = todos.findIndex((todo) => todo.id === id);

  todos[todoIndex] = { ...todos[todoIndex], task: task || todos[todoIndex].task, completed };

  res.json({ message: 'TODO updated successfully', todo: todos[todoIndex] });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  todos = todos.filter((todo) => todo.id !== id);

  res.json({ message: 'TODO deleted successfully' });
});

export default router;
