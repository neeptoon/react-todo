const selectAllPosition = (state) => state.positions;

const selectVisiblePositions = (state, filters = []) => {
	if (filters.length === 0) {
		return state.positions
	}

	return state.positions.filter(item => {
		const posFilters = [].concat(item.role, item.level, ...item.languages, ...item.tools);
		return filters.every(filter => posFilters.includes(filter))
	})



}

export {selectAllPosition, selectVisiblePositions};