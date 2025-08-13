// Team member card component
import { Linkedin, Twitter, Github, Mail } from 'lucide-react';

const TeamCard = ({ 
  name, 
  role, 
  bio, 
  image, 
  social = {},
  delay = 0 
}) => {
  const socialLinks = [
    { key: 'linkedin', icon: Linkedin, href: social.linkedin },
    { key: 'twitter', icon: Twitter, href: social.twitter },
    { key: 'github', icon: Github, href: social.github },
    { key: 'email', icon: Mail, href: social.email ? `mailto:${social.email}` : null }
  ].filter(link => link.href);

  return (
    <div 
      className="group card-light p-6 text-center animate-fade-in-up overflow-hidden relative"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-sun-500/10 to-transparent" />

      {/* Profile Image */}
      <div className="relative z-10 mb-6">
        <div className="w-24 h-24 mx-auto rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-sun-200 transition-all duration-300">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-2xl font-bold bg-sun-gradient text-white">
              {name?.charAt(0) || 'T'}
            </div>
          )}
        </div>
      </div>

      {/* Team Member Info */}
      <div className="relative z-10 mb-4">
        <h3 className="text-xl font-bold mb-2 transition-colors duration-300 text-gray-900 group-hover:text-sun-500">
          {name}
        </h3>
        
        <p className="text-sm font-medium mb-3 text-sun-500">
          {role}
        </p>
        
        <p className="text-sm leading-relaxed text-gray-600">
          {bio}
        </p>
      </div>

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <div className="relative z-10 flex justify-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.key}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110 bg-gray-100 hover:bg-sun-500 text-gray-600 hover:text-white"
                aria-label={`${name}'s ${social.key}`}
              >
                <IconComponent size={14} />
              </a>
            );
          })}
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-sun-400" />
      
      <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-700 bg-sunOrange-400" />
    </div>
  );
};

export default TeamCard;
