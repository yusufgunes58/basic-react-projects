import React from 'react'
import '../css/Todo.css'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'

export const Todo = ({ 
  task,
  deleteTodo,
  startEditTodo
 }) => {

  return (
    <div className='task'>

      <div className='todoText'>
        {task.task}
      </div>

      <div className='actions'>

        <EditIcon className='icon editIcon' 
         onClick={() => startEditTodo(task.id)} 
         />

        <DeleteIcon className='icon deleteIcon'
          onClick={() => deleteTodo(task.id)}
        />

      </div>

    </div>
  )
}
