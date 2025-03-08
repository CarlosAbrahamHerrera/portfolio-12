import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box, useMediaQuery, useTheme } from '@mui/material';

function Navigation() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [value, setValue] = useState(location.pathname);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        centered={!isMobile}
        variant={isMobile ? "scrollable" : "standard"}
        scrollButtons={isMobile ? "auto" : false}
      >
        <Tab label="About" value="/" component={Link} to="/" />
        <Tab label="Portfolio" value="/portfolio" component={Link} to="/portfolio" />
        <Tab label="Contact" value="/contact" component={Link} to="/contact" />
        <Tab label="Resume" value="/resume" component={Link} to="/resume" />
      </Tabs>
    </Box>
  );
}

export default Navigation; 