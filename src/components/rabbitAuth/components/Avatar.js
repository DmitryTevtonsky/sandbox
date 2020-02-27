import React from 'react';
import './index.css';
import logo from './avatar.svg'

const Avatar = () => {
  return (
    <div className="avatar">
      <img src={logo}></img>
    </div>
  );
}

export default Avatar;
