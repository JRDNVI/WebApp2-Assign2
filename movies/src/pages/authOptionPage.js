// AuthOptionsPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import SignIn from '../components/auth/signIn';
import SignUp from '../components/auth/signUp';

const AuthOptionsPage = () => {
  return (
    <>
      <SignIn />
      <SignUp />
    </>
  );
};

export default AuthOptionsPage;