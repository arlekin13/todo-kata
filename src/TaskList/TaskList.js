import React from 'react';
import Task from '../Task/Task';
import './TaskList.css'

function TaskList() {
  
  const tasks = [
    { id: 1, description: 'Завершить задание', completed: false, createdAt: new Date() },
    { id: 2, description: 'Проверить код', completed: true, createdAt: new Date() },
    { id: 3, description: 'Отправить решение', completed: false, createdAt: new Date() },
  ];

  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
}

export default TaskList;