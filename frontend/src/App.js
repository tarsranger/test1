import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SidebarExtended from './components/SidebarExtended';
import Main from './components/Main';

function App() {
  const [showSidebar, setShowSidebar] = React.useState(false)
  return (
    <div className="App">
      <Header setShowSidebar={setShowSidebar} />
      <Sidebar />
      <div className='d-flex'>
        <SidebarExtended showSidebar={showSidebar} />
        <Main />
      </div>
      
    </div>
  );
}

export default App;
