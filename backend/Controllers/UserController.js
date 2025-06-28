import UserModel from '../Models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// get user 
export const getUser = async (req, res) => {

    const id = req.params.id;

    try {
        const user = await UserModel.findById(id);

        if (user) {
            const { password, ...otherDetails } = user._doc; // Exclude password from the response (only admin can see it/later)
            res.status(200).json(otherDetails);
        }else {
            res.status(404).json("User doesn't exist");
        }
    } catch (error) {
        res.status(500).json(error);
    }

};

// update user
export const updateUser = async (req, res) => {
    const id = req.params.id; //user to be updated and current user id is the updater id
    const { _id, currentUserAdminStatus, password } = req.body;

    if (id === _id ) {
        try {

            if(password) {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrypt.hash(password, salt);
            }

            const user = await UserModel.findByIdAndUpdate(id, req.body, { new: true });
            const token = jwt.sign(
                {username: user.username, id: user._id},
                process.env.JWT_SECRET,
                 {expiresIn: "1h"}
            );
            res.status(200).json({user, token});

        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("Access Denied! You can only update your own account");
    }
    
}

// delete user
export const deleteUser = async (req, res) => {
    const id = req.params.id; //user to be deleted and current user id is the deleter id
    const { currentUserId, currentUserAdminStatus } = req.body;

    if (id === currentUserId || currentUserAdminStatus) {
        try {
            await UserModel.findByIdAndDelete(id);
            res.status(200).json("User deleted successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    } else {
        res.status(403).json("Access Denied! You can only delete your own account");
    }
}

// follow a user
export const followUser = async (req, res) => {
    const id = req.params.id; //user to be followed
    const { currentUserId } = req.body;

    if (id === currentUserId) {
        res.status(403).json("Action Forbidden! You can't follow yourself");
    } else {
        try {
            const userToFollow = await UserModel.findById(id);
            const currentUser = await UserModel.findById(currentUserId);

            if (!userToFollow.followers.includes(currentUserId)) {
                await userToFollow.updateOne({ $push: { followers: currentUserId } });
                await currentUser.updateOne({ $push: { following: id } });
                res.status(200).json("User followed successfully");
            } else {
                res.status(403).json("You already follow this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

// unfollow a user
export const unfollowUser = async (req, res) => {
    const id = req.params.id; //user to be unfollowed
    const { currentUserId } = req.body;

    if (id === currentUserId) {
        res.status(403).json("Action Forbidden! You can't unfollow yourself");
    } else {
        try {
            const userToUnfollow = await UserModel.findById(id);
            const currentUser = await UserModel.findById(currentUserId);

            if (userToUnfollow.followers.includes(currentUserId)) {
                await userToUnfollow.updateOne({ $pull: { followers: currentUserId } });
                await currentUser.updateOne({ $pull: { following: id } });
                res.status(200).json("User unfollowed successfully");
            } else {
                res.status(403).json("You don't follow this user");
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}