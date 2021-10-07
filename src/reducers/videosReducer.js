const initialState = [];

const videosReducer = (state=initialState, action) => {
  switch(action.type) {
    case "ADD_VIDEO":
      return [...state, action.payload]
    case "SET_VIDEOS":
      return action.payload
    default:
      return state;
  }
}

export default videosReducer;