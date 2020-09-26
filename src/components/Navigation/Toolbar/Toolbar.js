import React from 'react';
import Logo from "../../Logo/Logo";
import './Toolbar.css';

const Toolbar = () => {
  return (
    <header className="Toolbar">
      <div className="Toolbar-logo">
        <Logo />
      </div>
        <a href="/addContact" className='button' ><span>Add new contact</span></a>
    </header>
  );
};

export default Toolbar;