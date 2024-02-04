import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import Logo from './../images/ToDo-Logo.png';

const Header = () => {
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Box
            component="img"
            src={Logo}
            alt="Yet Another ToDo List"
            sx={{
              height: 42,
              margin: 1,
            }}
          />
          <Typography variant="h6">Yet Another ToDo List</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Header;
