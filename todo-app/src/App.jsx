import React from 'react'
import { TodoWrapper } from './components/TodoWrapper'
import './App.css'
import { Todo } from './components/Todo'

const App = () => {
  return (
    <div className='app'>

      <div>
        <h1> To-do App</h1>
      </div>

      <div className='container'>
        <TodoWrapper />
      </div>

    </div>
  )
}

export default App