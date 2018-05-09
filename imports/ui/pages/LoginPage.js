import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';

const LoginPage = () => (
  <LoginContainer>
    <LoginLogo src="img/loginimg.png" />
    <LoginForm />
  </LoginContainer>
);
export default LoginPage;

const LoginContainer = styled.div`
  padding: 60px 0;
  top: 50%;
  left: 50%;
`;

const LoginLogo = styled.img` 
  max-width: 20%; 
  max-height: 20%;
`;
