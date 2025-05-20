import React from 'react';
import Task from '../Task/Task';
import './TaskList.css'

function TaskList({tasks, onToggleCompleted ,onDeleteTask,editId,onStartEdit,onUpdateTask}) {
  
  
  return (
  <ul className="todo-list">
    {tasks.map(task=>(
      <Task
      key={task.id}
      task={task}
      onToggleCompleted={()=> onToggleCompleted(task.id)}
      onDeleteTask={()=> onDeleteTask(task.id)}
      onStartEdit={()=>onStartEdit(task.id)}
      editId={editId}
      onUpdateTask={onUpdateTask}
      />
    ))}
    
  </ul>
  );
}

export default TaskList;