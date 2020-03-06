import React from 'react';
import { Icon } from 'antd';
import { Facebook, Twitter, Vkontakte } from './icons';
import './index.css';

const authentificators = [
  { key: 'facebook', icon: Facebook },
  { key: 'vk', icon: Vkontakte },
  { key: 'twitter', icon: Twitter }
];

const AuthWith = () => {
  return (
    <div className="auth-with-icons-layout">
      {authentificators.map(item => (
        <Icon key={item.key} component={item.icon} />
      ))}
    </div>
  );
};

export default AuthWith;
