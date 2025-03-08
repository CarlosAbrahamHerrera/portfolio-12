import { Container, Grid, Typography, Box } from '@mui/material';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Guild Education Support Portal',
      description: 'An educational platform support system that helps users navigate tuition reimbursement programs',
      image: '/project1.jpg',
      githubLink: 'https://github.com/carlosherrera/guild-support',
      liveLink: 'https://guildeducation.com',
      technologies: ['React', 'Node.js', 'Salesforce', 'Customer Support'],
    },
    {
      title: 'Portablendr E-commerce',
      description: 'E-commerce platform for portable blender products with payment integration and inventory management',
      image: '/project2.jpg',
      githubLink: 'https://github.com/carlosherrera/portablendr',
      liveLink: 'https://portablendr.com',
      technologies: ['React', 'Shopify', 'JavaScript', 'CSS3'],
    },
    {
      title: 'Forever Amoure',
      description: 'Branded e-commerce store with customer loyalty program and automated email marketing',
      image: '/project3.jpg',
      githubLink: 'https://github.com/carlosherrera/forever-amoure',
      liveLink: 'https://foreveramoure.com',
      technologies: ['Shopify', 'Email Marketing', 'Analytics', 'UI/UX'],
    },
    {
      title: 'EPS Tracker',
      description: 'Tool developed for Guild Education to track customer pain points and provide actionable insights',
      image: '/project4.jpg',
      githubLink: 'https://github.com/carlosherrera/eps-tracker',
      liveLink: 'https://guild-eps-tracker.netlify.app',
      technologies: ['React', 'Material UI', 'Firebase', 'Data Visualization'],
    },
    {
      title: 'Support Documentation Portal',
      description: 'Internal knowledge base system for customer support representatives with search functionality',
      image: '/project5.jpg',
      githubLink: 'https://github.com/carlosherrera/support-docs',
      liveLink: 'https://support-documentation.netlify.app',
      technologies: ['React', 'Markdown', 'Search API', 'Authentication'],
    },
    {
      title: 'Customer Support Analytics Dashboard',
      description: 'Data visualization tool for tracking support metrics, response times, and customer satisfaction',
      image: '/project6.jpg',
      githubLink: 'https://github.com/carlosherrera/support-analytics',
      liveLink: 'https://support-analytics-dashboard.netlify.app',
      technologies: ['React', 'D3.js', 'Express', 'MongoDB'],
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