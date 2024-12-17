const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    firstName: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages({
        "string.base": "Name must be a string.",
        "string.empty": "Name is required.",
        "string.min": "Name must be at least 3 characters long.",
        "string.max": "Name must not exceed 30 characters.",
      }),
    lastName: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages({
        "string.base": "Name must be a string.",
        "string.empty": "Name is required.",
        "string.min": "Name must be at least 3 characters long.",
        "string.max": "Name must not exceed 30 characters.",
      }),
    email: Joi.string()
      .email()
      .required()
      .messages({
        "string.empty": "Email is required.",
        "string.email": "Please provide a valid email address.",
      }),
    password: Joi.string()
      .min(6)
      .required()
      .messages({
        "string.empty": "Password is required.",
        "string.min": "Password must be at least 6 characters long.",
      }),
  });

  // Validate the request body against the schema
  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    // Send validation errors as a response
    return res.status(400).json({
      message: "Validation failed",
      errors: error.details.map((err) => err.message),
    });
  }

  // Proceed to the next middleware if validation is successful
  next();
};

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string()
        .email()
        .required()
        .messages({
          "string.empty": "Email is required.",
          "string.email": "Please provide a valid email address.",
        }),
      password: Joi.string()
        .min(6)
        .required()
        .messages({
          "string.empty": "Password is required.",
          "string.min": "Password must be at least 6 characters long.",
        }),
    });
  
    // Validate the request body against the schema
    const { error } = schema.validate(req.body, { abortEarly: false });
  
    if (error) {
      // Send validation errors as a response
      return res.status(400).json({
        message: "Validation failed",
        errors: error.details.map((err) => err.message),
      });
    }
  
    // Proceed to the next middleware if validation is successful
    next();
  };

module.exports = {signupValidation, loginValidation};
