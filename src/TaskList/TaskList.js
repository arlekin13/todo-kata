import React from 'react'
import PropTypes from 'prop-types'

import Task from '../Task/Task'
import './TaskList.css'

function TaskList({ tasks, onToggleCompleted, onDeleteTask, editId, onStartEdit, onUpdateTask }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleCompleted={() => onToggleCompleted(task.id)}
          onDeleteTask={() => onDeleteTask(task.id)}
          onStartEdit={() => onStartEdit(task.id)}
          editId={editId}
          onUpdateTask={onUpdateTask}
        />
      ))}
    </ul>
  )
}

TaskList.propTypes = {
  task: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
    })
  ).isRequired,
  onToggleCompleted: PropTypes.func.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  editId: PropTypes.number,
  onStartEdit: PropTypes.func.isRequired,
  onUpdateTask: PropTypes.func.isRequired,
}

TaskList.defaultProps = {
  editId: null,
}

export default TaskList
