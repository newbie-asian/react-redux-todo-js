import React, { useState, useEffect } from 'react';
import EditTodoForm from './EditTodoForm';
import actionCreators from '../../redux/todos/todoActions';
import { connect } from 'react-redux';

const UseEditTodoForm = (props) => {
  const { handleShowModal, showModal, rowData } = props;
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [todo, setTodo] = useState({});

  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   };
  // }, [input]);
  const handleShowConfirmationModal = (isOpen) => {
    setShowConfirmationModal(isOpen)
  }

  const handleInputChange = (evt) => {
    const { id, value } = evt.target;

    setTodo(prevState => ({
      ...prevState,
      [id]: value
    }))
  }

  const handleDateInputChange = (new_date) => {
    setTodo(prevState => ({
      ...prevState,
      deadline: new_date
    }))
  }

  const handleSubmit = () => {
    alert('Clicked handle submit');
  }

  return (
    <EditTodoForm 
      handleShowModal={handleShowModal} 
      showModal={showModal} 
      handleShowConfirmationModal={handleShowConfirmationModal}
      showConfirmationModal={showConfirmationModal}
      handleInputChange={handleInputChange} 
      handleDateInputChange={handleDateInputChange} 
      handleSubmit={handleSubmit} 
    />
  )
}

export default UseEditTodoForm