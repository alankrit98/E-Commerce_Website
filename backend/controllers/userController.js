import validator from 'validator';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import userModel from '../models/userModel.js';


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}


//Route for user login
const loginUser = async (req, res) => {


}

//Route for user registration
const registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;

        //check if user already exists
        const userExists = await userModel.findOne({email})
        if(userExists) {
            res.json({success: false, message: 'User already exists'})
        }

        // validating email and strong password
        if(!validator.isEmail(email)) {
            res.json({success: false, message: 'Please enter a valid Email'})
        }
        if(password.length < 8) {
            res.json({success: false, message: 'Password must be at least 8 characters'})
        }

        //hashing password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //create new user
        const newUser = new userModel({
            name,
            email,
            password: hashedPassword
        })

        //save user to db
        const user = await newUser.save();

        const token = createToken(user._id);
        res.json({success: true, token})

    } catch(err) {
        console.log(err);
        res.json({success: false, message: err.message})
    }
}

//Route for admin login
const adminLogin = async (req, res) => {


}

export { loginUser, registerUser, adminLogin }