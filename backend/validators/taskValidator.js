const Joi = require('joi');

const createTaskValidator = (data) => {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).max(100).required(),
    description: Joi.string().trim().max(500).allow('', null),
    createdBy: Joi.string().required()
  });
  return schema.validate(data);
};

const updateTaskValidator = (data) => {
  const schema = Joi.object({
    title: Joi.string().trim().min(3).max(100).optional(),
    description: Joi.string().trim().max(500).allow('', null).optional()
  });
  return schema.validate(data);
};

module.exports = {
  createTaskValidator,
  updateTaskValidator
};
