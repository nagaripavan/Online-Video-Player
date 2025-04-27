import React, { useEffect, useState } from 'react'
import './recommended.css'
import { API_KEY } from '../../data'
import moment from 'moment'
import { Link } from 'react-router-dom'

const recommended = ({categoryId}) => {
    const [apiData,setApiData]=useState([])

    const fetchData=async ()=>{
                const recommendedData_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${categoryId}&key=${API_KEY}`
                await fetch(recommendedData_url).then(res=>res.json()).then(data=>setApiData(data.items))
            }

    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className="recommended-section">
        {apiData.map((item,index)=>{
            return(
                <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index} className="recommended-video">
                    <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                    <div className="video-details">
                        <h3>{item.snippet.title.slice(0,35)+".."}</h3>
                         <p>{item.snippet.channelTitle}</p>
                        <p>{moment(item.snippet.publishedAt).fromNow()}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}

export default recommended