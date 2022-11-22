import React, { useState } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../../redux/todos/todoActions';
import DeleteTodoConfirmationDialog from './DeleteTodoConfirmationDialog';

const UseDeleteTodoConfirmationDialog = (props) => {
    const { handleShowModal, showModal, rowData } = props;
    const [showConfirmationModal, setShowConfirmationModal] = useState(true);

    const handleShowConfirmationModal = (isOpen) => {
        setShowConfirmationModal(isOpen)
    }

    const handleSubmit = () => {
        const payload = props.rowData;
        props.deleteTodo(payload)
    }

    return (
        <DeleteTodoConfirmationDialog 
            handleShowModal={handleShowModal} 
            showModal={showModal} 
            handleSubmit={handleSubmit} 
        />
    )
}

const mapDispatchToProps = dispatch => {
    return {
      deleteTodo: payload => dispatch(actionCreators.deleteTodo(payload))
    }
  }

export default connect(mapDispatchToProps)(UseDeleteTodoConfirmationDialog)