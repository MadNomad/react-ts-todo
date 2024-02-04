import { Add } from '@mui/icons-material';
import {
  Button,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  TextField,
} from '@mui/material';
import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import BasicModal from './UI/Modal';

const SidebarMenuAddCategory = () => {
  const { appData, setAppData } = useContext(DataContext);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={() => setOpenModal(true)}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText>Add category</ListItemText>
        </ListItemButton>
      </ListItem>
      <BasicModal isOpen={openModal}>
        <TextField
          id="outlined-basic"
          label="Category name"
          variant="outlined"
        />
        <Button
          onClick={() => {}}
          variant="contained"
        >
          Add
        </Button>
      </BasicModal>
      <Divider />
    </>
  );
};

export default SidebarMenuAddCategory;
