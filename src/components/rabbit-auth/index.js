import React from 'react';
import './index.css';
import Avatar from './components/Avatar';
import AuthForm from './components/auth-form'

const RabbitAuth = () => {
  return (
    <div className="layout">
      <Avatar />
      <AuthForm></AuthForm>
    </div>
  );
}

export default RabbitAuth;
