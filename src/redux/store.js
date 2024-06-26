import rootreducers from "./main.js"
import {createStore,applyMiddleware} from 'redux';
import {thunk} from "redux-thunk";
import logger from "redux-logger";
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(rootreducers,composeWithDevTools(applyMiddleware(logger,thunk)))

export default store;


