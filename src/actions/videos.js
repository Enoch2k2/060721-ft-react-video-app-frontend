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