// Our Team page with team member profiles
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Users, Award, Code, Palette, Shield, GraduationCap } from 'lucide-react';
import { useDarkMode } from './_app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TeamCard from '../components/TeamCard';

export default function OurTeam() {
  const { isDarkMode } = useDarkMode();

  // Team members data
  const teamMembers = [
    {
      name: 'Rajesh Kumar',
      role: 'Founder & CEO',
      bio: 'Visionary leader with 10+ years in digital transformation. Passionate about building innovative solutions that drive business growth.',
      image: '/images/team/rajesh-kumar.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/rajeshkumar',
        twitter: 'https://twitter.com/rajeshkumar',
        email: 'rajesh@ragovatedigital.com'
      }
    },
    {
      name: 'Priya Sharma',
      role: 'CTO & Co-Founder',
      bio: 'Full-stack architect with expertise in scalable web applications. Leads our technical vision and development practices.',
      image: '/images/team/priya-sharma.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/priyasharma',
        github: 'https://github.com/priyasharma',
        email: 'priya@ragovatedigital.com'
      }
    },
    {
      name: 'Amit Singh',
      role: 'Lead Developer',
      bio: 'Expert in React, Node.js, and cloud technologies. Mentors junior developers and drives code quality initiatives.',
      image: '/images/team/amit-singh.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/amitsingh',
        github: 'https://github.com/amitsingh',
        twitter: 'https://twitter.com/amitsingh'
      }
    },
    {
      name: 'Sneha Patel',
      role: 'UI/UX Design Lead',
      bio: 'Creative designer focused on user-centered design. Creates intuitive interfaces that enhance user experiences.',
      image: '/images/team/sneha-patel.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/snehapatel',
        twitter: 'https://twitter.com/snehapatel',
        email: 'sneha@ragovatedigital.com'
      }
    },
    {
      name: 'Vikash Gupta',
      role: 'Mobile App Developer',
      bio: 'Specialized in React Native and Flutter development. Built 50+ mobile applications for various industries.',
      image: '/images/team/vikash-gupta.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/vikashgupta',
        github: 'https://github.com/vikashgupta'
      }
    },
    {
      name: 'Kavya Reddy',
      role: 'QA Manager',
      bio: 'Quality assurance expert ensuring bug-free deliveries. Implements automated testing frameworks and best practices.',
      image: '/images/team/kavya-reddy.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/kavyareddy',
        email: 'kavya@ragovatedigital.com'
      }
    },
    {
      name: 'Rohit Verma',
      role: 'DevOps Engineer',
      bio: 'Cloud infrastructure specialist managing CI/CD pipelines. Ensures scalable and secure deployment processes.',
      image: '/images/team/rohit-verma.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/rohitverma',
        github: 'https://github.com/rohitverma'
      }
    },
    {
      name: 'Anita Joshi',
      role: 'Training Director',
      bio: 'Industry training expert with 8+ years experience. Leads our placement program with 100% success rate.',
      image: '/images/team/anita-joshi.jpg',
      social: {
        linkedin: 'https://linkedin.com/in/anitajoshi',
        email: 'anita@ragovatedigital.com'
      }
    }
  ];

  // Departments
  const departments = [
    {
      icon: Code,
      name: 'Development Team',
      description: 'Expert developers building robust and scalable solutions',
      count: '25+ Members'
    },
    {
      icon: Palette,
      name: 'Design Team',
      description: 'Creative designers crafting beautiful user experiences',
      count: '8+ Members'
    },
    {
      icon: Shield,
      name: 'QA Team',
      description: 'Quality assurance specialists ensuring perfect deliveries',
      count: '6+ Members'
    },
    {
      icon: GraduationCap,
      name: 'Training Team',
      description: 'Industry experts providing comprehensive skill development',
      count: '10+ Members'
    }
  ];

  // Company culture highlights
  const cultureHighlights = [
    'Remote-first work culture',
    'Continuous learning & development',
    'Innovation time (20% for personal projects)',
    'Flexible working hours',
    'Health & wellness benefits',
    'Team building activities',
    'Open communication',
    'Performance-based growth'
  ];

  return (
    <>
      <Head>
        <title>Our Team - Ragovate Digital</title>
        <meta name="description" content="Meet the talented team behind Ragovate Digital. Our expert developers, designers, and trainers are passionate about delivering exceptional digital solutions." />
        <meta name="keywords" content="ragovate digital team, developers, designers, QA experts, training specialists, company culture" />
        <meta property="og:title" content="Our Team - Ragovate Digital" />
        <meta property="og:description" content="Meet our talented team of digital experts" />
      </Head>

      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className={`section-padding ${
          isDarkMode 
            ? 'bg-gradient-to-br from-darkBg via-moon-900 to-darkBg' 
            : 'bg-gradient-to-br from-sun-50 via-white to-sunOrange-50'
        }`}>
          <div className="container-custom text-center">
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up ${
              isDarkMode ? 'text-lightText' : 'text-gray-900'
            }`}>
              Meet Our <span className={`${isDarkMode ? 'text-gradient-moon' : 'text-gradient-sun'}`}>Amazing Team</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up ${
              isDarkMode ? 'text-moon-200' : 'text-gray-600'
            }`} style={{ animationDelay: '200ms' }}>
              Behind every great project is a great team. Meet the passionate individuals who bring 
              our vision to life and make your digital dreams a reality.
            </p>
            
            {/* Team Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
              {[
                { number: '50+', label: 'Team Members' },
                { number: '10+', label: 'Departments' },
                { number: '5+', label: 'Years Experience' },
                { number: '100%', label: 'Dedication' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-2xl md:text-3xl font-bold mb-2 ${
                    isDarkMode ? 'text-moonBlue-400' : 'text-sun-500'
                  }`}>
                    {stat.number}
                  </div>
                  <div className={`text-sm ${
                    isDarkMode ? 'text-moon-300' : 'text-gray-600'
                  }`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-lightText' : 'text-gray-900'
              }`}>
                Leadership Team
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? 'text-moon-200' : 'text-gray-600'
              }`}>
                The visionaries leading our company towards digital excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {teamMembers.slice(0, 4).map((member, index) => (
                <TeamCard
                  key={member.name}
                  {...member}
                  delay={index * 200}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className={`section-padding ${
          isDarkMode ? 'bg-moon-900/50' : 'bg-gray-50'
        }`}>
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-lightText' : 'text-gray-900'
              }`}>
                Our Departments
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? 'text-moon-200' : 'text-gray-600'
              }`}>
                Specialized teams working together to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {departments.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <div
                    key={dept.name}
                    className={`p-6 rounded-xl text-center animate-fade-in-up ${
                      isDarkMode ? 'card-dark' : 'card-light'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      isDarkMode ? 'bg-moon-gradient' : 'bg-sun-gradient'
                    }`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className={`text-xl font-semibold mb-2 ${
                      isDarkMode ? 'text-lightText' : 'text-gray-900'
                    }`}>
                      {dept.name}
                    </h3>
                    <p className={`text-sm mb-3 ${
                      isDarkMode ? 'text-moon-300' : 'text-gray-600'
                    }`}>
                      {dept.description}
                    </p>
                    <span className={`text-sm font-medium ${
                      isDarkMode ? 'text-moonBlue-400' : 'text-sun-500'
                    }`}>
                      {dept.count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Full Team Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-lightText' : 'text-gray-900'
              }`}>
                Core Team Members
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? 'text-moon-200' : 'text-gray-600'
              }`}>
                Get to know the dedicated professionals who make the magic happen
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.slice(4).map((member, index) => (
                <TeamCard
                  key={member.name}
                  {...member}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className={`section-padding ${
          isDarkMode ? 'bg-moon-900/50' : 'bg-gray-50'
        }`}>
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-lightText' : 'text-gray-900'
              }`}>
                Our Culture & Values
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? 'text-moon-200' : 'text-gray-600'
              }`}>
                We believe in creating an environment where everyone can thrive and do their best work
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cultureHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className={`flex items-center space-x-3 p-4 rounded-lg animate-fade-in-up ${
                      isDarkMode ? 'bg-moon-800/50' : 'bg-white/50'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                      isDarkMode ? 'bg-moonBlue-400' : 'bg-sun-500'
                    }`} />
                    <span className={`${
                      isDarkMode ? 'text-moon-200' : 'text-gray-700'
                    }`}>
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className={`section-padding ${
          isDarkMode 
            ? 'bg-gradient-to-r from-moonBlue-900 to-moon-900' 
            : 'bg-gradient-to-r from-sun-500 to-sunOrange-500'
        } text-white`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for 
              innovation and excellence. Be part of our growing family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2">
                <span>View Open Positions</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/contact" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Send Your Resume
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}