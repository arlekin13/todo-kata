import React from 'react';
import TaskFilter from '../TaskFilter/TaskFilter';
import './Footer.css'

function Footer({filter,onSetFilter,onClearCompleted,activeCount}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        {activeCount} items left</span>
      <TaskFilter 
      filter={filter}
      onSetFilter={onSetFilter}/>

      <button className="clear-completed"
      onClick={onClearCompleted}
      >Clear completed
      </button> 

    </footer>
  );
}

export default Footer;

