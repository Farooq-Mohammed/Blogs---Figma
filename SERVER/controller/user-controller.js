import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

import User from "../model/userModel.js";

dotenv.config();

//@description Signup user
//@route POST /signup
//@access public
export const signupUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);

    const user = {
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    };

    const newUser = new User(user);
    await newUser.save();

    return res.status(200).json({ msg: "Signup successfull.!!" });
  } catch (error) {
    if (error.code === 11000) {
      // duplicate entry
      return res.status(409).json({ msg: "Email is already taken", error });
    }
    return res.status(500).json({ msg: "unable to signup user", error });
  }
};

//@description Login user
//@route POST /login
//@access public
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user) return res.status(404).json({msg: "Email not found in database"});

    const match = await bcrypt.compare(req.body.password, user.password);
    if(!match) return res.status(401).json({msg: "Password does not match"}); 
    console.log('Match!!');
    
    const accesstoken = jwt.sign(user.toJSON(), process.env.ACCESS_TOKEN_SECRET, { expiresIn: '60m' });
    return res.status(200).json({ msg: 'Login Successfull', username: user.username, email: user.email, id: user._id,accesstoken });
    
  } catch(error) {
    return res.status(500).json({msg: "Error occured during login", error});
  }
}

