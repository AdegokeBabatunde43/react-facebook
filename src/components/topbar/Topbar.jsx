import React from 'react'
import './topbar.css'
import {BsSearch} from 'react-icons/bs'
import {BsFillPersonFill, BsFillChatFill, BsBellFill} from 'react-icons/bs'



const Topbar = () => {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className='logo'>Lamasocial</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <BsSearch className="searchIcon" />
         <input type="text"  placeholder='Search for friends' className='searchInput'/>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Home Page</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcon">
          <div className="topbarIconItem">
            <BsFillPersonFill />
            <span className="topbarIconBadge">1</span>

          </div>
          <div className="topbarIconItem">
            <BsFillChatFill />
            <span className="topbarIconBadge">2</span>

          </div>
          <div className="topbarIconItem">
            <BsBellFill />
            <span className="topbarIconBadge">1</span>

          </div>
        </div>
        <img src='/assest/selfme.jpg' alt="" className='topbarImage'/>
      </div>
    </div>
  )
}

export default Topbar
