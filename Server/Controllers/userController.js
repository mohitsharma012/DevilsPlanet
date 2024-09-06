import userModel from "../Models/usersModel.js";
import bcrypt from "bcrypt";
import validator from "validator";
import jwt from "jsonwebtoken";
import { set } from "mongoose";

// Function to Login user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if all fields are entered
    if (!email || !password) {
      return res.json({ success: false, message: "Please enter all fields" });
    }

    // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User does not exist"});
    }

    // Compare password with hashed password in database
    bcrypt.compare(password, user.password, (err, result) => {
      if (err) {
        return res.json({ success: false, message: "Error comparing passwords" });
      }
      if (result) {
        // Generate JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET,);
        res.json({
          success: true,
          message: "User logged in successfully",
          token
        });
      } else {
        res.status(400).json({ success: false, message: "Email or Password is incorrect"});
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Function to Register user
const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    // Check if all fields are entered
    if (!name || !email || !password) {
      return res.json({ success: false, message: "Please enter all fields" });
    }

    // Check if user already exists
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User already exists" });
    }

    // Validate email format & strong password
    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }
    
    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please enter a strong password",
      });
    }

    // Hash user password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save user to database
    const newUser = new userModel({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ id: savedUser._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send response
    res.json({ success: true, message: "User registered successfully", token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { loginUser, registerUser };
