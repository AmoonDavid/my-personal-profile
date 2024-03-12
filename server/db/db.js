const mongoose = require('mongoose');

//const URI = "mongodb://127.0.0.1:27017/mern_admin";
const URI = process.env.MONGODB_URI;

const connect = async () => {
  try {
    await mongoose.connect(URI);
    console.log('Successfully Connected to the Database');
  } catch(error) {
    console.log('Database connection failed');
    process.exit(0);
  }
}

module.exports = connect;