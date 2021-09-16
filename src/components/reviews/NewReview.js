import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const NewReview = ({ video, user, addReview }) => {
  const [ content, setContent ] = useState('');
  const history = useHistory();

  const handleSubmit = async e => {
    e.preventDefault();

    const resp = await fetch(`http://localhost:3001/videos/${ video.id }/reviews`, {
      method: "POST",
      headers: {
        'Accept': "application/json",
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        content,
        user_id: user.id
      })
    })

    const data = await resp.json();

    setContent('')
    addReview(data);

    history.push(`/videos/${ video.id }`)
  }

  return (
    <div>
      <h3>Review for { video.title }</h3>

      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor='content'>Content: </label>
          <input type="text" value={ content } onChange={ (e) => setContent(e.target.value)} />
        </div>

        <input type="submit" value="Add Review" />
      </form>
    </div>
  )
}

export default NewReview
