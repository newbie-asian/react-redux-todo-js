import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';

const EditTodoConfirmationDialog = (props) => {
    const { handleShowModal, showModal, handleSubmit } = props;
    return (
        <Dialog open={showModal} onClose={() => handleShowModal(false, '')}>
            <DialogTitle>CONFIRMATION MESSAGE</DialogTitle>
            <DialogContent >
                <DialogContentText>
                Are you sure you want to edit this todo?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button variant="contained" color="error" onClick={() => handleShowModal(false, '')}>CANCEL</Button>
            <Button variant="contained" color="success" onClick={handleSubmit}>SAVE</Button>
            </DialogActions>
        </Dialog>
    )
}

export default EditTodoConfirmationDialog