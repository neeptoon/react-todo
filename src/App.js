import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {FilterPanel} from './components/FilterPanel';
import {JobList} from './components/JobList';
import {TheHeader} from './components/TheHeader';
import data from './mock/data.json';
import {addPositions} from "./store/positions/position-actions";

function App() {

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(addPositions(data));
    })


	return (
		<>
			<TheHeader/>
			<div className="container">
				<FilterPanel/>
				<JobList/>
			</div>
		</>
	);
}

export default App;
