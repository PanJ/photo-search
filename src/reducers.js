import home from "./features/home/redux";
import photo from "./features/photo/redux";
import { combineReducers } from "redux";

export default combineReducers({ home, photo });
