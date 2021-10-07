export const addVideo = (details, content, currentUser) => {
  const payload =  {
    ...details,
    reviews: [
      {
        content,
        user_id: currentUser.id
      }
    ]
  }

  return {
    type: "ADD_VIDEO",
    payload
  }
}

export const loadVideos = (token) => {
  return async dispatch => {
    dispatch({ type: "REQUESTING" });
    const resp = await fetch('http://localhost:3001/api/v1/videos', {
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `bearer ${ token }`
      }
    })

    const data = await resp.json();
    dispatch({ type: "SET_VIDEOS", payload: data})
    dispatch({ type: "DONE_REQUESTING" })
  }
}