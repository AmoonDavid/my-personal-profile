const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const schema = mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: false
  }
});

schema.methods.generateToken = async function(){
try {
  return jwt.sign ({
    id: this._id,
    userName: this.userName
  },
  process.env.JWT_SECRETKEY, {expiresIn: "30d"}
  );
} catch (error) {
  console.log(error);
}
};

const Users = new mongoose.model('User', schema);

// Users.insertOne({userName: 'Yisal-Khan', email: 'yisal94@gmail.com', phoneNumber: '0987654321'});
// Users.save();

// const URI =  "mongodb://127.0.0.1:27017/mern_admin";
// mongoose.connect(URI);

module.exports = Users;