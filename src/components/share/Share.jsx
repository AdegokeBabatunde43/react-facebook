import React from 'react'
import './share.css'
import {MdPermMedia, MdLabel, MdRoom}from 'react-icons/md'
import {BsFillEmojiSmileFill} from 'react-icons/bs'

const Share = () => {
  return (
    <div className='share'>
      <div className="sharewrapper">

        <div className="shareTop">
            <img  className="shareProfileImg"src="/assest/selfme.jpg" alt="" />
            <input type="text" placeholder="What's in your mind" className='shareInput' />
        </div>
        <hr  className='shareHr'/>
        <div className="shareBottom"></div>
        <div className="shareOptions">
            <div className="shareOption">
                <MdPermMedia className='shareIcon' />
                <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
                <MdLabel className='shareIcon 'style= {{color: 'blue'}} />
                <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
                <MdRoom className='shareIcon' style={{color: 'green'}}/>
                <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
                <BsFillEmojiSmileFill className='shareIcon' style={{color: 'gold'}}/>
                <span className="shareOptionText">Feelings</span>
            </div>
            <button className='shareButton'>Share</button>
        </div>
        
      </div>
    </div>
  )
}

export default Share
