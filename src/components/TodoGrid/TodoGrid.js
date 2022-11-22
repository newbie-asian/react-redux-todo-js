import React from 'react';
import { IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutlineOutlined, CheckCircleOutlineOutlined, ModeEditOutlineOutlined } from '@mui/icons-material';
import UseEditTodoForm from '../EditTodoForm/UseEditTodoForm';
import { rows } from '../../services/gridRows';
import UseDeleteTodoConfirmationDialog from '../DeleteTodoConfirmationDialog/UseDeleteTodoConfirmationDialog';

const TodoGrid = (props) => {
  const { handleShowModal, showModal, buttonType, handleGetRowData, rowData, todos} = props;
  console.log("%c Line:11 🍅 buttonType", "color:#fca650", buttonType);

  const columns = [
    {
    field: "id",
    flex: 1,
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
        console.log(params);

        return  (
            <>
            <IconButton id='complete' color="success"><CheckCircleOutlineOutlined /></IconButton>
            <IconButton id='edit' color="warning" onClick={(evt) => {
            handleGetRowData(evt, params)
            handleShowModal(true, evt.target.parentElement.id);
            }}><ModeEditOutlineOutlined /></IconButton>
            <IconButton id='delete' color="error" onClick={(evt) => {
              handleGetRowData(evt, params)
              handleShowModal(true, evt.target.parentElement.id);
            }}><DeleteOutlineOutlined /></IconButton>
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
          <UseEditTodoForm showModal={showModal} handleShowModal={handleShowModal} handleGetRowData={handleGetRowData} rowData={rowData}/>
        }
        {(showModal && buttonType === 'delete') && <UseDeleteTodoConfirmationDialog showModal={showModal} handleShowModal={handleShowModal} rowData={rowData} />}
      </div>
    </div>
  </div>
)
}

export default TodoGrid