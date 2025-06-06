import { useState } from 'react'
import { inject } from "@vercel/analytics"
import Main from './components/Main';
import Background from './components/Background';
import './App.css'
import Sidebar from './components/Sidebar';
inject();
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
