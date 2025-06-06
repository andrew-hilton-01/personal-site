import { useState } from 'react'
import Main from './components/Main';
import Background from './components/Background';
import './App.css'
import Sidebar from './components/Sidebar';

function App() {

return (
  <>
  <Background />
  <div className="parent">
    <Sidebar />
    <Main />
  </div>
  </>
);
}

export default App
