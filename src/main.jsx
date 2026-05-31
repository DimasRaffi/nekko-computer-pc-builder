import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';  
import './index.css';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div classname='container mx-auto px-10'>
      <Navbar />
      <App />
    </div>
  </StrictMode>,
)
