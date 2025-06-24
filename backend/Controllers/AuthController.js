import UserModel from "../Models/userModel.js";
import bcrypt from "bcrypt";

//Register new User
export const registerUser = async (req, res) => {

    const { username, password, firstname, lastname } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new UserModel({
        username,
        password: hashedPassword,
        firstname,
        lastname
    });

    try {
        await newUser.save();
        res.status(200).json(newUser);
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

            isPasswordValid? res.status(200).json(user): res.status(400).json("Wrong Password");
            
        }else {
            res.status(404).json("User doesn't exist");
        }
    } catch (error) {
        res.status(500).json(error);
    }
}