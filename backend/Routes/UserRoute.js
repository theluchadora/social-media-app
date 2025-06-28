import express from 'express';
import { deleteUser, followUser, getUser, unfollowUser, updateUser , getAllUser} from '../Controllers/UserController.js';
import authMiddleWare from '../MiddleWare/authMiddleWare.js';
import { get } from 'mongoose';


const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getUser);
router.put('/:id',authMiddleWare, updateUser); 
router.delete('/:id',authMiddleWare, deleteUser); 
router.put('/:id/follow',authMiddleWare, followUser);
router.put('/:id/unfollow',authMiddleWare, unfollowUser);


export default router;