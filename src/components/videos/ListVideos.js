import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ListVideos = () => {
  const videos = useSelector(state => state.videos);

  // useEffect(() => {
  //   clearErrors();
  //   fetch('http://localhost:3001/api/v1/videos', {
  //     headers: {
  //       "Accept": "application/json",
  //       "Content-Type": "application/json",
  //       "Authorization": `bearer ${ localStorage.getItem('jwt') }`
  //     }
  //   })
  //     .then(resp => resp.json())
  //     .then(data => setVideos(data))
  // }, [])
  const videoLis = videos.map((video) => <li key={video.id}><NavLink to={`/videos/${ video.id }`}>{ video.title}</NavLink></li>)

  return (

    <div>
      <h1>Video List</h1>
      <ul>
        { videoLis }
      </ul>    
    </div>
  )
}

export default ListVideos
