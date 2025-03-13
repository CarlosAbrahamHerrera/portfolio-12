import { Container, Grid, Typography, Box } from '@mui/material';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Employee Tracker',
      description: 'A TypeScript application for managing employee data, enabling organizations to track and organize their workforce information efficiently.',
      image: '/project1.jpg',
      githubLink: 'https://github.com/CarlosAbrahamHerrera/employee-tracker',
      liveLink: 'https://github.com/CarlosAbrahamHerrera/employee-tracker',
      technologies: ['TypeScript', 'Node.js', 'SQL', 'Command-line Interface'],
    },
    {
      title: 'Horiseon Code Refactor',
      description: 'A web accessibility project focusing on refactoring existing code to meet accessibility standards and improve SEO performance.',
      image: '/project2.jpg',
      githubLink: 'https://github.com/CarlosAbrahamHerrera/horiseon-code-refactor',
      liveLink: 'https://carlosabrahamherrera.github.io/horiseon-code-refactor/',
      technologies: ['HTML', 'CSS', 'Accessibility', 'SEO'],
    },
    {
      title: 'README Generator',
      description: 'A command-line application that dynamically generates professional README.md files for projects based on user input.',
      image: '/project3.jpg',
      githubLink: 'https://github.com/CarlosAbrahamHerrera/read-me-generator',
      liveLink: 'https://github.com/CarlosAbrahamHerrera/read-me-generator',
      technologies: ['JavaScript', 'Node.js', 'Inquirer', 'Command-line Interface'],
    },
    {
      title: 'Rock Paper Scissors Game',
      description: 'An interactive browser-based implementation of the classic Rock, Paper, Scissors game with a modern UI.',
      image: '/project4.jpg',
      githubLink: 'https://github.com/CarlosAbrahamHerrera/rock-paper-scissors-game',
      liveLink: 'https://carlosabrahamherrera.github.io/rock-paper-scissors-game/',
      technologies: ['HTML', 'CSS', 'JavaScript', 'DOM Manipulation'],
    },
    {
      title: 'Vehicle Builder',
      description: 'A TypeScript application that allows users to create and customize virtual vehicles with various specifications and options.',
      image: '/project5.jpg',
      githubLink: 'https://github.com/CarlosAbrahamHerrera/veichle-builder',
      liveLink: 'https://github.com/CarlosAbrahamHerrera/veichle-builder',
      technologies: ['TypeScript', 'Object-Oriented Programming', 'Design Patterns'],
    },
    {
      title: 'Travel Bible',
      description: 'A collaborative project providing comprehensive information about select travel destinations, including attractions, local tips, and travel guides.',
      image: '/project6.jpg',
      githubLink: 'https://github.com/bmostowski1996/travel-bible',
      liveLink: 'https://bmostowski1996.github.io/travel-bible/',
      technologies: ['JavaScript', 'HTML', 'CSS', 'API Integration', 'Collaborative Development'],
    },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          My Projects
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Project {...project} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}

export default Portfolio; 