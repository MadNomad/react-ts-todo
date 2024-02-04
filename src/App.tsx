import './App.css';
import Header from './components/Header';
import { Box, CssBaseline, Typography } from '@mui/material';
import Sidebar from './components/Sidebar';
import { DataContext } from './context/DataContext';
import { useState } from 'react';
import { AppDataType } from './types/AppDataType';

function App() {
  const [appData, setAppData] = useState<AppDataType | null>({
    categories: [
      { id: '1', name: 'What to learn', isAllDone: false },
      { id: '2', name: 'Movies', isAllDone: true },
      { id: '3', name: 'Music', isAllDone: true },
    ],
    todos: [
      {
        id: 'string',
        categoryId: '1',
        deadline: new Date(),
        text: 'string',
        isDone: false,
      },
    ],
  });

  return (
    <DataContext.Provider value={{ appData, setAppData }}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3 }}
        >
          <Typography paragraph>Hello World!</Typography>
        </Box>
      </Box>
    </DataContext.Provider>
  );
}

export default App;

// Test data:

// categories: [{ id: '1', name: 'Test Category', isAllDone: false }],
// todos: [
//   {
//     id: 'string',
//     categoryId: '1',
//     deadline: new Date(),
//     text: 'string',
//     isDone: false,
//   },
// ],
