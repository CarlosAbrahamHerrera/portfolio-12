import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Tabs, Tab, Box, useMediaQuery, useTheme } from '@mui/material';

function Navigation() {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const [value, setValue] = useState(location.pathname);

  useEffect(() => {
    setValue(location.pathname);
  }, [location]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box 
      sx={{ 
        width: '100%', 
        bgcolor: 'white',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        mb: 3,
        borderBottom: '1px solid #BFACAA'
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        centered={!isMobile}
        variant={isMobile ? "scrollable" : "standard"}
        scrollButtons={isMobile ? "auto" : false}
        textColor="secondary"
        aria-label="navigation tabs"
        sx={{ 
          '& .MuiTab-root': { 
            fontSize: '1rem',
            fontWeight: 500,
            color: '#05204A',
            '&.Mui-selected': {
              color: '#B497D6',
              fontWeight: 700,
            },
            '&:hover': {
              backgroundColor: '#E1E2EF',
              transition: 'background-color 0.3s ease',
            },
          }
        }}
      >
        <Tab label="About Me" value="/" component={Link} to="/" />
        <Tab label="Portfolio" value="/portfolio" component={Link} to="/portfolio" />
        <Tab label="Contact" value="/contact" component={Link} to="/contact" />
        <Tab label="Resume" value="/resume" component={Link} to="/resume" />
      </Tabs>
    </Box>
  );
}

export default Navigation; 