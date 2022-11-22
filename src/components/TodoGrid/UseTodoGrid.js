import React, { useState } from 'react';
import { connect } from 'react-redux';
import TodoGrid from './TodoGrid';

const UseTodoGrid = (props) => {
  const [showModal, setShowModal] = useState(false);
  
  const [buttonType, setButtonType ] = useState('');
  const [rowData, setRowData] = useState('');
  
  
  const handleShowModal = (isOpen, buttonType) => {
    setShowModal(isOpen);
    setButtonType(buttonType);
  }
  
  const handleGetRowData = (evt, params) => {
    setRowData(params.row.todo_id)
  }
  console.log("%c Line:11 🍢 buttonType", "color:#4fff4B", buttonType);
  console.log("%c Line:10 🍯 rowData", "color:#6ec1c2", rowData);
  return (
    <TodoGrid handleShowModal={handleShowModal} showModal={showModal} todos={props.todos} buttonType={buttonType} handleGetRowData={handleGetRowData} rowData={rowData} />
  )
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

export default connect(mapStateToProps)(UseTodoGrid)