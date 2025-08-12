'use client';
// Main App component with dark mode context and global styles
import '../styles/globals.css';
import { useState, useEffect, createContext, useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import Head from 'next/head';

// Dark Mode Context
const DarkModeContext = createContext();

export const useDarkMode = () => {
  const context = useContext(DarkModeContext);
  if (context === undefined) {
    throw new Error('useDarkMode must be used within a DarkModeProvider');
  }
  return context;
};

// Dark Mode Provider Component
export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize dark mode from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldBeDark = savedTheme ? JSON.parse(savedTheme) : prefersDark;
    
    setIsDarkMode(shouldBeDark);
    updateTheme(shouldBeDark);
  }, []);

  // Update theme in DOM and localStorage
  const updateTheme = (dark) => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(dark));
  };

  // Toggle dark mode function
  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    updateTheme(newMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

// Main App Component
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <DarkModeProvider>
        <div className="min-h-screen bg-white dark:bg-darkBg transition-colors duration-300">
          <Component {...pageProps} />
          
          {/* Toast notifications */}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: 'var(--toast-bg)',
                color: 'var(--toast-color)',
                border: '1px solid var(--toast-border)',
              },
              success: {
                iconTheme: {
                  primary: '#10B981',
                  secondary: '#FFFFFF',
                },
              },
              error: {
                iconTheme: {
                  primary: '#EF4444',
                  secondary: '#FFFFFF',
                },
              },
            }}
          />
          
          {/* CSS Variables for toast styling */}
          <style jsx global>{`
            :root {
              --toast-bg: #FFFFFF;
              --toast-color: #111827;
              --toast-border: #E5E7EB;
            }
            
            .dark {
              --toast-bg: #374151;
              --toast-color: #F3F4F6;
              --toast-border: #4B5563;
            }
          `}</style>
        </div>
      </DarkModeProvider>
    </>
  );
}