// 'use client';
// import { useState, useEffect, createContext, useContext } from 'react';

// const DarkModeContext = createContext();

// export const useDarkMode = () => {
//   const context = useContext(DarkModeContext);
//   if (context === undefined) {
//     throw new Error('useDarkMode must be used within a DarkModeProvider');
//   }
//   return context;
// };

// export const DarkModeProvider = ({ children }) => {
//   const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('darkMode');
//     const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
//     const shouldBeDark = savedTheme ? JSON.parse(savedTheme) : prefersDark;
//     setIsDarkMode(shouldBeDark);
//     updateTheme(shouldBeDark);
//     // eslint-disable-next-line
//   }, []);

//   const updateTheme = (dark) => {
//     if (dark) {
//       document.documentElement.classList.add('dark');
//     } else {
//       document.documentElement.classList.remove('dark');
//     }
//     localStorage.setItem('darkMode', JSON.stringify(dark));
//   };

//   const toggleDarkMode = () => {
//     const newMode = !isDarkMode;
//     setIsDarkMode(newMode);
//     updateTheme(newMode);
//   };

//   return (
//     <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
//       {children}
//     </DarkModeContext.Provider>
//   );
// };

// Simplified wrapper for light mode only
'use client';

export const useDarkMode = () => {
  return { isDarkMode: false, toggleDarkMode: () => {} };
};

export const DarkModeProvider = ({ children }) => {
  return <>{children}</>;
};
