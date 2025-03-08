import { Card, CardContent, CardMedia, Typography, CardActions, Button, Box } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

function Project({ title, description, image, githubLink, liveLink, technologies }) {
  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="140"
        image={image}
        alt={title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" color="text.secondary">
            Technologies: {technologies.join(', ')}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button size="small" startIcon={<GitHubIcon />} href={githubLink} target="_blank">
          GitHub
        </Button>
        <Button size="small" startIcon={<LaunchIcon />} href={liveLink} target="_blank">
          Live Demo
        </Button>
      </CardActions>
    </Card>
  );
}

export default Project; 