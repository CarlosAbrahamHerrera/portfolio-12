import { Box, Container, IconButton, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: 'auto',
        backgroundColor: '#05204A', // Oxford Blue background
        color: '#ffffff', // White text
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" align="center" color="inherit">
          © {new Date().getFullYear()} Carlos Herrera. All rights reserved.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 2 }}>
          <IconButton color="inherit" href="https://github.com/carlosherrera" target="_blank" aria-label="GitHub" sx={{ color: '#E1E2EF' }}>
            <GitHubIcon />
          </IconButton>
          <IconButton color="inherit" href="https://linkedin.com/in/carlos-abraham-herrera" target="_blank" aria-label="LinkedIn" sx={{ color: '#E1E2EF' }}>
            <LinkedInIcon />
          </IconButton>
          <IconButton color="inherit" href="mailto:officialcarlosdiaz@gmail.com" aria-label="Email" sx={{ color: '#E1E2EF' }}>
            <EmailIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer; 