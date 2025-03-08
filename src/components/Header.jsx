import { AppBar, Toolbar, Typography, Container } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="div"
            sx={{ 
              flexGrow: 1, 
              display: 'flex', 
              alignItems: 'center', 
              fontWeight: 'bold' 
            }}
          >
            Carlos Herrera
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header; 