import React from 'react';

import './App.css'

import Footer from '../Footer'; 
import TaskList from '../TaskList';
import NewTaskForm from '../NewTaskForm';


function App(){
    return(
        <section className='todoapp'>

        <NewTaskForm />
     
      <section className="main">
        <TaskList />
    
      <Footer />
      </section>
      </section>
    )
}

export default App