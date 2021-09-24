import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

const ListVideos = ({ clearErrors }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    clearErrors();
    fetch('http://localhost:3001/api/v1/videos')
      .then(resp => resp.json())
      .then(data => setVideos(data))
  }, [])

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
