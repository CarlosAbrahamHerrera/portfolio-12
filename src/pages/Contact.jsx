import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Alert,
  Paper,
} from '@mui/material';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  
  const [errorMessages, setErrorMessages] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [status, setStatus] = useState('');

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    if (!value.trim()) {
      setErrors({ ...errors, [name]: true });
      setErrorMessages({ ...errorMessages, [name]: 'This field is required' });
    } else if (name === 'email' && !validateEmail(value)) {
      setErrors({ ...errors, [name]: true });
      setErrorMessages({ ...errorMessages, [name]: 'Please enter a valid email address' });
    } else {
      setErrors({ ...errors, [name]: false });
      setErrorMessages({ ...errorMessages, [name]: '' });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing again
    if (errors[name]) {
      setErrors({ ...errors, [name]: false });
      setErrorMessages({ ...errorMessages, [name]: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate all fields before submission
    let hasErrors = false;
    const newErrors = { ...errors };
    const newErrorMessages = { ...errorMessages };
    
    if (!formData.name.trim()) {
      newErrors.name = true;
      newErrorMessages.name = 'This field is required';
      hasErrors = true;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = true;
      newErrorMessages.email = 'This field is required';
      hasErrors = true;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = true;
      newErrorMessages.email = 'Please enter a valid email address';
      hasErrors = true;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = true;
      newErrorMessages.message = 'This field is required';
      hasErrors = true;
    }
    
    if (hasErrors) {
      setErrors(newErrors);
      setErrorMessages(newErrorMessages);
      return;
    }
    
    // If all validations pass, submit the form
    setStatus('success');
    console.log('Form submitted:', formData);
    
    // In a real application, you'd send the data to a server here
    // For now, we'll just clear the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h3" component="h1" align="center" gutterBottom>
          Contact Me
        </Typography>
        <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
          {status === 'success' && (
            <Alert severity="success" sx={{ mb: 2 }}>
              Message sent successfully!
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              required
              error={errors.name}
              helperText={errorMessages.name}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              required
              error={errors.email}
              helperText={errorMessages.email}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              margin="normal"
              required
              error={errors.message}
              helperText={errorMessages.message}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              sx={{ mt: 2 }}
            >
              Send Message
            </Button>
          </form>
          
          <Box sx={{ mt: 4 }}>
            <Typography variant="h6" gutterBottom>
              Other Ways to Reach Me:
            </Typography>
            <Typography variant="body1">
              Email: <a href="mailto:officialcarlosdiaz@gmail.com">officialcarlosdiaz@gmail.com</a>
            </Typography>
            <Typography variant="body1">
              Phone: (804) 510-8028
            </Typography>
            <Typography variant="body1">
              Location: Richmond, VA 23233
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Contact; 