import React, { useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from '../contexts/authContext';
import { Link } from "react-router-dom";
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Alert from '@mui/material/Alert';

const LoginPage = () => {
    const authContext = useContext(AuthContext);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        try {
            await authContext.authenticate(userName, password);
            if (!authContext.isAuthenticated ) {
                setError("Incorrect username or password. Please try again.");
            } 
        } catch (err) {
            console.log(error);
        }
    };

    let location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (authContext.isAuthenticated) {
        return <Navigate to={from.pathname} />;
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" component="h1" gutterBottom>
                Login
            </Typography>
            {error && (
                <Alert severity="error" style={{ marginBottom: '20px' }}>
                    {error}
                </Alert>
            )}
            <form noValidate>
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
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={handleLogin}
                    fullWidth
                    style={{ marginTop: '20px' }}
                >
                    Log in
                </Button>
                <Typography variant="body1" style={{ marginTop: '20px' }}>
                    Not Registered? <Link to="/signup">Sign Up!</Link>
                </Typography>
            </form>
        </Container>
    );
};

export default LoginPage;
