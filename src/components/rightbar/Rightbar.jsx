import React from 'react'
import './rightbar.css'
import {Users} from '../../dummyData'
import Online from '../online/Online'
import Profile from '../profile/Profile'

const Rightbar = ({profile}) => {
  const HomeRightBar = () => {
    return(
      <>
        <div className="birthdayContainer">
    <img className="birthdayImg" src="/assest/gift.png" alt="" />
    <span className="birthdayText"> <b>Naski Nero</b> and  <b>3 other friends</b> have a birthday today</span>
  </div>
  <img className="righbartAd" src="/assest/love2.jpg" alt="" />
  <h4 className="rightbarTitle">Online Friends</h4>
  <ul className="rightbarFriendList">
  {Users.map((u)=> (
    <Online key={u.id} user={u}/>
  ))}

  
  </ul>
      </>
    )
  }
  const ProfileRightBar = ( ) => {
    return (
        <>
        <h4 className="rightbarTitle">User Information Title</h4>
        <div className='rightbarInfo'>
          <div className="rightInfoItem">
            <span className="rightbarInfoKey">
              City
            </span>
            <span className="rightbarInfoValue">
              Newyork
            </span>
          </div>
          <div className="rightInfoItem">
            <span className="rightbarInfoKey">
              From:
            </span>
            <span className="rightbarInfoValue">
              Madrid
            </span>
          </div>
          <div className="rightInfoItem">
            <span className="rightbarInfoKey">
              Relationship
            </span>
            <span className="rightbarInfoValue">
              Single
            </span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className='rightbarFollowings'>
          <div className='rightbarFollowing'>
            <img src="/assest/love5.jpg" alt="" className='rightbarFollowingImg'/>
            <span className="rightbarFollowingName">
              Tunde Adegoke
            </span>

          </div>
          <div className='rightbarFollowing'>
            <img src="/assest/selfme.jpg" alt="" className='rightbarFollowingImg'/>
            <span className="rightbarFollowingName">
              Folakemi Daniel
            </span>

          </div>
          <div className='rightbarFollowing'>
            <img src="/assest/love2.jpg" alt="" className='rightbarFollowingImg'/>
            <span className="rightbarFollowingName">
              Jamiu Kehinde
            </span>

          </div>
          <div className='rightbarFollowing'>
            <img src="/assest/love1.jpg" alt="" className='rightbarFollowingImg'/>
            <span className="rightbarFollowingName">
              Olusuumbo OkikiOla
            </span>

          </div>
          <div className='rightbarFollowing'>
            <img src="/assest/love5.jpg" alt="" className='rightbarFollowingImg'/>
            <span className="rightbarFollowingName">
              Friday Ojo
            </span>

          </div>
          <div className='rightbarFollowing'>
            <img src="/assest/love4.png" alt="" className='rightbarFollowingImg'/>
            <span className="rightbarFollowingName">
              Dolapo Oseni
            </span>

          </div>

        </div>
        </>
    )

  }
  return (
    <div className='rightbar'>
<div className="rightbarWrapper">
{profile ? <ProfileRightBar/>  : < HomeRightBar/>}
</div>

    </div>
  )
}

export default Rightbar