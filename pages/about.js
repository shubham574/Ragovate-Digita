// About Us page with company mission, vision, and story
import Head from 'next/head';
import Link from 'next/link';
import { Target, Eye, Heart, Users, Award, TrendingUp, ArrowRight } from 'lucide-react';
import { useDarkMode } from './_app';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  const { isDarkMode } = useDarkMode();

  // Company values
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly explore new technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage.'
    },
    {
      icon: Heart,
      title: 'Quality',
      description: 'Quality is at the core of everything we do. We maintain rigorous standards and testing processes to ensure exceptional results.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in working closely with our clients as partners, ensuring transparent communication throughout the project lifecycle.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every project, continuously improving our processes and skills to exceed client expectations.'
    }
  ];

  // Company statistics
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '200+', label: 'Happy Clients', icon: Users },
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '5+', label: 'Years Experience', icon: TrendingUp }
  ];

  // Timeline events
  const timeline = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Ragovate Digital was established with a vision to bridge the gap between technology and business success.'
    },
    {
      year: '2020',
      title: 'First Major Milestone',
      description: 'Completed 100+ projects and established ourselves as a reliable technology partner.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ professionals and expanded our service offerings.'
    },
    {
      year: '2022',
      title: 'Training Division Launch',
      description: 'Launched our industrial training division with 100% placement support guarantee.'
    },
    {
      year: '2023',
      title: 'Innovation Hub',
      description: 'Established our innovation hub focusing on emerging technologies and R&D.'
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Received multiple industry awards and recognition for our outstanding services.'
    }
  ];

  return (
    <>
      <Head>
        <title>About Us - Ragovate Digital</title>
        <meta name="description" content="Learn about Ragovate Digital's mission, vision, and journey in providing innovative digital solutions. Discover our story, values, and commitment to excellence." />
        <meta name="keywords" content="about ragovate digital, company story, mission, vision, digital solutions team" />
        <meta property="og:title" content="About Us - Ragovate Digital" />
        <meta property="og:description" content="Discover our journey and commitment to digital excellence" />
      </Head>

      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className={`section-padding ${
          isDarkMode 
            ? 'bg-gradient-to-br from-darkBg via-moon-900 to-darkBg' 
            : 'bg-gradient-to-br from-sun-50 via-white to-sunOrange-50'
        }`}>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up ${
                isDarkMode ? 'text-lightText' : 'text-gray-900'
              }`}>
                About <span className={`${isDarkMode ? 'text-gradient-moon' : 'text-gradient-sun'}`}>Ragovate Digital</span>
              </h1>
              <p className={`text-xl leading-relaxed animate-fade-in-up ${
                isDarkMode ? 'text-moon-200' : 'text-gray-600'
              }`} style={{ animationDelay: '200ms' }}>
                We are a passionate team of digital innovators, committed to transforming businesses 
                through technology. Our journey began with a simple belief: every business deserves 
                access to world-class digital solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Mission */}
              <div className={`p-8 rounded-2xl animate-fade-in-up ${
                isDarkMode ? 'card-dark' : 'card-light'
              }`}>
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  isDarkMode ? 'bg-moon-gradient' : 'bg-sun-gradient'
                }`}>
                  <Target size={32} className="text-white" />
                </div>
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-lightText' : 'text-gray-900'
                }`}>
                  Our Mission
                </h2>
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-moon-200' : 'text-gray-600'
                }`}>
                  To empower businesses of all sizes with innovative digital solutions that drive growth, 
                  enhance efficiency, and create meaningful connections with their customers. We strive to 
                  make cutting-edge technology accessible and affordable for everyone.
                </p>
              </div>

              {/* Vision */}
              <div className={`p-8 rounded-2xl animate-fade-in-up ${
                isDarkMode ? 'card-dark' : 'card-light'
              }`} style={{ animationDelay: '200ms' }}>
                <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 ${
                  isDarkMode ? 'bg-moon-gradient' : 'bg-sun-gradient'
                }`}>
                  <Eye size={32} className="text-white" />
                </div>
                <h2 className={`text-2xl md:text-3xl font-bold mb-4 ${
                  isDarkMode ? 'text-lightText' : 'text-gray-900'
                }`}>
                  Our Vision
                </h2>
                <p className={`text-lg leading-relaxed ${
                  isDarkMode ? 'text-moon-200' : 'text-gray-600'
                }`}>
                  To be the leading digital transformation partner, recognized globally for our 
                  innovation, quality, and commitment to client success. We envision a future where 
                  technology seamlessly integrates with business goals to create extraordinary outcomes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className={`section-padding ${
          isDarkMode ? 'bg-moon-900/50' : 'bg-gray-50'
        }`}>
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
                  isDarkMode ? 'text-lightText' : 'text-gray-900'
                }`}>
                  Our Story
                </h2>
                <p className={`text-lg ${
                  isDarkMode ? 'text-moon-200' : 'text-gray-600'
                }`}>
                  The journey that led us to become a trusted name in digital solutions
                </p>
              </div>

              <div className={`p-8 lg:p-12 rounded-2xl ${
                isDarkMode ? 'card-dark' : 'card-light'
              }`}>
                <div className="space-y-6 text-lg leading-relaxed">
                  <p className={`${isDarkMode ? 'text-moon-200' : 'text-gray-600'}`}>
                    Ragovate Digital was born from a simple observation: many businesses struggle to 
                    leverage technology effectively. Founded in 2019 by a team of passionate developers 
                    and designers, we set out to bridge this gap by providing accessible, high-quality 
                    digital solutions.
                  </p>
                  
                  <p className={`${isDarkMode ? 'text-moon-200' : 'text-gray-600'}`}>
                    What started as a small team of five has grown into a diverse group of 50+ 
                    professionals, each bringing unique expertise and perspectives. Our growth has been 
                    driven not just by our technical capabilities, but by our commitment to understanding 
                    our clients' businesses and delivering solutions that truly make a difference.
                  </p>
                  
                  <p className={`${isDarkMode ? 'text-moon-200' : 'text-gray-600'}`}>
                    Today, we're proud to have completed over 500 projects for clients ranging from 
                    startups to established enterprises. Our industrial training division has successfully 
                    trained and placed hundreds of students, contributing to the growth of the tech 
                    ecosystem in India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-lightText' : 'text-gray-900'
              }`}>
                Our Values
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? 'text-moon-200' : 'text-gray-600'
              }`}>
                The principles that guide every decision we make and every solution we create
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div
                    key={value.title}
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
                    <h3 className={`text-xl font-semibold mb-3 ${
                      isDarkMode ? 'text-lightText' : 'text-gray-900'
                    }`}>
                      {value.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${
                      isDarkMode ? 'text-moon-300' : 'text-gray-600'
                    }`}>
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className={`section-padding ${
          isDarkMode ? 'bg-moon-900/50' : 'bg-gray-50'
        }`}>
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-lightText' : 'text-gray-900'
              }`}>
                Our Impact in Numbers
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={stat.label}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      isDarkMode ? 'bg-moon-gradient' : 'bg-sun-gradient'
                    }`}>
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <div className={`text-3xl md:text-4xl font-bold mb-2 ${
                      isDarkMode ? 'text-moonBlue-400' : 'text-sun-500'
                    }`}>
                      {stat.number}
                    </div>
                    <div className={`text-sm font-medium ${
                      isDarkMode ? 'text-moon-300' : 'text-gray-600'
                    }`}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-lightText' : 'text-gray-900'
              }`}>
                Our Journey
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? 'text-moon-200' : 'text-gray-600'
              }`}>
                Key milestones that have shaped our growth and success
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((event, index) => (
                  <div
                    key={event.year}
                    className={`flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-8 animate-fade-in-up ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center text-lg font-bold ${
                        isDarkMode ? 'bg-moon-gradient text-lightText' : 'bg-sun-gradient text-white'
                      }`}>
                        {event.year}
                      </div>
                    </div>
                    
                    <div className={`flex-1 p-6 rounded-xl ${
                      isDarkMode ? 'card-dark' : 'card-light'
                    }`}>
                      <h3 className={`text-xl font-semibold mb-2 ${
                        isDarkMode ? 'text-lightText' : 'text-gray-900'
                      }`}>
                        {event.title}
                      </h3>
                      <p className={`${
                        isDarkMode ? 'text-moon-300' : 'text-gray-600'
                      }`}>
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`section-padding ${
          isDarkMode 
            ? 'bg-gradient-to-r from-moonBlue-900 to-moon-900' 
            : 'bg-gradient-to-r from-sun-500 to-sunOrange-500'
        } text-white`}>
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Journey With Us?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2">
                <span>Get in Touch</span>
                <ArrowRight size={20} />
              </Link>
              <Link href="/our-team" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300">
                Meet Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}