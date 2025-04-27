import React from 'react'
import Playvideo from '../../components/playvideo/playvideo'
import './video.css'
import Recommended from '../../components/recommended/recommended'
import { useParams } from 'react-router-dom'

const video = () => {
  const {videoId, categoryId} = useParams();
  return (
    <div className='video-container'>
      <Playvideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default video