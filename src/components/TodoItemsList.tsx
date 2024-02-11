import { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Button, List, Typography, styled } from "@mui/material";
import { Delete, Send } from "@mui/icons-material";
import { TodoItemType } from "../types/TodoItemType";
import ModalTodoAddItem from "./ModalTodoAddItem";
import TodoListItem from "./TodoListItem";

interface Props {
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
}

const TodoItemsList: FC<Props> = ({ selectedCategory, setSelectedCategory }) => {
  const { appData, setAppData } = useContext(DataContext);
  const [openModal, setOpenModal] = useState(false);

  const [currentCategoryId, setCurrentCategoryId] = useState<string>(selectedCategory);
  const [currentCategoryTodos, setCurrentCategoryTodos] = useState<TodoItemType[]>();

  const currentCategoryData = [...appData.filter((category) => category.id === currentCategoryId)][0];

  const handleOpen = () => setOpenModal(true);

  const handleCheckboxChange = (id: string, checked: boolean) => {
    const newCategoryTodos = [...currentCategoryData.todos!];
    newCategoryTodos.filter((item) => item.id === id)[0].isDone = !checked;
    setCurrentCategoryTodos(newCategoryTodos);
    updateAppData();
  };

  const handleDeleteItem = (id: string) => {
    const newCategoryTodos = [...currentCategoryData.todos!.filter((item) => item.id !== id)];
    currentCategoryData.todos = newCategoryTodos;
    updateAppData();
  };

  const handleDeleteCategory = () => {
    const newAppData = appData.filter((category) => category.id !== currentCategoryId);
    setSelectedCategory("");
    setAppData(newAppData);
  };

  const updateAppData = () => {
    currentCategoryData.isAllDone = currentCategoryData.todos?.every((todo) => todo.isDone);

    const newAppData = appData.map((category) =>
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
            <TodoListItem
              key={item.id}
              item={item}
              handleCheckboxChange={handleCheckboxChange}
              handleDeleteItem={handleDeleteItem}
            />
          );
        })}
      </StyledList>
      <ActionWrapper>
        <Button variant="outlined" color="error" startIcon={<Delete />} onClick={handleDeleteCategory}>
          Delete category
        </Button>
        <Button variant="contained" endIcon={<Send />} onClick={handleOpen}>
          Add new
        </Button>
      </ActionWrapper>
      <ModalTodoAddItem
        isOpen={openModal}
        setIsOpen={setOpenModal}
        currentCategoryTodos={currentCategoryData.todos}
        updateData={updateAppData}
      />
    </>
  );
};

const StyledList = styled(List)(({ theme }) => ({
  width: "100%",
  maxWidth: 760,
  marginTop: 10,
  marginBottom: 20,
  padding: "4px 20px",
  backgroundColor: theme.palette.background.paper,
  justifyContent: "center",
}));

const ActionWrapper = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "25px",
});

export default TodoItemsList;
