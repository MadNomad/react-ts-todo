import { FC, useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { AppDataType } from "../types/AppDataType";
import { TodoItemType } from "../types/TodoItemType";
interface Props {
  selectedCategory: string;
}
const TodoListItems: FC<Props> = ({ selectedCategory }) => {
  const { appData, setAppData } = useContext(DataContext);

  const [currentCategoryId, setCurrentCategoryId] = useState<string>(selectedCategory);
  const [currentCategoryTodos, setCurrentCategoryTodos] = useState<TodoItemType[]>();

  const currentCategoryData: AppDataType = [...appData.filter((category) => category.id === currentCategoryId)][0];

  const setCheckedRevert = (id: string, checked: boolean) => {
    currentCategoryData.todos.filter((item) => item.id === id)[0].isDone = !checked;
    setCurrentCategoryTodos(currentCategoryData.todos);
    updateAppData();
  };

  const deleteItem = (id: string) => {
    currentCategoryData.todos = [...currentCategoryData.todos?.filter((item) => item.id !== id)];
    updateAppData();
  };

  const isCategoryAllDone = () => {
    let isCategoryDone: boolean = true;
    currentCategoryData.todos?.forEach((todo) => {
      if (!todo.isDone) isCategoryDone = false;
    });
    currentCategoryData.isAllDone = isCategoryDone;
  };

  const updateAppData = () => {
    isCategoryAllDone();
    const newAppData: AppDataType[] = appData.map((category) =>
      category.id === currentCategoryId ? { ...currentCategoryData } : { ...category },
    );
    setAppData(newAppData);
  };

  useEffect(() => {
    setCurrentCategoryId(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    setCurrentCategoryTodos(currentCategoryData.todos);
  }, [currentCategoryData]);

  return (
    <>
      <Typography variant="h6">{currentCategoryData.name}</Typography>
      <List sx={{ width: "100%", maxWidth: 760, padding: "4px 20px", bgcolor: "background.paper" }}>
        {currentCategoryTodos?.map((item) => {
          return (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    deleteItem(item.id);
                  }}
                >
                  <Delete />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton
                role={undefined}
                onClick={() => {
                  setCheckedRevert(item.id, item.isDone);
                }}
                dense
              >
                <ListItem sx={{ width: "100%", maxWidth: 65, minWidth: 80 }}>
                  <Checkbox edge="start" checked={item.isDone} disableRipple />
                </ListItem>
                <ListItemText id={item.id} primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </>
  );
};

export default TodoListItems;
