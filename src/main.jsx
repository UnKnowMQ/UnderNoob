
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import PortContextProvider from './context/Portcontext.jsx'; // Corrected the name here

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <PortContextProvider> 
        <App />
      </PortContextProvider>
    </BrowserRouter>
);
