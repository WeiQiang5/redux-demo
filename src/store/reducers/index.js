// 合并reducer
// import { combineReducers } from "redux";
import voteReducer from "./voteReducer";
import personalReducer from "./personalReducer";
import combineReducers from "../myredux-combineredux";
const reducer = combineReducers({
  vote: voteReducer,
  personal: personalReducer,
});

export default reducer;
