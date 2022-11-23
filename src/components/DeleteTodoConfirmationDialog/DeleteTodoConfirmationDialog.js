import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';

const DeleteTodoConfirmationDialog = (props) => {
    const { handleShowModal, showModal, rowId, handleDeleteTodo } = props;
    return (
        <Dialog open={showModal} onClose={() => handleShowModal(false, '')} >
            <DialogTitle>DELETE CONFIRMATION</DialogTitle>
            <DialogContent >
                <DialogContentText>
                    Are you sure you want to delete this todo?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button variant="contained" color="warning" onClick={() => handleShowModal(false, '')}>CANCEL</Button>
            <Button variant="contained" id="delete" color="error" onClick={(evt) => handleDeleteTodo(rowId)}>DELETE</Button>
            </DialogActions>
        </Dialog>
    )
}

export default DeleteTodoConfirmationDialog