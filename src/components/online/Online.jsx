import React from 'react'
import './online.css'

const Online = ({user}) => {
  return (
    <li className="rightBarFriend">
    <div className="rightBarprofileImgContainer">
      <img className="rightBarprofileImg" src={user.profilePicture} alt="" />
      <span className="rightBarOnline"></span>
    </div>
    <span className="rightBarUsername">{user.username}</span>
  </li>
  )
}

export default Online