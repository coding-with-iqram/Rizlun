import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Routes from './Routes';
import Header from './components/ui/Header';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import './styles/index.css';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="App min-h-screen bg-background">
            <Header />
            <main className="pt-16 sm:pt-20">
              <Routes />
            </main>
            <Toaster
              position="top-right"
              gutter={8}
              toastOptions={{
                duration: 4000,
                style: {
                  background: 'var(--color-card)',
                  color: 'var(--color-text-primary)',
                  border: '1px solid var(--color-border)',
                  borderRadius: '8px',
                  fontFamily: 'Inter, sans-serif',
                },
                success: {
                  iconTheme: {
                    primary: 'var(--color-success)',
                    secondary: 'var(--color-success-foreground)',
                  },
                },
                error: {
                  iconTheme: {
                    primary: 'var(--color-error)',
                    secondary: 'var(--color-error-foreground)',
                  },
                },
              }}
            />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
