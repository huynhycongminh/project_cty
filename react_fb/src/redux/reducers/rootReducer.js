import { combineReducers } from "redux";
import userReducer from "./reducer";
import postReducer from "./postReducer";
const rootReducer = combineReducers({
    user:userReducer,
    Post: postReducer,
})
export default rootReducer