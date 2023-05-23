const User = require('../models/userModel');

// login a user
const loginUser = (req,res) =>{
res.json({msg:'login user'})
}

// signup user
const signupUser = (req,res) =>{
    res.json({msg:'Signup  user'})
}

module.exports = {
    loginUser,
    signupUser
}