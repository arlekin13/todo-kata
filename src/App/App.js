import React, {useState} from 'react';

import './App.css'

import Footer from '../Footer'; 
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';
import { isThisQuarter } from 'date-fns';




function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: 'Completed task ', completed: false, createdAt: new Date(), editing: false },
    { id: 2, description: 'Editing task', completed: true, createdAt: new Date(), editing: true },
    { id: 3, description: 'Active task', completed: false, createdAt: new Date(), editing: false },
  ]);

  const toggleCompleted =(id)=>{
    setTasks(
      tasks.map(task=>{
        if(task.id===id){
          return {...task, completed: !task.completed}
        }
        return task
      })
    )
  }
  const addTask =(description)=>{
    const newTask={
      id:Date.now(),
      description: description,
      completed: false,
      createdAt: new Date(),
      editing: false,
    };
    setTasks([newTask, ...tasks])
  }
  const deleteTask =(id) =>{
    setTasks(tasks.filter(task=>task.id!==id))
  }

    return(
      <section className='todoapp'>
        <NewTaskForm onAddTask = {addTask}/>
      <section className="main">
        <TaskList 
        tasks={tasks}
        onToggleCompleted={toggleCompleted}
        onDeleteTask={deleteTask}  />
        <Footer />
      </section>
      </section>
    )
}

export default App