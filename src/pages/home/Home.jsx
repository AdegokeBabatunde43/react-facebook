import React from 'react'
import Feed from '../../components/feeds/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Sidebar from '../../components/siderbar/Sidebar'
import Topbar from '../../components/topbar/Topbar'
import './home.css'

const Home = () => {
  return (
    <>
     <Topbar />
    <div className='homeContainer'>
    <Sidebar />
      <Feed />
     <Rightbar/>
      </div>
  
    
    </>


  )
}

export default Home
