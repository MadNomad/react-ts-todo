import { Assignment, AssignmentTurnedIn } from "@mui/icons-material";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
  Toolbar,
} from "@mui/material";
import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import SidebarMenuAddCategory from "./SidebarMenuAddCategory";

const Sidebar = () => {
  const drawerWidth = 240;
  const { appData, setAppData } = useContext(DataContext);

  return (
    <StyledDrawer width={drawerWidth} variant="permanent">
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <SidebarMenuAddCategory />
          {appData?.categories.map((category) => (
            <ListItem key={category.id} disablePadding>
              <ListItemButton>
                <ListItemIcon>{category.isAllDone ? <AssignmentTurnedIn /> : <Assignment />}</ListItemIcon>
                <ListItemText primary={category.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </StyledDrawer>
  );
};

const StyledDrawer = styled(Drawer)<{ width: string }>(({ width }) => ({
  width: `${width}px`,
  flexShrink: 0,

  "& .MuiDrawer-paper": {
    width: `${width}px`,
    boxSizing: "border-box",
  },
}));

export default Sidebar;
