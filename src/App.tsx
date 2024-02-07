import Header from "./components/Header";
import { Box, CssBaseline, Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import { DataContext } from "./context/DataContext";
import { useState } from "react";
import { AppDataType } from "./types/AppDataType";

const mockData: AppDataType[] = [
  {
    id: "1",
    name: "What to learn",
    isAllDone: false,
    todos: [
      {
        id: "1",
        deadline: new Date(),
        text: "React practice",
        isDone: true,
      },
      {
        id: "2",
        deadline: new Date(),
        text: "JavaScript practice",
        isDone: true,
      },
      {
        id: "3",
        deadline: new Date(),
        text: "Next.js practice",
        isDone: false,
      },
    ],
  },
  { id: "2", name: "Movies", isAllDone: true, todos: [] },
  { id: "3", name: "Music", isAllDone: true, todos: [] },
];

const App = () => {
  const [appData, setAppData] = useState<AppDataType[]>(mockData);
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleCategoryClick = (name: string) => () => setSelectedCategory(name);

  console.log(selectedCategory);

  return (
    <DataContext.Provider value={{ appData, setAppData }}>
      <CssBaseline />
      <Header />
      <Box sx={{ display: "flex" }}>
        <Sidebar handleCategoryClick={handleCategoryClick} />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Typography paragraph>Hello World!</Typography>
        </Box>
      </Box>
    </DataContext.Provider>
  );
};

export default App;
