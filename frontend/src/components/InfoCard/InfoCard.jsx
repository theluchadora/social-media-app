import React, { useState, useEffect } from 'react'
import './InfoCard.css'
import { FaPen } from "react-icons/fa";
import ProfileModal from '../ProfileModal/ProfileModal'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import * as UserApi from '../../api/UserRequest.js'
import { logOut } from '../../actions/AuthAction.js';



const InfoCard = () => {

    const [modalOpened, setModalOpened] = useState(false);

    const dispatch = useDispatch();
    const params = useParams();

    const profileUserId = params.id;
    const [profileUser, setProfileUser] = useState({});

    const {user} = useSelector((state) => state.auth.authData);

    useEffect(() => {
        const fetchProfileUser = async () => {
           if(profileUserId === user._id) {
                setProfileUser(user);
            } else {
                const profileUser = await UserApi.getUser(profileUserId);
                setProfileUser(profileUser);
            }


    }
        fetchProfileUser();
    },[user]);

    const handleLogout = () => {
        dispatch(logOut());
    }
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <div>
                <h4>Profile Info</h4>
                 {user._id === profileUserId ? (
                     <div>
                    <FaPen onClick={()=>setModalOpened(true)}/>
                    <ProfileModal 
                      modalOpened={modalOpened} 
                      setModalOpened={setModalOpened}
                      data={user}
                      />
                </div>
                 ):("")}   
               
            </div>
            
        </div>

        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>{profileUser.relationship}</span>
        </div>

        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>{profileUser.livesin}</span>
        </div>

        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>{profileUser.worksAt}</span>
        </div>

        <button className="button logout-button" onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default InfoCard