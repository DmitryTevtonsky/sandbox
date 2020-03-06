import React from 'react';
import './index.css';
import Avatar from './components/avatar';
import AuthForm from './components/auth-form';

const RabbitAuth = () => {
  return (
    <div className="layout">
      <Avatar />
      <AuthForm />
    </div>
  );
};

export default RabbitAuth;
