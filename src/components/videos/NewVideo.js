import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addVideo } from '../../actions/videos';

const NewVideo = () => {
  const [state, setState] = useState({
    title: "",
    category: "",
    rating: 0,
    length: 0.0,
    genre: ""
  })

  const currentUser = useSelector(state => state.sessions.currentUser)
  const [content, setContent] = useState('');
  const [errors, setErrors] = useState([])

  const history = useHistory();
  const dispatch = useDispatch();
  const handleChange = e => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log('state', state);
    console.log('content', content);
    console.log('user', currentUser);

    dispatch(addVideo(state, content, currentUser));

    // fetch('http://localhost:3001/api/v1/videos', {
    //   method: "POST",
    //   headers: {
    //     "Accept": "application/json",
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({
    //     ...state,
    //     reviews_attributes: [
    //       {
    //         content,
    //         user_id: currentUser.id
    //       }
    //     ]
    //   })
    // })
    // .then(resp => {
    //   if(resp.status !== 404) {
    //     return resp.json()
    //   } else {
    //     throw new Error(resp.statusText)
    //   }
    // })
    // .then(data => {
    //   if(data.errors) {
    //     handleErrors(data.errors)
    //   } else {
        history.push('/videos');
    //   }
    // })
    // .catch(errors => console.log(errors))
  }

  return (
    <div>
      <h1>Create Video</h1>
      <form onSubmit={ handleSubmit }>
        <div>
          <label htmlFor="title">Title: </label>
          <input type="text" id="title" name="title" value={ state.title } onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="category">Category: </label>
          <input type="text" id="category" name="category" value={ state.category } onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="rating">Rating: </label>
          <input type="number" id="rating" name="rating" value={ state.rating } onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="length">Movie Length: </label>
          <input type="text" id="length" name="length" value={ state.length } onChange={ handleChange } />
        </div>
        <div>
          <label htmlFor="genre">Genre: </label>
          <input type="text" id="genre" name="genre" value={ state.genre } onChange={ handleChange } />
        </div>

        <h3>Create Review On This Movie</h3>
        <div>
          <label htmlFor="content">Review Content: </label><br/>
          <textarea id="content" value={ content } onChange={ (e) => setContent(e.target.value) } />
        </div>

        <input type="submit" value={ "Create Video" } />
      </form>
    </div>
  )
}

export default NewVideo
