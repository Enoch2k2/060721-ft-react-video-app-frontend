import React, { useEffect, useState } from 'react'

const ListVideos = ({ clearErrors }) => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    clearErrors();
    fetch('http://localhost:3001/videos')
      .then(resp => resp.json())
      .then(data => setVideos(data))
  }, [])

  const videoLis = videos.map((video) => <li key={video.id}>{ video.title} </li>)

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
