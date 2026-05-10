import React, { useState } from 'react'
import { Todo } from './Todo'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export const TodoForm = ({
  todoText,
  setTodoText,
  handleSubmit,
  activeTodoId,
  cancelEdit
}) => {

  const [input, setInput] = useState('')


  return (


    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: 1
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        label="Add a new task"
        variant="outlined"
        value={todoText}
        size="small"
        onChange={(e) => setTodoText(e.target.value)}
      />

      <Button type='submit' variant="contained">
        {activeTodoId ? 'Change Task' : 'Add Task'}
      </Button>


      {
        activeTodoId && (
          <Button variant="outlined" type="button" size="small"
            onClick={cancelEdit}>Cancel
          </Button>)
      }


    </Box>

  )
}
