// Dark mode toggle component with sun/moon icons - COMMENTED OUT FOR LIGHT MODE ONLY
// import { Sun, Moon } from 'lucide-react';
// import { useDarkMode } from './DarkModeContext'; 
// const DarkModeToggle = () => {
//   const { isDarkMode, toggleDarkMode } = useDarkMode();

//   return (
//     <button
//       onClick={toggleDarkMode}
//       className="relative p-2 rounded-lg bg-gray-100 dark:bg-moon-700 hover:bg-gray-200 dark:hover:bg-moon-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sun-500 dark:focus:ring-moonBlue-500 group"
//       aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
//     >
//       <div className="relative w-6 h-6">
//         {/* Sun Icon */}
//         <Sun 
//           size={24} 
//           className={`absolute inset-0 text-sun-500 transition-all duration-300 ${
//             isDarkMode 
//               ? 'opacity-0 rotate-90 scale-0' 
//               : 'opacity-100 rotate-0 scale-100'
//           }`}
//         />
        
//         {/* Moon Icon */}
//         <Moon 
//           size={24} 
//           className={`absolute inset-0 text-moonBlue-400 transition-all duration-300 ${
//             isDarkMode 
//               ? 'opacity-100 rotate-0 scale-100' 
//               : 'opacity-0 -rotate-90 scale-0'
//           }`}
//         />
//       </div>

//       {/* Hover effect */}
//       <div className={`absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
//         isDarkMode 
//           ? 'bg-moonBlue-500/20' 
//           : 'bg-sun-500/20'
//       }`} />
//     </button>
//   );
// };

// export default DarkModeToggle;

// Empty component for light mode only
const DarkModeToggle = () => {
  return null;
};

export default DarkModeToggle;
