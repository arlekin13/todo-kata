import React from 'react';
import { formatDistanceToNow } from 'date-fns';

import './Task.css'

function Task({ task }) {
  const { description, completed, createdAt} = task;

  return (

    <ul className='todo-list'>
      <li className={task.completed ? 'completed' : ''}>
    <div className="view">
      <input 
      className="toggle" 
      type="checkbox" 
      checked={completed} />

      <label>
        <span className='description'> 
        {description}
          </span>
          <span className="created">
        created {formatDistanceToNow(createdAt, { addSuffix: true })}
          </span>
         </label>
      
      <button className="icon icon-edit"></button>
      <button className="icon icon-destroy"></button>
    </div>
  </li>
  </ul>
    
  );
}

export default Task;