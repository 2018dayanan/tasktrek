import React from 'react'
import "./App.css";
import TaskForm from './components/TaskForm';
import TaskColumn from './components/TaskColumn';
const App = () => {
  return (
    <div className='app'>
      <TaskForm></TaskForm>
      <main className="app_main">
        <TaskColumn></TaskColumn>
        <TaskColumn></TaskColumn>
        <TaskColumn></TaskColumn>
       
      </main>
    </div>
  )
}

export default App;