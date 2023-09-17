import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar'; // Import the SearchBar component.

function PhoneFrame({ children }) {
  return (
    <div className="phone-frame">
      <div className="content">{children}</div>
    </div>
  );
}

function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value) => {
    setSearchValue(value);
  };

  const [currentView, setCurrentView] = useState('postList');

  const handleLogoClick = () => {
    setCurrentView('postList');
  };

  const handleProfileClick = () => {
    setCurrentView('profile');
  };
  
  return (
    <PhoneFrame>
      <div className="container">
        <NavBar
          onLogoClick={handleLogoClick}
          onProfileClick={handleProfileClick}
        />
        {/* Use the SearchBar component for search input */}
        <SearchBar value={searchValue} onSearch={handleSearch} />
        {currentView === 'postList' ? (
          <PostList searchValue={searchValue} />
        ) : (
          <Profile />
        )}
      </div>
    </PhoneFrame>
  );
}

export default App;
