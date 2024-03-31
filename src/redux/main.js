import { todoreducers } from "../redux/list/reducer.js";
import { combineReducers } from "redux";

const rootreducers=combineReducers({
    todoreducers
});

export default rootreducers;