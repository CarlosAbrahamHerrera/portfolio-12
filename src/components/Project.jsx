import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

function Project({ title, description, image, githubLink, liveLink, technologies }) {
  return (
    <Card sx={{ 
      maxWidth: 345, 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: '0 8px 16px rgba(5, 32, 74, 0.2)',
      }
    }}>
      <CardMedia
        component="img"
        height="160"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1, pb: 1 }}>
        <Typography gutterBottom variant="h5" component="div" color="#05204A" fontWeight="500">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto' }}>
          {technologies.map((tech) => (
            <Chip 
              key={tech} 
              label={tech} 
              size="small" 
              sx={{ 
                backgroundColor: '#E1E2EF',
                color: '#05204A',
                border: '1px solid #BFACAA',
                fontSize: '0.7rem'
              }} 
            />
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-between', px: 2, pb: 2 }}>
        <Button 
          size="small" 
          startIcon={<GitHubIcon />} 
          href={githubLink} 
          target="_blank"
          sx={{ color: '#05204A' }}
        >
          GitHub
        </Button>
        <Button 
          size="small" 
          startIcon={<LaunchIcon />} 
          href={liveLink} 
          target="_blank"
          variant="contained"
          sx={{ color: '#FFFFFF' }}
        >
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}

export default Project; 