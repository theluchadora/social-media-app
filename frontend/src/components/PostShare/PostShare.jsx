import React, { useState, useRef } from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import { FaImage } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/uploadAction';



const PostShare = () => {
    const loading = useSelector((state) => state.post.uploading);
    const [image, setImage] = useState(null)
    const imageRef = useRef()
    const dispatch = useDispatch();
    const desc = useRef();
    const { user } = useSelector((state) => state.auth.authData);
    const serverPublicFolder = process.env.REACT_APP_PUBLIC_FOLDER;

    const onImageChange =(event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage(img);
        }
    }

    const reset = () => {
        setImage(null);
        desc.current.value = "";
    }

    const handleSubmit = (e) => {
    e.preventDefault();
        const newPost = {
          userId: user._id,
          desc: desc.current.value
        } 

        if(image){
            const data = new FormData();
            const filename = Date.now() + image.name;
            data.append("name", filename);
            data.append("file", image);
            newPost.image = filename;
            console.log(newPost);
            try {
              dispatch(uploadImage(data));
            } catch (error) {
              console.error(error);
            }
        }
        dispatch(uploadPost(newPost));
        reset();
    }


  return (
    <div className="PostShare">
         <img
          src={
            user.profilePicture
              ? `${serverPublicFolder}${user.profilePicture}?${Date.now()}`
              : `${serverPublicFolder}theDefaultProfile.png`
          }
          alt=""
        />
        <div>
          
           <input 
           ref = {desc}
           required
           type="text" placeholder="What's happening" />
          <div className="postOptions">
            <div className='option' style={{color: "var(--photo)"}}
              onClick={()=>imageRef.current.click()}>
                <FaImage />
                Photo
            </div>
            <div className='option' style={{color: "var(--video)"}}
             >
                <FaPlayCircle />
                Video
            </div>
            <div className='option' style={{color: "var(--location)"}}
            >
                <FaMapMarkerAlt />
                Location
            </div>
            <div className='option' style={{color: "var(--schedule)"}}
            >
                <FaRegClock />
                Schedule
            </div>
            <button className='button ps-button' 
            onClick={handleSubmit}
            disabled={loading}
            >
                {loading ? "Uploading..." : "Share"}
            </button>
            <div style={{display: "none"}}>
                <input type="file" name='myImage' ref={imageRef} onChange={onImageChange}/>
            </div>
          </div>
          {image && (
            <div className='previewImage'>
                <FaTimes onClick={()=>setImage(null)}/>
                <img src={URL.createObjectURL(image)} alt='' />
            </div>

          )}
        </div>
    </div>
    
  )
}

export default PostShare