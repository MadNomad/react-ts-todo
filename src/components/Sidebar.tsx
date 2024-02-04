import { Assignment, AssignmentTurnedIn } from '@mui/icons-material';
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from '@mui/material';
import { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import SidebarMenuAddCategory from './SidebarMenuAddCategory';

const Sidebar = () => {
  const drawerWidth = 240;
  const { appData, setAppData } = useContext(DataContext);

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: {
          width: drawerWidth,
          boxSizing: 'border-box',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <SidebarMenuAddCategory />
          {appData?.categories.map((category) => (
            <ListItem
              key={category.id}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  {category.isAllDone ? <AssignmentTurnedIn /> : <Assignment />}
                </ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
