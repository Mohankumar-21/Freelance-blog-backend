
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
  
    await mongoose.connect("mongodb+srv://shankar:test123@cluster0.n1hs6yh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1); 
  }
};

module.exports = connectDB;
