import React from 'react';

function NavBar({ onLogoClick, onProfileClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="navbar-brand" onClick={onLogoClick}>
          I <i className="fa fa-heart"></i> My Dog
        </div>
        <div onClick={onProfileClick}>
          <i className="fa fa-user-circle"></i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
