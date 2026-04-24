const createError = (message, statusCode = 400) => {
  const error = new Error(message);
  error.statusCode = statusCode;
  return error;
};

const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const validateContactInput = (req, res, next) => {
  const { name, email, message } = req.body || {};

  if (typeof name !== 'string' || !name.trim()) {
    return next(createError('Name is required'));
  }

  if (name.trim().length < 2 || name.trim().length > 100) {
    return next(createError('Name must be between 2 and 100 characters'));
  }

  if (typeof email !== 'string' || !email.trim()) {
    return next(createError('Email is required'));
  }

  if (!isValidEmail(email.trim())) {
    return next(createError('Please provide a valid email address'));
  }

  if (email.trim().length > 254) {
    return next(createError('Email cannot exceed 254 characters'));
  }

  if (typeof message !== 'string' || !message.trim()) {
    return next(createError('Message is required'));
  }

  if (message.trim().length < 10 || message.trim().length > 2000) {
    return next(createError('Message must be between 10 and 2000 characters'));
  }

  req.body = {
    ...req.body,
    name: name.trim(),
    email: email.trim().toLowerCase(),
    message: message.trim()
  };

  return next();
};

module.exports = {
  createError,
  validateContactInput
};
