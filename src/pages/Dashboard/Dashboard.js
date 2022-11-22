import React from 'react';
import { Box, Container } from '@mui/material';
import UseAddTodoForm from '../../components/AddTodoForm/UseAddTodoForm';
import UseTodoGrid from '../../components/TodoGrid/UseTodoGrid';

const Dashboard = () => {
  return (
    <Container maxWidth="xl"  sx={{ p: 4, }}>
      <Box>
        <UseAddTodoForm />
      </Box>

      <Box>
        <UseTodoGrid />
      </Box>
    </Container>
  )
}

export default Dashboard