import React, { useEffect, useState } from 'react'
import { loadVideos } from '../../actions/videos';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

const ListVideos = () => {
  const videos = useSelector(state => state.videos);
  const history = useHistory();
  const requesting = useSelector(state => state.requesting);
  const dispatch = useDispatch();
  const loggedIn = useSelector(state => state.sessions.loggedIn);


  useEffect(() => {
    // clearErrors();
    if(loggedIn) {
      dispatch(loadVideos(localStorage.getItem('jwt')))
    } else {
      history.push("/login")
    }
  }, [loggedIn])


  const videoLis = videos.map((video) => <li key={video.id}><NavLink to={`/videos/${ video.id }`}>{ video.title}</NavLink></li>)

  if(requesting) {
    return <h1>Loading...</h1>
  }

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
