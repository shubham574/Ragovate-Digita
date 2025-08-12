// Reusable Service Card component
import { ArrowRight } from 'lucide-react';
import { useDarkMode } from './DarkModeContext';
const ServiceCard = ({ 
  title, 
  description, 
  features, 
  icon: IconComponent, 
  delay = 0,
  isDetailed = false 
}) => {
  const { isDarkMode } = useDarkMode();

  return (
    <div 
      className={`group ${isDarkMode ? 'card-dark' : 'card-light'} p-6 lg:p-8 animate-fade-in-up`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Service Icon */}
      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${
        isDarkMode 
          ? 'bg-moon-gradient' 
          : 'bg-sun-gradient'
      }`}>
        <IconComponent size={32} className="text-white" />
      </div>

      {/* Service Title */}
      <h3 className={`text-xl lg:text-2xl font-bold mb-4 transition-colors duration-300 ${
        isDarkMode 
          ? 'text-lightText group-hover:text-moonBlue-400' 
          : 'text-gray-900 group-hover:text-sun-500'
      }`}>
        {title}
      </h3>

      {/* Service Description */}
      <p className={`mb-6 leading-relaxed ${
        isDarkMode 
          ? 'text-moon-300' 
          : 'text-gray-600'
      }`}>
        {description}
      </p>

      {/* Service Features */}
      {features && features.length > 0 && (
        <div className="mb-6">
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className={`flex items-start space-x-3 text-sm ${
                  isDarkMode ? 'text-moon-200' : 'text-gray-700'
                }`}
              >
                <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                  isDarkMode ? 'bg-moonBlue-400' : 'bg-sun-500'
                }`} />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Learn More Link */}
      {isDetailed && (
        <div className="flex items-center space-x-2 group/link">
          <span className={`text-sm font-medium transition-colors duration-200 ${
            isDarkMode
              ? 'text-moonBlue-400 group-hover/link:text-moonBlue-300'
              : 'text-sun-500 group-hover/link:text-sunOrange-500'
          }`}>
            Learn More
          </span>
          <ArrowRight 
            size={16} 
            className={`transition-all duration-200 group-hover/link:translate-x-1 ${
              isDarkMode
                ? 'text-moonBlue-400 group-hover/link:text-moonBlue-300'
                : 'text-sun-500 group-hover/link:text-sunOrange-500'
            }`}
          />
        </div>
      )}

      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl ${
        isDarkMode 
          ? 'bg-gradient-to-br from-moonBlue-500/5 to-transparent' 
          : 'bg-gradient-to-br from-sun-500/5 to-transparent'
      }`} />
    </div>
  );
};

export default ServiceCard;