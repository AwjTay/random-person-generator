import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import initial from "./initial";
import reducer from "./reducers";

const reduxDevTools =
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__) || compose;


const createStoreWithMiddleware = applyMiddleware(
    thunk,
)(createStore);

const store = createStoreWithMiddleware(reducer, initial, reduxDevTools());

export default store;