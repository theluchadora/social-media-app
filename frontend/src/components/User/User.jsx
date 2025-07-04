import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { followUser, unfollowUser } from '../../actions/userAction';

const User = ({person}) => {

    const dispatch = useDispatch();
    const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;
    const {user}= useSelector((state) => state.auth.authData);
    const [following, setFollowing] = useState(person.followers.includes(user._id));

    const handleFollow = () => {
        following ? 
        dispatch(unfollowUser(person._id, user)) :
        dispatch(followUser(person._id, user));
        setFollowing((prev) => !prev);
    }
  return (
    <div className="follower">
                    <div>
                        <img src={
                            person.profilePicture
                            ? `${serverPublicFolder}${person.profilePicture}?${Date.now()}`
                            : `${serverPublicFolder}theDefaultProfile.png`
                        } alt='' className='followerImg'/>
                        <div className="name">
                            <span>{person.firstname}</span>
                            <span>{person.username}</span>
                        </div>
                    </div>
                    <button className={following? "button fc-button UnfollowButton": "button fc-button" } onClick={handleFollow}>
                        {following ? "Unfollow" : "Follow"}
                    </button>
                </div>
  )
}

export default User