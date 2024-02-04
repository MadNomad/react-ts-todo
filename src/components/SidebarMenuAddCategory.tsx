import { Add } from '@mui/icons-material';
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Modal,
} from '@mui/material';
import { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import ModalAddCategory from './ModalAddCategory';

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
      <ModalAddCategory
        isOpen={openModal}
        setIsOpen={setOpenModal}
      />
      <Divider />
    </>
  );
};

export default SidebarMenuAddCategory;
