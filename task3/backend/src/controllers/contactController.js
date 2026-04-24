const Message = require('../models/Message');
const mongoose = require('mongoose');
const { sendContactNotification } = require('../services/emailService');

const submitContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    let savedMessage;

    if (mongoose.connection.readyState === 1) {
      savedMessage = await Message.create({
        name,
        email,
        message
      });
    } else {
      savedMessage = {
        _id: new mongoose.Types.ObjectId(),
        name,
        email,
        message,
        createdAt: new Date()
      };
    }

    let emailSent = false;

    try {
      await sendContactNotification({ name, email, message });
      emailSent = true;
    } catch (emailError) {
      console.error('Email notification failed:', emailError.message);
    }

    return res.status(201).json({
      success: true,
      message: 'Message received successfully',
      emailSent,
      data: {
        id: savedMessage._id,
        name: savedMessage.name,
        email: savedMessage.email,
        message: savedMessage.message,
        createdAt: savedMessage.createdAt
      }
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  submitContact
};
