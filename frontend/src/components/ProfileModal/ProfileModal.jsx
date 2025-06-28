import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import './ProfileModel.css'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/uploadAction';
import { updateUser } from '../../actions/userAction';


function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();
  const {password, ...otherData} = data;
  const [formData, setFromData] = useState(otherData);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const {user}= useSelector((state) => state.auth.authData);

  const handleChange = (e) => {
    setFromData({...formData, [e.target.name]: e.target.value});
  }

  const onImageChange = (event) => {
    if(event.target.files && event.target.files[0]){
        let img = event.target.files[0];
        if(event.target.name === "profileImage"){
            setProfileImage(img);
        } else {
            setCoverImage(img);
        }
    }
  }

  const handleSubmit = (e) => {
        e.preventDefault();
        let userData = formData;
        if(profileImage){
            const data = new FormData();
            const filename = Date.now() + profileImage.name;
            data.append("name", filename);
            data.append("file", profileImage);
            userData.profilePicture = filename;
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.error(error);
            }
        }
        if(coverImage){
            const data = new FormData();
            const filename = Date.now() + coverImage.name;
            data.append("name", filename);
            data.append("file", coverImage);
            userData.coverPicture = filename;
            try {
                dispatch(uploadImage(data));
            } catch (error) {
                console.error(error);
            }
        }
        dispatch(updateUser(param.id, userData));
        setModalOpened(false);
  }


  return (
    <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
        overlayProps={{
            color: theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2],
            opacity: 0.55,
            blur: 3,
        }}

        >
        <form className="infoForm">
            <h3>Your info</h3>

            <div>
                <input 
                   type="text" 
                   className="infoInput" 
                   name='firstname' 
                   placeholder='First Name'
                   onChange={handleChange}
                   value={formData.firstname}
                   />
                <input 
                   type="text" 
                   className="infoInput" 
                   name='lastname' 
                   placeholder='Last Name'
                   onChange={handleChange}
                   value={formData.lastname}
                />
            </div>
            
            <div>
                <input 
                   type="text" 
                   className="infoInput" 
                   name='worksAt' 
                   placeholder='Works at'
                   onChange={handleChange}
                   value={formData.worksAt}
                   />
            </div>
            <div>
                <input 
                   type="text" 
                   className="infoInput" 
                   name='livesin' 
                   placeholder='Lives in'
                   onChange={handleChange}
                   value={formData.livesin}
                   />
                <input 
                   type="text" 
                   className="infoInput" 
                   name='country' 
                   placeholder='Country'
                   onChange={handleChange}
                   value={formData.country}
                   />
            </div>
            <div>
                <input 
                   type="text" 
                   className="infoInput" 
                   name='relationship' 
                   placeholder='Relationship Status'
                   onChange={handleChange}
                   value={formData.relationship}
                   />
            </div>
            <div>
                Profile Image 
                <input type="file" name='profileImage' onChange={onImageChange}/>
                Cover Image 
                <input type="file" name='coverImage' onChange={onImageChange}/>
            </div>

            <button className='button infoButton' onClick={handleSubmit}>
                Update
            </button>
        </form>
        </Modal>

  );
}

export default ProfileModal;
