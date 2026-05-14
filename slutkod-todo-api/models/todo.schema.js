import Joi from 'joi';

const schema = Joi.object({
    todo : Joi.string().min(5).required()
});

export default schema;