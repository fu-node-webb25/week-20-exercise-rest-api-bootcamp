import todoSchema from '../models/todo.schema.js';
import userSchema from '../models/user.schema.js';

export const validateTodoBody = (req, res, next) => {
    const {error} = todoSchema.validate(req.body);

    if(error) {
        next({
            status : 400,
            message : error.details[0].message
        });
    }

    next();
}   
export const validateUserBody = (req, res, next) => {
    const {error} = userSchema.validate(req.body);

    if(error) {
        next({
            status : 400,
            message : error.details[0].message
        });
    }

    next();
}   
