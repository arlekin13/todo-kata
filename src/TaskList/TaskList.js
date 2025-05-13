import React from 'react';
import Task from '../Task/Task';
import './TaskList.css'

function TaskList({tasks, onToggleCompleted ,onDeleteTask}) {
  
  
  return (
  <ul className="todo-list">
    {tasks.map(task=>(
      <Task
      key={task.id}
      task={task}
      onToggleCompleted={()=> onToggleCompleted(task.id)}
      onDeleteTask={()=> onDeleteTask(task.id)}
      />
    ))}
    
  </ul>
  );
}

export default TaskList;