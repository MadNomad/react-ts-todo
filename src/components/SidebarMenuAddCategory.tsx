import { Add } from "@mui/icons-material";
import { Divider, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import ModalAddCategory from "./ModalAddCategory";

const SidebarMenuAddCategory = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);

  return (
    <>
      <ListItem disablePadding>
        <ListItemButton onClick={handleOpen}>
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText>Add category</ListItemText>
        </ListItemButton>
      </ListItem>
      <ModalAddCategory isOpen={openModal} setIsOpen={setOpenModal} />
      <Divider />
    </>
  );
};

export default SidebarMenuAddCategory;
