import React from 'react'
import './TaskFilter.css'
import PropTypes from 'prop-types'

function TaskFilter({ filter, onSetFilter }) {
  return (
    <ul className="filters">
      <li>
        <button className={filter === 'all' ? 'selected' : ''} onClick={() => onSetFilter('all')}>
          All
        </button>
        <button className={filter === 'active' ? 'selected' : ''} onClick={() => onSetFilter('active')}>
          Active
        </button>
        <button className={filter === 'completed' ? 'selected' : ''} onClick={() => onSetFilter('completed')}>
          Completed
        </button>
      </li>
    </ul>
  )
}
TaskFilter.propType = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  onSetFilter: PropTypes.func.isRequired,
}

export default TaskFilter
