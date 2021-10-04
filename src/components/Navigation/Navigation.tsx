import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import logo from '../../images/logo.png';
import './Navigation.scss';

export const Navigation: React.FC = () => {
  return (
    <div className="Navigation__wrapper">
      <aside className="Navigation">
        <Link to="/" className="Navigation__logo">
          <img src={logo} alt="Banking-app" />
        </Link>
        <Nav />
      </aside>
    </div>
  );
};
