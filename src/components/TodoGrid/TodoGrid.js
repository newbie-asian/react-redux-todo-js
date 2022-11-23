import React from 'react';
import { IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlineOutlined, CheckCircleOutlineOutlined, ModeEditOutlineOutlined, RuleOutlined } from '@mui/icons-material';
import UseEditTodoForm from '../EditTodoForm/UseEditTodoForm';
import { rows } from '../../services/gridRows';
import DeleteTodoConfirmationDialog from '../DeleteTodoConfirmationDialog/DeleteTodoConfirmationDialog';

const TodoGrid = (props) => {
  const { 
    handleShowModal, 
    showModal, 
    buttonType, 
    handleGetRowId, 
    handleDeleteTodo, 
    handleCompleteTodo, 
    rowId, 
    todos
  } = props;

  const columns = [
    {
    field: "id",
    flex: 0,
    headerName: "ID"
    },
    {
    field: "title",
    flex: 1,
    headerName: "Title"
    },
    {
    field: "description",
    flex: 2,
    headerName: "Description"
    },
    {
    field: "created_date",
    flex: 1,
    headerName: "Created Date"
    },
    {
    field: "deadline",
    flex: 1,
    headerName: "Deadline"
    },
    {
    field: "status",
    flex: 1,
    headerName: "Status"
    },
    {
    field: "actions",
    flex: 1,
    headerName: "Actions",
    renderCell: (params) => {

        return  (
            <>
              <IconButton 
                id='complete' 
                onClick={(evt) => {
                  handleCompleteTodo(params)
                }}>
                {params.row.status === 'Pending' ? <CheckCircleOutlineOutlined color="success" /> : 
                  <RuleOutlined color="info" />}
              </IconButton>

              <IconButton 
              id='edit' 
              color="warning" 
              disabled={params.row.status === 'Completed' ? true : false}
              onClick={(evt) => {
                handleGetRowId(params)
                handleShowModal(true, evt.target.parentElement.id);
              }}>
                <ModeEditOutlineOutlined />
              </IconButton>

              <IconButton 
              id='delete' 
              color="error" 
              onClick={(evt) => {
                handleGetRowId(params)
                handleShowModal(true, evt.target.parentElement.id);
              }}>
                <DeleteOutlineOutlined />
              </IconButton>
            </>
        )
      }
    }
]

return (
  <div style={{ height: 400, width: '100%' }}>
    <div style={{ display: 'flex', height: '100%' }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid rows={todos.map((row, index)=> {
          return {...row, id: `0${index + 1}`}
        })} columns={columns} />
        {(showModal && buttonType === 'edit') &&
          <UseEditTodoForm 
            showModal={showModal} 
            handleShowModal={handleShowModal} 
            handleGetRowId={handleGetRowId} 
            rowId={rowId}/>
        }
        {(showModal && buttonType === 'delete') && 
          <DeleteTodoConfirmationDialog 
            showModal={showModal} 
            handleDeleteTodo={handleDeleteTodo}
            handleShowModal={handleShowModal} 
            rowId={rowId} />}
      </div>
    </div>
  </div>
)
}

export default TodoGrid