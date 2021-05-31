// Validation Register
const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const schema = {
    name: Joi.string().required().min(6),
    email: Joi.string().required().email().min(6),
    password: Joi.string().required().min(6),
  };

  return Joi.validate(data, schema);
};

const loginValidation = (data) => {
  const schema = {
    email: Joi.string().required().email().min(6),
    password: Joi.string().required().min(6),
  };

  return Joi.validate(data, schema);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
