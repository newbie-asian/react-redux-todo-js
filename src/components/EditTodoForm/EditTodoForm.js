import React from 'react';
import { Box, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField, DialogActions } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import EditTodoConfirmationDialog from './EditTodoConfirmationDialog';

const EditTodoForm = ( props ) => {
    const {
      handleShowModal, 
      showModal, 
      handleInputChange, 
      handleSubmit,
      handleInputDateChange, 
      handleShowConfirmationModal, 
      showConfirmationModal, 
      todo 
    } = props;
    
  return (
    <>
      <Dialog open={showModal} onClose={() => handleShowModal(false, '')}>
        <DialogTitle>EDIT TODO DETAILS</DialogTitle>
          <DialogContent >
              <DialogContentText>
              To subscribe to this website, please enter your email address here. We
              will send updates occasionally.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="title"
                label="Title"
                onClick={handleInputChange}
                type="text"
                fullWidth
                variant="outlined"
              />
              <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Description"
                onClick={handleInputChange}
                multiline
                rows={4}
                fullWidth
                variant="outlined"
              />
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <Box sx={{display: "flex", gap: ".8rem", my: ".5rem"} }>
                    <Box>
                    <DateTimePicker
                      label="Created Date"
                      readOnly
                      // value={todo.created_date}
                      onChange={(newValue) => handleInputDateChange(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    </Box>
                    <Box>
                    <DateTimePicker
                      label="Due Date"
                      // value={todo.deadline}
                      onChange={(newValue) => handleInputDateChange(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    </Box>
                </Box>
              </LocalizationProvider>
          </DialogContent>

          <DialogActions>
            <Button variant="contained" color="error" onClick={() => handleShowModal(false, '')}>CANCEL</Button>
            <Button variant="contained" color="success" onClick={() => handleShowConfirmationModal(true)}>SUBMIT</Button>
          </DialogActions>
      </Dialog>
      {showConfirmationModal && 
        <EditTodoConfirmationDialog 
          handleShowConfirmationModal={handleShowConfirmationModal} 
          showConfirmationModal={showConfirmationModal} 
          handleSubmit={handleSubmit}
        />
      }
    </>
  )
}

export default EditTodoForm