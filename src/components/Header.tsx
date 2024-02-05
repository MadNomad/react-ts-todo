import { AppBar, styled, Toolbar, Typography } from "@mui/material";
import Logo from "./../images/ToDo-Logo.png";

const Header = () => {
  return (
    <>
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledImage src={Logo} alt="Yet Another ToDo List" />
          <Typography variant="h6">Yet Another ToDo List</Typography>
        </Toolbar>
      </StyledAppBar>
      <Toolbar />
    </>
  );
};

const StyledImage = styled("img")({
  height: "42px",
  margin: "4px",
});

const StyledAppBar = styled(AppBar)({
  zIndex: 100000,
});

export default Header;
