import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import requestingReducer from "./requestingReducer";
import sessionsReducer from "./sessionsReducer";
import videosReducer from "./videosReducer";

export default combineReducers({
  errors: errorsReducer,
  requesting: requestingReducer,
  sessions: sessionsReducer,
  videos: videosReducer
})
