import React, { use } from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
import { Link } from 'react-router-dom'
import './ProfileCard.css'
import { useSelector } from 'react-redux'

const ProfileCard = ({location}) => {

    const { user } = useSelector((state) => state.auth.authData);
    const posts = useSelector((state) => state.post.posts);
    const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    

  return (
    <div className="ProfileCard">
        <div className="ProfileImages">
            <img
                src={
                user.coverPicture
                    ? `${serverPublicFolder}${user.coverPicture}?${Date.now()}`
                    : `${serverPublicFolder}theDefaultCover.png`
                }
                alt=""
            />
            <img
                src={
                user.profilePicture
                    ? `${serverPublicFolder}${user.profilePicture}?${Date.now()}`
                    : `${serverPublicFolder}theDefaultProfile.png`
                }
                alt=""
            />
        </div>


        <div className="ProfileName">
            <span>{user.firstname} {user.lastname}</span>
            <span>{user.worksAt? user.worksAt: "write about yourself"}</span>
        </div>

        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>{user.following.length}</span>
                    <span>Following</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>{user.followers.length}</span>
                    <span>Followers</span>
                </div>

                {location === 'profilePage' && (
                    <>
                    <div className="vl">

                    </div>
                    <div className="follow">
                        <span>{posts.filter((post)=> post.userId === user._id).length}</span>
                        <span>Posts</span>
                    </div>
                    </>
                )}
            </div>
            <hr />
        </div>

        {location === 'profilePage'? '': 
        <span>
            <Link to={`/profile/${user._id}`} style={{textDecoration: "none", color: "inherit"}}>
              My Profile
            </Link> 
        </span> }
        
    </div>
  )
}

export default ProfileCard