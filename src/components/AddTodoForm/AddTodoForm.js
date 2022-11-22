import React from 'react'
import AddTodoFormDialog from './AddTodoFormDialog';
import { Button } from '@mui/material';

const AddTodoForm = (props) => {
  const { handleShowModal, showModal, handleInputChange, handleDateInputChange, handleSubmit, todo } = props;

  return (
    <>
      <Button variant="contained" onClick={() => {handleShowModal(true)}} sx={{ mb: 4}}>Add New Todo</Button>
      <AddTodoFormDialog handleShowModal={handleShowModal} showModal={showModal} handleInputChange={handleInputChange} handleDateInputChange={handleDateInputChange} handleSubmit={handleSubmit} todo={todo} />
    </>
  )
}

export default AddTodoForm