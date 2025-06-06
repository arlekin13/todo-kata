import React, { useState } from 'react'
import PropTypes from 'prop-types'

import './App.css'
import Footer from '../Footer'
import TaskList from '../TaskList'
import NewTaskForm from '../NewTaskForm'

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Completed task ', completed: false, createdAt: new Date(), editing: false },
    { id: 2, description: 'Editing task', completed: true, createdAt: new Date(), editing: true },
    { id: 3, description: 'Active task', completed: false, createdAt: new Date(), editing: false },
  ])

  const [filter, setFilter] = useState('all')
  const [editId, setEditId] = useState(null)

  const activeCount = tasks.filter((task) => !task.completed).length

  const toggleCompleted = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed }
        }
        return task
      })
    )
  }
  const addTask = (description) => {
    const newTask = {
      id: Date.now(),
      description: description,
      completed: false,
      createdAt: new Date(),
      editing: false,
    }
    setTasks([newTask, ...tasks])
  }
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const setFilterType = (filterType) => {
    setFilter(filterType)
  }
  const getFilteredTasks = () => {
    switch (filter) {
    case 'active':
      return tasks.filter((task) => !task.completed)
    case 'completed':
      return tasks.filter((task) => task.completed)
    default:
      return tasks
    }
  }

  const filteredTasks = getFilteredTasks()

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed))
  }

  const startEdit = (id) => {
    setEditId(id)
  }
  const updateTask = (id, newDescription) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, description: newDescription, editing: false }
        }
        return task
      })
    )
    setEditId(null)
  }

  return (
    <section className="todoapp">
      <NewTaskForm onAddTask={addTask} />
      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onToggleCompleted={toggleCompleted}
          onDeleteTask={deleteTask}
          onStartEdit={startEdit}
          editId={editId}
          onUpdateTask={updateTask}
        />

        <Footer
          filter={filter}
          onSetFilter={setFilterType}
          onClearCompleted={clearCompleted}
          activeCount={activeCount}
        />
      </section>
    </section>
  )
}
App.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
}
export default App
