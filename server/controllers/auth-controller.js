const  response = require('express');
const User = require('../model/user-model');
const bcrypt = require('bcryptjs');


const home = async (req, res) => {
  try {
    res.status(200).send('Home Page from controller 23123');
  } catch(error) {
    console.log(error);
  }
}

const login = async (req, res) => {
  try {
  const {email, password} = req.body;
  const exsistingUser = await User.findOne({email});
  if(!exsistingUser){
    return res.status(401).json({message: "Invalid Credentials"})
  }
  const isValidPassword = await bcrypt.compare(password, exsistingUser.password);
    //res.status(200).send('Login Page from controller');
    console.log(isValidPassword);
    if(!isValidPassword){
      return res.status(401).json ({message: "invalid email or password"});
    }

    return  res.status(200).json({message: "Login Successfull", exsistingUser});


  } catch(error) {
    res.status(400).send({message: "Page not found"});
  }
}

const signup = async (req, res) => {
  try {
    const { userName, password, email, phoneNumber, address } = req.body;

    const existingUser = await User.findOne({email});
    if(existingUser){
      return res.status(400).json({message: "User already exsist"});
    }

    const saltRound = 10;
    const hashPassword = await bcrypt.hash(password, saltRound);
    const UserCreated = await User.create({userName, password: hashPassword, email, phoneNumber, address});
    res.status(200).json({message: 'User created successfully', token: await UserCreated.generateToken(), usedrId: UserCreated._id.toString()});
    
    
    // res.status(200).send({message: 'Sign up page from controller'});
  } catch(error) {
    console.log(error)
    res.status(500).send({message: "Internal server error"});
  }
}

module.exports = {home, login, signup};