import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/todos/todoActions';
import TodoGrid from './TodoGrid';

const UseTodoGrid = (props) => {
  const { todos, completeTodo, deleteTodo } = props;

  const [showModal, setShowModal] = useState(false);
  const [buttonType, setButtonType ] = useState('');
  const [rowId, setRowId] = useState('');
  
  
  const handleShowModal = (isOpen, buttonType) => {
    setShowModal(isOpen);
    setButtonType(buttonType);
  }

  const handleDeleteTodo = (rowId) => {
    deleteTodo(rowId);
    setShowModal(false);
  }

  const handleCompleteTodo = (rowData) => {
    const { row = {} } = rowData;
    completeTodo(row.todo_id);
  }

  const handleGetRowId = (params) => {
    const { todo_id = "" } = params.row;
    setRowId(todo_id);
  }

  return (
    <TodoGrid 
      handleShowModal={handleShowModal}
      handleDeleteTodo={handleDeleteTodo}
      handleCompleteTodo={handleCompleteTodo}
      handleGetRowId={handleGetRowId} 
      showModal={showModal} 
      rowId={rowId} 
      todos={todos} 
      buttonType={buttonType} 
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
    completeTodo: payload => dispatch(actionCreators.completeTodo(payload)),
    deleteTodo: payload => dispatch(actionCreators.deleteTodo(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UseTodoGrid)