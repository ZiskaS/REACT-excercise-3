import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import NavBar from './components/NavBar';
import PostList from './components/PostList';
import Profile from './components/Profile';
import SearchBar from './components/SearchBar'; 
import Login from './components/Login'; 

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
  
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <PhoneFrame>
      <div className="container">
        <NavBar
          onLogoClick={handleLogoClick}
          onProfileClick={handleProfileClick}
        />
        <SearchBar value={searchValue} onSearch={handleSearch} />
        {authenticated ? (
          currentView === 'postList' ? (
            <PostList searchValue={searchValue} />
          ) : (
            <Profile />
          )
        ) : (
          <Login onLogin={() => setAuthenticated(true)} />
        )}
      </div>
    </PhoneFrame>
  );
        }
  export default App;  
