import { useState } from 'react'
import PropTypes from 'prop-types'

function NewTaskForm({ onAddTask }) {
  const [newTaskText, setNewTaskText] = useState('')
  const handleInputChange = (e) => {
    setNewTaskText(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && newTaskText.trim() !== '') {
      onAddTask(newTaskText.trim())
      setNewTaskText('')
    }
  }

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        autoFocus
        value={newTaskText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </header>
  )
}
NewTaskForm.propTypes = { onAddTask: PropTypes.func.isRequired }

export default NewTaskForm
