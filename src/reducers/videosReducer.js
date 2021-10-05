const initialState = [{
    id: 1,
    category: "Movie",
    title: "Braveheart",
    length: 3.0,
    genre: "Action",
    rating: 5
  },
  { id: 2, 
    category: "Show", 
    title: "Ted Lasso", 
    length: 1.0, 
    genre: "Comedy", 
    rating: 5 
  },
];

const videosReducer = (state=initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default videosReducer;