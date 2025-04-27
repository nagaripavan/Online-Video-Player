import React from 'react'
import { useState,useEffect } from 'react'
import './playvideo.css'
import telusko from '../../assets/telusko.jpg'
import like from '../../assets/hand-thumbs-up.svg'
import dislike from '../../assets/hand-thumbs-down.svg'
import share from '../../assets/share.svg'
import save from '../../assets/download.svg'
import { API_KEY, Value_coneverter } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

const playvideo = () => {

    const {videoId}=useParams();

    const [apiData,setApiData]=useState(null);
    const [apiChannelData,setApiChannelData]=useState(null);
    const [apiComments,setApiComments]=useState([]);

        //fetching videoData
        const fetchVideoData=async ()=>{
            const videoData_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
            await fetch(videoData_url).then(res=>res.json()).then(data=>setApiData(data.items[0]))
        }
    
        //fetching channelData
        const fetchChannelData=async ()=>{
            const channelData_url=`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`
            await fetch(channelData_url).then(res=>res.json()).then(data=>setApiChannelData(data.items[0]))
        }
        //fetching commentsdata
        const fetchCommentsData=async()=>{
            const commentsData_url=`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=30&videoId=${videoId}&key=${API_KEY}`
            await fetch(commentsData_url).then(res=>res.json()).then(data=>setApiComments(data.items))
        }

        useEffect(()=>{
            fetchVideoData();
        },[videoId])

        useEffect(()=>{
            fetchChannelData();
        },[apiData])
        
        useEffect(()=>{
            fetchCommentsData();
        },[apiData])

  return (
    <div className='play-video-div'>
        {/*<video src={animal} autoPlay muted controls></video>*/}
        <iframe  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h2>{apiData?apiData.snippet.title:"Title"}</h2>
        <div className="video-channel-controls">
            <div className="video-channel">
                <img src={apiChannelData?apiChannelData.snippet.thumbnails.medium.url:""} alt="" />
                <div className="channel-info">
                    <p>{apiData?apiData.snippet.channelTitle:"Channel_Name"}</p>
                    <span>{apiChannelData?Value_coneverter(apiChannelData.statistics.subscriberCount):""} Subscribers</span>
                </div>
            </div>
            <div className="video-channel-subscribe">
                <button>Subscribe</button>
            </div>
            <div className="video-controls">
                <div className="control-like">
                    <img src={like} alt="" />
                    <span>{apiData?Value_coneverter(apiData.statistics.likeCount):"00"}</span>
                    <img src={dislike} alt="" />
                </div>
                <div className="control-share">
                    <img src={share} alt="" />
                    <p>Share</p>
                </div>
                <div className="control_save">
                    <img src={save} alt="" />
                    <p>Save</p>
                </div>
            </div>
        </div>
        <div className="video-description">
            <p>{apiData?Value_coneverter(apiData.statistics.viewCount):"views"} views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():"days"}</p>
            <p>{apiData?apiData.snippet.description.slice(0,300):"description"}</p>
        </div>
        <div className="comments-section">
            <h3><span>{apiData?Value_coneverter(apiData.statistics.commentCount):"11"}</span> Comments</h3>
            <div className="input-comment">
                <img src={telusko} alt="" />
                <input type="text" placeholder="Add a comment..." />
            </div>
            <div className="comments">
                {apiComments.map((item,index)=>{
                    return(
                        <div key={index} className="comment">
                            <img className='comment-img' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div className="sub-comment">
                                    <p className='username'>{item.snippet.topLevelComment.snippet.authorDisplayName} <span className='comment-time'>&bull; {moment(item.snippet.topLevelComment.snippet.publishedAt).fromNow()}</span></p>
                                    <p>{item.snippet.topLevelComment.snippet.textDisplay}</p>
                                <img src={like} alt="" />
                                <span className='like-count'>{Value_coneverter(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                <img src={dislike} alt="" />
                            </div>
                         </div>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default playvideo