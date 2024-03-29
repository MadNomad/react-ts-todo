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
import { FC, useContext } from "react";
import { DataContext } from "../context/DataContext";
import SidebarMenuAddCategory from "./SidebarMenuAddCategory";

const drawerWidth = 240;

interface Props {
  handleCategoryClick: (name: string) => () => void;
}

const Sidebar: FC<Props> = ({ handleCategoryClick }) => {
  const { appData } = useContext(DataContext);

  return (
    <StyledDrawer width={drawerWidth} variant="permanent">
      <Toolbar />
      <Wrapper>
        <List>
          <SidebarMenuAddCategory />
          {appData.map((category) => (
            <ListItem key={category.id} disablePadding onClick={handleCategoryClick(category.id)}>
              <ListItemButton>
                <ListItemIcon>{category.isAllDone ? <AssignmentTurnedIn /> : <Assignment />}</ListItemIcon>
                <ListItemText>{category.name}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Wrapper>
    </StyledDrawer>
  );
};

const Wrapper = styled("div")({
  overflow: "auto",
});

const StyledDrawer = styled(Drawer)<{ width: string }>(({ width }) => ({
  width: `${width}px`,
  flexShrink: 0,

  "& .MuiDrawer-paper": {
    width: `${width}px`,
  },
}));

export default Sidebar;
