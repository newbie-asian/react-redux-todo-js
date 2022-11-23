import React from 'react';
import { Button, Box, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@mui/material';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';


const AddTodoForm = (props) => {
  const { handleShowModal, showModal, handleInputChange, handleDateInputChange, handleSubmit, todo } = props;

  return (
    <>
      <Button variant="contained" onClick={() => {handleShowModal(true)}} sx={{ mb: 4}}>Add New Todo</Button>
      <Dialog open={showModal} onClose={() => handleShowModal(false)}>
        <DialogTitle>NEW TODO DETAILS</DialogTitle>
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
            onChange={handleInputChange}
            value={todo.title}
            type="text"
            fullWidth
            variant="outlined"
            />
            <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            onChange={handleInputChange}
            value={todo.description}
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
                      value={todo.created_date}
                      onChange={(newValue) => handleDateInputChange(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
                <Box>
                  <DateTimePicker
                      label="Due Date"
                      minDateTime={new Date()}
                      value={todo.deadline}
                      onChange={(newValue) => handleDateInputChange(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
            </Box>
            
            </LocalizationProvider>
        </DialogContent>
        <DialogActions>
        <Button variant="contained" color="error" onClick={() => handleShowModal(false)}>CANCEL</Button>
        <Button variant="contained" color="success" onClick={() => {
            handleSubmit()
            handleShowModal(false)
        }}>SUBMIT</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

export default AddTodoForm