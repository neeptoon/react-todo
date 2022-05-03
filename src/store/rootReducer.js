import {combineReducers} from "redux";
import {positionReducer} from "./positions/position-reducer";

const rootReducer = combineReducers({
	position: positionReducer,
});

export {rootReducer};