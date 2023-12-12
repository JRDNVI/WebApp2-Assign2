import React, { useState } from 'react';
import { signIn } from './authFunction';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const user = await signIn(email, password);
      console.log('User signed in:', user);
      navigate('/');
    } catch (error) {
      console.error('Sign-in error:', error.message);
      alert(`Sign-in error: ${error.message}`);
    }
  };

  return (
    <Container maxWidth="sm" >
      <div>
        <h2>Sign In</h2>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          value={email}
          sx={{padding: "10px"}}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          value={password}
          sx={{padding: "10px"}}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSignIn}
          fullWidth
        >
          Sign In
        </Button>
      </div>
    </Container>
  );
};

export default SignIn;