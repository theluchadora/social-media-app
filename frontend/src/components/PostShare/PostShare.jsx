import React, { useState, useRef } from 'react'
import './PostShare.css'
import ProfileImage from '../../img/profileImg.jpg'
import { FaImage } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";



const PostShare = () => {
    const [image, setImage] = useState(null)
    const imageRef = useRef()

    const onImageChange =(event)=>{
        if(event.target.files && event.target.files[0]){
            let img = event.target.files[0];
            setImage({
                image: URL.createObjectURL(img)
            })
        }
    }


  return (
    <div className="PostShare">
        <img src={ProfileImage} alt='' />
        <div>
           <input type="text" placeholder="What's happening" />
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
            <button className='button ps-button'>
                Share
            </button>
            <div style={{display: "none"}}>
                <input type="file" name='myImage' ref={imageRef} onChange={onImageChange}/>
            </div>
          </div>
          {image && (
            <div className='previewImage'>
                <FaTimes onClick={()=>setImage(null)}/>
                <img src={image.image} alt='' />
            </div>

          )}
        </div>
    </div>
    
  )
}

export default PostShare