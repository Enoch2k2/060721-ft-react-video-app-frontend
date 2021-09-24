import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ListReviews from '../reviews/ListReviews';
import NewReview from '../reviews/NewReview';

// localhost:3000/videos/:id

const Video = () => {
  const { id } = useParams();
  const [video, setVideo] = useState({});
  const [reviews, setReviews] = useState([]);
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const loadVideo = async () => {
    const resp = await fetch(`http://localhost:3001/api/v1/videos/${ id }`)
    const data = await resp.json();
    setVideo(data);
    setReviews(data.reviews);
    console.log('video', data)
  }

  const loadUser = async () => {
    const resp = await fetch('http://localhost:3001/api/v1/users/1');
    const data = await resp.json();
    setUser(data);
    console.log('user', data)
  }

  const load = async () => {
    await loadVideo();
    await loadUser();
    setLoading(false);
  }

  const addReview = (review) => {
    setReviews([...reviews, review])
  }

  useEffect(() => {
    load();
  }, [id])

  if(loading) { return <h1>Loading...</h1>}

  return (
    <div>
      <h1>{ video.title }</h1>
      <p>Category : { video.category }</p>
      <p>Genre : { video.genre }</p>
      <p>Length : { video.length } hours</p>
      <ListReviews reviews={reviews} />
      <NewReview video={ video } user={ user } addReview={ addReview } />
    </div>
  )
}

export default Video
