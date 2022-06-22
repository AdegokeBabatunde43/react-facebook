import React from 'react'
import './sidebar.css'
import {MdOutlineRssFeed} from 'react-icons/md'
import {BsFillChatLeftTextFill, BsPlayCircleFill, BsFillBookmarkFill, BsCalendarEvent} from 'react-icons/bs'
import {FaUserFriends, FaGraduationCap} from 'react-icons/fa'
import {AiOutlineQuestionCircle, AiFillMedicineBox} from 'react-icons/ai'
import {Users} from '../../dummyData'
import CloseFriends from '../closeFriends/CloseFriends'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className='sidebarList'>
            <li className='sidebarListItem'>
                <MdOutlineRssFeed className='sidebarIcon'/>
                <span className='sidebarListItemText'>Feed</span>
            </li>
            <li className='sidebarListItem'>
                <BsFillChatLeftTextFill className='sidebarIcon'/>
                <span className='sidebarListItemText'>Chat</span>
            </li>
            <li className='sidebarListItem'>
                <BsPlayCircleFill className='sidebarIcon'/>
                <span className='sidebarListItemText'>Videos</span>
            </li>
            <li className='sidebarListItem'>
                <FaUserFriends className='sidebarIcon'/>
                <span className='sidebarListItemText'>Groups</span>
            </li>
            <li className='sidebarListItem'>
                <BsFillBookmarkFill className='sidebarIcon'/>
                <span className='sidebarListItemText'>Bookmarks</span>
            </li>
            <li className='sidebarListItem'>
                <AiOutlineQuestionCircle className='sidebarIcon'/>
                <span className='sidebarListItemText'>Questions</span>
            </li>
            <li className='sidebarListItem'>
                <AiFillMedicineBox className='sidebarIcon'/>
                <span className='sidebarListItemText'>Jobs</span>
            </li>
            <li className='sidebarListItem'>
                <BsCalendarEvent className='sidebarIcon'/>
                <span className='sidebarListItemText'>Events</span>
            </li>
            <li className='sidebarListItem'>
                <FaGraduationCap className='sidebarIcon'/>
                <span className='sidebarListItemText'>Courses</span>
            </li>

        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr className='sidebarHr' />
        <ul className="sidebarFriendList">
            {Users.map((u)=>(
                <CloseFriends key={u.id} user={u} />
            ))}  

        </ul>

      </div>
    </div>
  )
}

export default Sidebar
