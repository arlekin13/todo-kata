import React from 'react';
import { formatDistanceToNow } from 'date-fns';

function Task({ task }) {
  const { description, completed, createdAt } = task;

  return (
    <li className={completed ? 'completed' : ''}>
      <div className="view">
        <input className="toggle" type="checkbox" checked={completed} />
        <label>{description}</label>
        <span className="created">created {formatDistanceToNow(createdAt, { addSuffix: true })}</span>
        <button className="destroy"></button>
      </div>
    </li>
  );
}

export default Task;