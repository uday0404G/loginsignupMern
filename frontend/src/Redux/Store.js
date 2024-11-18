import { applyMiddleware, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import reducer from "./LoginSignup/Reducer";

const store=legacy_createStore(reducer,applyMiddleware(thunk))
export default store