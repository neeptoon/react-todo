import {combineReducers} from "redux";
import {positionReducer} from "./positions/position-reducer";
import {filterReducer} from "./filters/filter-reducer";

const rootReducer = combineReducers({
	positions: positionReducer,
	filters: filterReducer
});

export {rootReducer};