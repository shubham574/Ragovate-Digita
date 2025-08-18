// Footer component with company info and social links
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, X } from 'lucide-react';
import { useDarkMode } from '../components/DarkModeContext';
const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: 'https://facebook.com/ragovatedigital' },
    { name: 'X', icon: X, href: 'https://twitter.com/ragovatedigital' },
    { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/company/ragovatedigital' },
    { name: 'Instagram', icon: Instagram, href: 'https://instagram.com/ragovatedigital' }
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/our-team' },
    { name: 'Contact Us', href: '/contact' }
  ];

  const services = [
    'Web Development',
    'App Development',
    'Web Design',
    'Software Testing & QA',
    'Industrial Training'
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white">
      {/* Main Footer Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-sun-gradient rounded-lg flex items-center justify-center font-bold text-lg">
                RD
              </div>
              <span className="text-xl font-bold">Ragovate Digital</span>
            </div>
            
            <p className="text-gray-300 leading-relaxed">
              Empowering businesses with cutting-edge digital solutions. We transform ideas into powerful digital experiences.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Mail size={16} className="text-sun-400" />
                <span>info@ragovatedigital.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <Phone size={16} className="text-sun-400" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-300">
                <MapPin size={16} className="text-sun-400" />
                <span>Varanasi, Uttar Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sun-400">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-sun-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sun-400">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-sun-400">Connect With Us</h3>
            <p className="text-gray-300 text-sm">
              Follow us on social media for updates and insights.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gray-800 hover:bg-sun-500 rounded-lg flex items-center justify-center transition-colors duration-300 group"
                    aria-label={social.name}
                  >
                    <IconComponent size={18} className="text-gray-300 group-hover:text-white" />
                  </a>
                );
              })}
            </div>
            
            {/* Newsletter Signup */}
            
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Ragovate Digital. All rights reserved.
            </p>
            
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-sun-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-sun-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-sun-400 transition-colors duration-200">
                Support
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;