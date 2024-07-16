import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled(Typography)`
  color: red;
  margin-top: 5px;
`;

const SuccessMessage = styled(Typography)`
  color: green;
  margin-top: 10px;
`;

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is not valid';
      isValid = false;
    }

    if (!formData.message) {
      tempErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      setSuccess('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setErrors({});
    } else {
      setSuccess('');
    }
  };

  return (
    <FormContainer>
      <Typography variant="h4" component="h2" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit} noValidate>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
        
        <TextField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          fullWidth
          required
        />
        {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          margin="normal"
          fullWidth
          multiline
          rows={4}
          required
        />
        {errors.message && <ErrorMessage>{errors.message}</ErrorMessage>}
        
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Submit
        </Button>
      </form>
      {success && <SuccessMessage>{success}</SuccessMessage>}
    </FormContainer>
  );
};

export default ContactForm;
