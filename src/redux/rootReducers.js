import { combineReducers } from "redux";
import AuthReducer from "./auth/reducers";
import DirectoryReducer from './directory/reducers'

const rootReducers = combineReducers({
  auth: AuthReducer,
  directory:DirectoryReducer
});

export default rootReducers;
