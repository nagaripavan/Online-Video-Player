import React, { useEffect, useState } from 'react'
import './feed.css'
import thumbnail1 from '../../assets/thumbnail1.png'
import { Link } from 'react-router-dom'
import { API_KEY, Value_coneverter } from '../../data'
import moment from 'moment'


const feed = ({category}) => {

    const [data,setData]=useState([])

    const fetchData=async ()=>{
        const videoList_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
    }

    useEffect(()=>{
        fetchData();
    },[category])

  return (
    <div className='feed'>
        {data.map((item,index)=>{
                return(
                <Link to={`video/${item.snippet.categoryId}/${item.id}`} className="card">
                    <img src={item.snippet.thumbnails.medium.url} alt="thumbnail" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{Value_coneverter(item.statistics.viewCount)} &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                 </Link>
                )
        })}
        
    </div>
  )
}

export default feed