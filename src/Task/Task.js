import React from 'react';
import { formatDistanceToNow } from 'date-fns';
import './Task.css'

function Task({ task, onToggleCompleted,onDeleteTask }) {
  const { description, completed, createdAt ,editing} = task;
  return (
    <>
   
 <li className={`${completed ? 'completed' : ''} ${editing ? 'editing': ''}`}>
      <div className="view">
        <input
          className="toggle"

          type="checkbox"
          checked={completed}
          readOnly
          onChange={onToggleCompleted} 
        
        />
        <label>
          <span className="description">{description}</span>
          <span className="created">
            created {formatDistanceToNow(createdAt, { addSuffix: true })}
          </span>
        </label>

           
          <button className="icon icon-edit"></button>
          <button className="icon icon-destroy"
            onClick={onDeleteTask}>
              
            </button>
        </div>
        {editing && <input type='text' className='edit' value={description}/>}
      </li>
    </>
  );
}

export default Task;