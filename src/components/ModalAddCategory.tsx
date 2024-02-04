import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
} from '@mui/material';
import React, {Dispatch, FC, SetStateAction, useContext, useState} from 'react';
import { DataContext } from '../context/DataContext';
import { AppDataType } from '../types/AppDataType';
import { TodoCategoryType } from '../types/TodoCategoryType';
import { v1 as uuid } from 'uuid';

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalAddCategory:FC<Props> = ({isOpen, setIsOpen}) => {
  const { appData, setAppData } = useContext(DataContext);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries((formData as any).entries());
          const category = formJson.category;
          const newCategory: TodoCategoryType = {
            id: uuid(),
            name: category,
            isAllDone: false,
          };
          const newAppData: AppDataType = {
            categories: [...appData!.categories, newCategory],
            todos: [...appData!.todos],
          };
          setAppData(newAppData);
          handleClose();
        },
      }}
    >
      <DialogTitle>Add new category</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          required
          margin="dense"
          id="category"
          name="category"
          label="Category name"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit">Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAddCategory;
