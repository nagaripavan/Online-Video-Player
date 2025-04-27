import React, { useEffect, useState } from 'react'
import './sidebar.css'
import home from '../assets/home.svg'
import gaming from '../assets/gaming.svg'
import autoMobile from '../assets/auto-mobile.svg'
import sports from '../assets/sports.svg'
import entertainment from '../assets/entertainment.svg'
import technology from '../assets/technology.svg'
import music from '../assets/music.svg'
import blog from '../assets/blog.svg'
import news from '../assets/newspaper.svg'
import etv from '../assets/etv.jpg'
import shoutout from '../assets/shoutout.jpg'
import prasadtech from '../assets/prasadtech.jpg'
import telusko from '../assets/telusko.jpg'
import ayedude from '../assets/ayedude.jpg'

const sidebar = ({sidebar,setCategory,category}) => {

    
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
        <div className="shortcut-links">
            <div className={`side-link ${category===0?'active':''}`} onClick={() => setCategory(0)}>
                <img src={home} alt="home"/><p>Home</p>
            </div>
            <div className={`side-link ${category===20?'active':''}`} onClick={() => setCategory(20)}>
                <img src={gaming} alt="home"/><p>Gaming</p>
            </div>
            <div className={`side-link ${category===2?'active':''}`} onClick={() => setCategory(2)}>
                <img src={autoMobile} alt="home"/><p>Automobile</p>
            </div>
            <div className={`side-link ${category===17?'active':''}`} onClick={() => setCategory(17)}>
                <img src={sports} alt="home"/><p>Sports</p>
            </div>
            <div className={`side-link ${category===24?'active':''}`} onClick={() => setCategory(24)}>
                <img src={entertainment} alt="home"/><p>Entertainment</p>
            </div>
            <div className={`side-link ${category===28?'active':''}`} onClick={() => setCategory(28)}>
                <img src={technology} alt="home"/><p>Technology</p>
            </div>
            <div className={`side-link ${category===10?'active':''}`} onClick={() => setCategory(10)}>
                <img src={music} alt="home"/><p>Music</p>
            </div>
            <div className={`side-link ${category===22?'active':''}`} onClick={() => setCategory(22)}>
                <img src={blog} alt="home"/><p>Blog</p>
            </div>
            <div className={`side-link ${category===25?'active':''}`} onClick={() => setCategory(25)}>
                <img src={news} alt="home"/ ><p>News</p>
            </div>
            <hr className="hr" />
            <div className="subscribed-list">
                <h3>Subscriptions</h3>
                <div className="side-link">
                    <img src={etv} alt="home"/><p>ETV Telangana</p>
                </div>
                <div className="side-link">
                    <img src={shoutout} alt="home"/><p>Shoutout YT</p>
                </div>
                <div className="side-link">
                    <img src={prasadtech} alt="home"/><p>PrasadTechInTelugu</p>
                </div>
                <div className="side-link">
                    <img src={telusko} alt="home"/><p>Telusko</p>
                </div>
                <div className="side-link">
                    <img src={ayedude} alt="home"/><p>Ayedude</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default sidebar