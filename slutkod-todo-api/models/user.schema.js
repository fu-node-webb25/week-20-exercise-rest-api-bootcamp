import Joi from 'joi';

const schema = Joi.object({
    username : Joi.string().alphanum().min(4).max(20).required(),
    password : Joi.string().alphanum().min(6).max(20).required(),
});

export default schema;