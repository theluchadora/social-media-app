import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//Register new User
export const registerUser = async (req, res) => {

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const newUser = new UserModel(req.body);
    const { username } = req.body;

    try {

        const oldUser = await UserModel.findOne({ username });
        if (oldUser) {
            return res.status(400).json("User already exists");
        }
        const user = await newUser.save();
        // Create JWT token
        const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

        res.status(200).json({user, token});
    } catch (error) {
        res.status(500).json(error);
    }
}

//Login User
export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username: username });

        if (user)
        {
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if (!isPasswordValid) {
                return res.status(400).json("Wrong Password");
            }else {
                // Create JWT token
                const token = jwt.sign({ username: user.username, id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
                
                res.status(200).json({ user, token });
            }
            
            
        }else {
            res.status(404).json("User doesn't exist");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}