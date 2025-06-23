import React from 'react'
import './InfoCard.css'
import { FaPen } from "react-icons/fa";


const InfoCard = () => {
  return (
    <div className="InfoCard">
        <div className="infoHead">
            <div>
                <h4>Your Info</h4>
                <FaPen />
            </div>
        </div>

        <div className="info">
            <span>
                <b>Status </b>
            </span>
            <span>in Relationship</span>
        </div>

        <div className="info">
            <span>
                <b>Lives in </b>
            </span>
            <span>Addis Ababa</span>
        </div>

        <div className="info">
            <span>
                <b>Works at </b>
            </span>
            <span>Elev-8</span>
        </div>

        <button className="button logout-button">
            Logout
        </button>
    </div>
  )
}

export default InfoCard