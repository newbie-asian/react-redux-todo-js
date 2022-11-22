import React from 'react';
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions} from '@mui/material';

const EditTodoConfirmationDialog = (props) => {
    const { handleShowConfirmationModal, showConfirmationModal, handleSubmit } = props;
    return (
        <Dialog open={showConfirmationModal} onClose={() => handleShowConfirmationModal(false)}>
            <DialogTitle>CONFIRMATION MESSAGE</DialogTitle>
            <DialogContent >
                <DialogContentText>
                Are you sure you want to edit this todo?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button variant="contained" color="error" onClick={() => handleShowConfirmationModal(false)}>CANCEL</Button>
            <Button variant="contained" color="success" onClick={handleSubmit}>SAVE</Button>
            </DialogActions>
        </Dialog>
      )
}

export default EditTodoConfirmationDialog