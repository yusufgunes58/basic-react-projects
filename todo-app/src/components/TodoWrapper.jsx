import React, { useState } from 'react'
import { TodoForm } from './TodoForm'
import { v4 as uuidv4 } from 'uuid'
import { Todo } from './Todo'
import '../css/TodoWrapper.css'

export const TodoWrapper = () => {

  const [todos, setTodos] = useState([])
  const [activeTodoId, setActiveTodoId] = useState(null)
  const [todoText, setTodoText] = useState('')


  const startEditTodo = (id) => {
    const todo = todos.find(t => t.id === id)

    setActiveTodoId(id)
    setTodoText(todo.task)
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // edit todo
    if (activeTodoId) {
      setTodos(
        todos.map(todo =>
          todo.id === activeTodoId
            ? { ...todo, task: todoText }
            : todo
        )
      )
      setActiveTodoId(null)
    }

    // add todo
    else {
      setTodos([
        ...todos,
        {
          id: uuidv4(),
          task: todoText,
          completed: false
        }
      ])
    }
    setTodoText('')
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  // cancel edit mode if user clicks outside of the form
  const cancelEdit = () => {
    setActiveTodoId(null)
    setTodoText('')
  }


  return (
    <>

      <div className='top'>
        <TodoForm
          todoText={todoText}
          setTodoText={setTodoText}
          handleSubmit={handleSubmit}
          activeTodoId={activeTodoId}
          cancelEdit={cancelEdit}
        />
      </div>

      <div className='todos'>
        {todos.map((todo) => (
          <Todo
            task={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            startEditTodo={startEditTodo}

          />
        ))}
      </div>

    </>
  )
}
