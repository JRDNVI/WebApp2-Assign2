import React, { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SignUpPage = props => {
  const context = useContext(AuthContext)
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");
  const [registered, setRegistered] = useState(false);

  const register = () => {
    let passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    const validPassword = passwordRegEx.test(password);

    if (validPassword && password === passwordAgain) {
      context.register(userName, password);
      setRegistered(true);
    } else {
        console.log("password does not match");
    }
  }

  if (registered === true) {
    return <Navigate to="/login" />;
  }

  //
  return (
    <Container maxWidth="sm">
        <Typography variant="h4" component="h1" gutterBottom>
            Sign Up
        </Typography>
        <form>
            <TextField
                label="Username"
                variant="outlined"
                fullWidth
                margin="normal"
                value={userName}
                onChange={e => setUserName(e.target.value)}
            />
            <TextField
                label="Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <TextField
                label="Repeat Password"
                type="password"
                variant="outlined"
                fullWidth
                margin="normal"
                value={passwordAgain}
                onChange={e => setPasswordAgain(e.target.value)}
            />
            <Button 
                variant="contained" 
                color="primary" 
                onClick={register}
                fullWidth
                style={{ marginTop: '20px' }}
            >
                Register
            </Button>
        </form>
    </Container>
);
};

export default SignUpPage;