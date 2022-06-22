import React from 'react'
import './profile.css'
import Feed from '../../components/feeds/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/siderbar/Sidebar'
import Topbar from '../../components/topbar/Topbar'

const Profile = () => {
  return (
    <>
      <Topbar />
    <div className='profile'>
    <Sidebar />
   
    <div className="profileRight">
      <div className="profileRightTop">
        <div className="profileCover">
        <img className="profileCoverImg" src="/assest/love5.jpg" alt="" />
        <img className="profileUserImg" src="/assest/love2.jpg" alt="" />
        </div>
       
      </div>
      <div className="profileInfo">
        <h4 className="profileInfoName">Naski Nero</h4>
        <span className="profileInfoDesc">Hello My Friends</span>

      </div>
      <div className="profileRightBottom">
      <Feed />
     <Rightbar profile/>
      </div>
    </div>
    
    </div>
    </>
  )
}

export default Profile
