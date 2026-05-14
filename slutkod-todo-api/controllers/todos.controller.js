import { todos } from '../data/todos.data.js';
import { createTodo } from '../utils/todos.utils.js';

export const getTodos = (req, res, next) => {
    const { done } = req.query;
    let filtered = todos;

    if(done) {
        filtered = todos.filter(t => t.completed === (done === 'true'));
    }
    
    if(!filtered.length) {
        next({
            status : 404,
            message : 'No todos found!'
        });
    }
    
    res.json({
        success : true,
        todos : filtered
    });
}

export const getTodoById = (req, res, next) => {
    const { id } = req.params;
    const todo = todos.find(t => t.id === id);

    if(!todo) {
        next({
            status : 400,
            message : 'No todo found with the corresponding id'
        });
    }

    res.json({
        success : true,
        todo
    });
}

export const addNewTodo = (req, res, next) => {
    const { todo } = req.body;
    const newTodo = createTodo(todo);

    todos.push(newTodo);

    res.status(201).json({
        success : true,
        message : 'New todo created successfully',
        todo : newTodo
    });
}

export const updateTodoStatus = (req, res, next) => {
    const { id } = req.params;
    const todo = todos.find(t => t.id === id);

    if(!todo) {
        next({
            status : 400,
            message : 'No todo found with the corresponding id'
        });
    }

    todo.completed = !todo.completed;

    res.json({
        success : true,
        message : 'Todo status updated successfully',
        todo
    });
}

export const deleteTodo = (req, res, next) => {
    const { id } = req.params;
    const todo = todos.find(t => t.id === id);

    if(!todo) {
        next({
            status : 400,
            message : 'No todo found with the corresponding id'
        });
    }

    const filtered = todos.filter(t => t.id !== id);
    todos.length = 0;
    todos.push(...filtered);

    res.json({
        success : true,
        message : 'Todo deleted successfully',
        todo
    });
}