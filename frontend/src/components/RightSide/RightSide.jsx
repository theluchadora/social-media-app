import React, { useState } from 'react'
import './RightSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { FaCog } from 'react-icons/fa'
import TrendCard from '../TrendCard/TrendCard'
import ShareModal from '../ShareModal/ShareModal'
import { Link } from 'react-router-dom'

const RightSide = () => {

  const [modalOpened, setModalOpened] = useState(false);

  return (
    <div className="RightSide">
        <div className="navIcons">
            <Link to = '../home'>
            <img src={Home} alt="" />
            </Link>
            <FaCog />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>

        <TrendCard />

        <button className='button rs-button' onClick={()=>setModalOpened(true)}>
            Share
        </button>
        <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened}/>
    </div>
  )
}

export default RightSide