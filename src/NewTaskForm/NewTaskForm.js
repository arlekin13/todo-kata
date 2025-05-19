import { useState } from "react";

function NewTaskForm({onAddTask}) {

  const [newTaskText, setNewTaskText]= useState('')
  const handleInputChange =(e)=>{
    setNewTaskText(e.target.value)
    }
    const handleKeyDown=(e)=>{
      if(e.key === 'Enter' && newTaskText.trim() !==''){
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
    );
  }
  
  export default NewTaskForm;