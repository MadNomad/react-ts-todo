import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Dispatch, FC, SetStateAction, useState } from "react";
import { v1 as uuid } from "uuid";
import { TodoItemType } from "../types/TodoItemType";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  updateData: () => void;
  currentCategoryTodos: TodoItemType[] | undefined;
}

const ModalTodoAddItem: FC<Props> = ({ isOpen, setIsOpen, currentCategoryTodos, updateData }) => {
  const [taskValue, setTaskValue] = useState("");

  const handleAddItem = (event: any) => {
    setTaskValue(event.target.value);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleAdd = () => {
    if (!taskValue) return;

    const newTask: TodoItemType = {
      id: uuid(),
      deadline: new Date(),
      text: taskValue,
      isDone: false,
    };
    currentCategoryTodos?.push(newTask);
    updateData();
    setTaskValue("");
    handleClose();
  };

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Add new task</DialogTitle>
      <DialogContent>
        <TextField
          value={taskValue}
          onChange={handleAddItem}
          autoFocus
          required
          margin="dense"
          label="Task description"
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

export default ModalTodoAddItem;
