const mongoose = require('mongoose');

const connectDB = async () => {
  const mongoUri =
    process.env.MONGODB_URI ||
    process.env.MONGODB_URI_LOCAL ||
    process.env.MONGODB_URI_ATLAS;

  if (!mongoUri) {
    console.warn('MongoDB connection string is missing. Running backend without database persistence.');
    return false;
  }

  try {
    await mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 3000,
      connectTimeoutMS: 3000
    });
    console.log('MongoDB connected');
    return true;
  } catch (error) {
    console.warn('MongoDB connection error:', error.message);
    console.warn('Running backend without database persistence.');
    return false;
  }
};

module.exports = connectDB;
