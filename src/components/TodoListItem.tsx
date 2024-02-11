import React, { FC } from "react";
import { Checkbox, IconButton, ListItem, ListItemButton, ListItemText, styled } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { TodoItemType } from "../types/TodoItemType";

interface Props {
  handleDeleteItem: (id: string) => void;
  handleCheckboxChange: (id: string, isDone: boolean) => void;
  item: TodoItemType;
}

const TodoListItem: FC<Props> = ({ item, handleDeleteItem, handleCheckboxChange }) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          onClick={() => {
            handleDeleteItem(item.id);
          }}
        >
          <Delete />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton
        onClick={() => {
          handleCheckboxChange(item.id, item.isDone);
        }}
        dense
      >
        <CheckboxWrapper>
          <Checkbox edge="start" checked={item.isDone} />
        </CheckboxWrapper>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  );
};

const CheckboxWrapper = styled("div")({
  width: "100%",
  maxWidth: 65,
  minWidth: 80,
});

export default TodoListItem;
