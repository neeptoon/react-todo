import {ADD_FILTER, REMOVE_FILTER, CLEAR_FILTER} from "./filter-action";

export const filterReducer = (store = [], action) => {
	switch (action.type) {
		case ADD_FILTER: {
			return [...store, action.filter]
		}
		case REMOVE_FILTER: {
			return store.filter(item => item !== action.filter);
		}
		case CLEAR_FILTER: {
			return [];
		}
		default:
			return store;
	}
}