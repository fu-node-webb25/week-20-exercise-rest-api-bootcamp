import { Router } from 'express';
import { getTodos, getTodoById, addNewTodo, updateTodoStatus, deleteTodo } from '../controllers/todos.controller.js';
import { validateTodoBody } from '../middlewares/validate.middleware.js';
import { authenticateUser } from '../middlewares/auth.middleware.js';

const router = Router();

// GET todos
router.get('/', getTodos);

// GET todo by id
router.get('/:id', getTodoById);

// POST new todo
router.post('/', authenticateUser, validateTodoBody, addNewTodo);

// PATCH todo status
router.patch('/:id', authenticateUser, updateTodoStatus);

// Delete todo
router.delete('/:id', authenticateUser, deleteTodo);

export default router;