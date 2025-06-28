import express from 'express';
import { deleteUser, followUser, getUser, unfollowUser, updateUser , getAllUser} from '../Controllers/UserController.js';
import { get } from 'mongoose';


const router = express.Router();

router.get('/', getAllUser);
router.get('/:id', getUser);
router.put('/:id', updateUser); 
router.delete('/:id', deleteUser); 
router.put('/:id/follow', followUser);
router.put('/:id/unfollow', unfollowUser);


export default router;