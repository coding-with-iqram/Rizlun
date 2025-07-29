import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/ui/Header';
import { CartProvider } from './contexts/CartContext';
import './styles/index.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="pt-14 sm:pt-16">
            <Routes />
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
