import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/todos/todoActions';
import AddTodoForm from './AddTodoForm';
import { v4 as uuid } from 'uuid';

const UseAddTodoForm = (props) => {
  const { addTodo } = props;
  const newId = uuid();
  const [showModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState({
    id: '',
    todo_id: '',
    title: '',
    description: '',
    created_date: new Date().toISOString().slice(0, 10),
    deadline: '',
    status: 'Pending'
  })
  
  const handleShowModal = (isOpen) => {
    setShowModal(isOpen)
  }

  const handleInputChange = (evt) => {
    const {id, value} = evt.target;
    
    setTodo(prevState => ({
      ...prevState,
      todo_id: newId,
      [id]: value
    }))
  }

  const handleDateInputChange = (new_date) => {
    setTodo(prevState => ({
      ...prevState,
      deadline: new_date.toISOString().slice(0,10)
    }))
  }

  const handleSubmit = () => {
    const payload = {...todo};
    addTodo(payload);
  }
  
  console.log("%c Line:12 🍰 todo", "color:#6ec1c2", todo);
  return (
    <AddTodoForm 
    handleShowModal={handleShowModal} 
      showModal={showModal} 
      handleInputChange={handleInputChange} 
      handleDateInputChange={handleDateInputChange} 
      handleSubmit={handleSubmit}
      todo={todo} 
    />
    )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTodo: payload => dispatch(actionCreators.addTodo(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseAddTodoForm)