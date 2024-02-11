import { FC, useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import {
  Button,
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import { Delete, Send } from "@mui/icons-material";
import { AppDataType } from "../types/AppDataType";
import { TodoItemType } from "../types/TodoItemType";
import ModalTodoAddItem from "./ModalTodoAddItem";

interface Props {
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}

const TodoListItems: FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  const { appData, setAppData } = useContext(DataContext);
  const [openModal, setOpenModal] = useState(false);

  const [currentCategoryId, setCurrentCategoryId] = useState<string>(selectedCategory);
  const [currentCategoryTodos, setCurrentCategoryTodos] = useState<TodoItemType[]>();

  const currentCategoryData: AppDataType = [...appData.filter((category) => category.id === currentCategoryId)][0];

  const handleOpen = () => setOpenModal(true);

  const setCheckedRevert = (id: string, checked: boolean) => {
    const newCategoryTodos: TodoItemType[] = [...currentCategoryData.todos!];
    newCategoryTodos.filter((item) => item.id === id)[0].isDone = !checked;
    setCurrentCategoryTodos(newCategoryTodos);
    updateAppData();
  };

  const deleteItem = (id: string) => {
    const newCategoryTodos: TodoItemType[] = [...currentCategoryData.todos!.filter((item) => item.id !== id)];
    currentCategoryData.todos = newCategoryTodos;
    updateAppData();
  };

  const deleteCategory = () => {
    const newAppData: AppDataType[] = appData.filter((category) => category.id !== currentCategoryId);
    setSelectedCategory("");
    setAppData(newAppData);
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
      <StyledList>
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
                <StyledListItem>
                  <Checkbox edge="start" checked={item.isDone} disableRipple />
                </StyledListItem>
                <ListItemText id={item.id} primary={item.text} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </StyledList>
      <StyledButtonsDiv>
        <Button variant="outlined" color="error" startIcon={<Delete />} onClick={() => deleteCategory()}>
          Delete category
        </Button>
        <Button variant="contained" endIcon={<Send />} onClick={handleOpen}>
          Add new
        </Button>
      </StyledButtonsDiv>
      <ModalTodoAddItem
        isOpen={openModal}
        setIsOpen={setOpenModal}
        currentCategoryTodos={currentCategoryData.todos}
        updateData={updateAppData}
      />
    </>
  );
};

const StyledList = styled(List)({
  width: "100%",
  maxWidth: 760,
  marginTop: 10,
  marginBottom: 20,
  padding: "4px 20px",
  bgcolor: "background.paper",
  justifyContent: "center",
});

const StyledListItem = styled(ListItem)({
  width: "100%",
  maxWidth: 65,
  minWidth: 80,
});

const StyledButtonsDiv = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "25px",
});

export default TodoListItems;
