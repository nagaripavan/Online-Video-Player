import React, { useState } from 'react'
import './home.css'
import Sidebar from '../../sidebar/sidebar'
import Feed from '../../components/feed/feed'

const home = ({sidebar}) => {
  const [category,setCategory]=useState(0);
  return (
    <>
        <Sidebar sidebar={sidebar} category={category} setCategory={setCategory}/>
        <div className={`container ${sidebar?"":'large-container'}`}>
            <Feed category={category}/>
        </div>
    </>
  )
}

export default home