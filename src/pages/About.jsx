import { Container, Typography, Box, Avatar } from '@mui/material';

function About() {
  return (
    <Container maxWidth="md">
      <Box
        sx={{
          mt: 4,
          mb: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{
            width: 200,
            height: 200,
            mb: 4,
          }}
          alt="Carlos Herrera"
          src="/profile-photo.jpg"
        />
        <Typography variant="h3" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Customer Support Specialist & Web Developer
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to my portfolio! I'm a Customer Support Specialist with 9+ years of experience in the Edtech Startup space
          and across various industries. I'm passionate about helping users solve technical issues and creating great customer experiences.
        </Typography>
        <Typography variant="body1" paragraph>
          I'm currently expanding my skillset into web development, learning modern technologies like React, Node.js, and MongoDB.
          My background in customer support gives me a unique perspective on user experience and application usability.
          I'm excited to combine my technical troubleshooting skills with my new coding abilities to build user-friendly applications.
        </Typography>
        <Typography variant="body1" paragraph>
          Based in Richmond, VA, I enjoy working remotely and collaborating with teams across different time zones.
          When I'm not coding or helping customers, I'm continuously learning and staying updated with the latest technologies.
        </Typography>
      </Box>
    </Container>
  );
}

export default About; 