import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
import { AppDataType } from "../types/AppDataType";
import { v1 as uuid } from "uuid";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalAddCategory: FC<Props> = ({ isOpen, setIsOpen }) => {
  const [categoryValue, setCategoryValue] = useState("");
  const { appData, setAppData } = useContext(DataContext);

  const handleChangeCategory = (event: any) => {
    setCategoryValue(event.target.value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAdd = () => {
    if (!categoryValue) return;

    const newCategory: AppDataType = {
      id: uuid(),
      name: categoryValue,
      isAllDone: true,
      todos: [],
    };
    const newAppData: AppDataType[] = [...appData, newCategory];
    setAppData(newAppData);
    setCategoryValue("");
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add new category</DialogTitle>
      <DialogContent>
        <TextField
          value={categoryValue}
          onChange={handleChangeCategory}
          autoFocus
          required
          margin="dense"
          label="Category name"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleAdd}>Add</Button>
      </DialogActions>
    </Dialog>
  );
};

export default ModalAddCategory;
