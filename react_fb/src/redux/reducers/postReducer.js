import { actionTypes } from "redux-firestore";
import * as types from "../actions/postType";

const initialState = {
  isLoading: true,
  Post: [],
};
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_POSTS:
      state = { ...state, Post:action.payload};
      return state;
    default:
        return state;
  }
};
export default postReducer;