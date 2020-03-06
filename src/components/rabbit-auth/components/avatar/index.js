import React from 'react';
import logo from './avatar.svg';

import './index.css';

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={logo} alt="avatar" />
    </div>
  );
};

export default Avatar;
