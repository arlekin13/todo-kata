import React from 'react'
import PropTypes from 'prop-types'

import TaskFilter from '../TaskFilter/TaskFilter'
import './Footer.css'


function Footer({ filter, onSetFilter, onClearCompleted, activeCount }) {
  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} items left</span>
      <TaskFilter filter={filter} onSetFilter={onSetFilter} />

      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  )
}
Footer.propType = {
  filter: PropTypes.oneOf(['all', 'active', 'completed']).isRequired,
  onSetFilter: PropTypes.func.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  activeCount: PropTypes.number.isRequired,
}

export default Footer
