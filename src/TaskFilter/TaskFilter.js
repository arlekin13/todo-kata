import React from 'react';
import './TaskFilter.css'

function TaskFilter(filter, onSetFilter) {
  return (
    <ul className="filters">
      <li>
        <button className={filter==='all'? 'selected': ''}
        onClick={()=>onSetFilter('all')}
        >
          All
        </button>
        <button  className={filter==='active'? 'selected': ''}
        onClick={()=>onSetFilter('active')}>
          Active
        </button>
        <button  className={filter==='completed'? 'selected': ''}
        onClick={()=>onSetFilter('completed')}>
          Completed
        </button>
       
      </li>
      
    </ul>
  );
}

export default TaskFilter;