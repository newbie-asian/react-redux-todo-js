import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/todos/todoActions';
import AddTodoForm from './AddTodoForm';
import { v4 as uuid } from 'uuid';

const UseAddTodoForm = (props) => {
  const { addTodo } = props;
  const default_todo_value = {
    id: '',
    todo_id: uuid(),
    title: '',
    description: '',
    created_date: new Date(),
    deadline: '',
    status: 'Pending'
  }

  const [showModal, setShowModal] = useState(false);
  const [todo, setTodo] = useState({...default_todo_value})
  
  const dateFormatter = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const amPm = hours > 12 ? 'PM' : 'AM';

    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, '0');
    
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${hours}:${minutes} ${amPm}`;
  }
  
  const handleShowModal = (isOpen) => {
    setShowModal(isOpen)
  }

  const handleInputChange = (evt) => {
    const {id, value} = evt.target;
    
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
    const formatted_created_date = dateFormatter(todo.created_date);
    const formatted_deadline = dateFormatter(todo.deadline);

    const payload = {...todo, created_date: formatted_created_date, deadline: formatted_deadline}
    addTodo(payload);
    setTodo({...default_todo_value})
  }
  return (
    <AddTodoForm 
      handleShowModal={handleShowModal} 
      handleInputChange={handleInputChange} 
      handleDateInputChange={handleDateInputChange} 
      handleSubmit={handleSubmit}
      showModal={showModal} 
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