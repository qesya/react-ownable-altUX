import React from 'react';
import { NavLink } from 'react-router-dom';
import './headerStyles.css';

const Header: React.FC = () => {
  return (
    <header className='main-header'>
      <nav>
          <h1>ownable</h1>
      </nav>
    </header>
  );
}

export default Header;
