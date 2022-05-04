import { JobPosition } from './JobPosition';
import {useSelector, useDispatch} from "react-redux";
import {selectVisiblePositions} from "../store/positions/position-selector";
import {addFilter} from "../store/filters/filter-action";
import {selectFilters} from "../store/filters/filter-selector";


const JobList = () => {

  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));

  const dispatch = useDispatch();

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
            key={item.id}
            {...item}
            handleAddFilter={handleAddFilter}
        />
      ))}
    </div>
  )
}

export {JobList};