'use client'
import Image from "next/image";
import { useEffect, useState } from "react";
import Head from 'next/head';
import '../styles/globals.css';
import Link from 'next/link';
import { ArrowRight, Code, Smartphone, Palette, CheckCircle, Users, Award, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServiceCard from '../components/ServiceCard';

export default function Home() {

   const statsData = [
    { number: 500, suffix: "+", label: "Projects Completed" },
    { number: 200, suffix: "+", label: "Happy Clients" },
    { number: 50, suffix: "+", label: "Team Members" },
    { number: 100, suffix: "%", label: "Placement Support" }
  ];
    const [counts, setCounts] = useState(statsData.map(() => 0));

    useEffect(() => {
    const duration = 2000; // total animation time in ms
    const frameRate = 30; // updates per second
    const totalFrames = Math.round(duration / (1000 / frameRate));

    statsData.forEach((stat, i) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentValue = Math.round(stat.number * progress);
        setCounts(prev => {
          const updated = [...prev];
          updated[i] = currentValue;
          return updated;
        });
        if (frame === totalFrames) clearInterval(counter);
      }, 1000 / frameRate);
    });
  }, []);


  // Featured services data
  const featuredServices = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      icon: Code,
      features: ['Responsive Design', 'SEO Optimized', 'Fast Performance']
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      icon: Smartphone,
      features: ['Cross-Platform', 'Native Performance', 'App Store Ready']
    },
    {
      title: 'Web Design',
      description: 'Beautiful, user-friendly designs that convert visitors into customers.',
      icon: Palette,
      features: ['UI/UX Design', 'Brand Identity', 'User Research']
    }
  ];

  // Why choose us features
  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Skilled professionals with years of industry experience'
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous testing and quality control processes'
    },
    {
      icon: Clock,
      title: 'Timely Delivery',
      description: 'On-time project completion with regular updates'
    },
    {
      icon: CheckCircle,
      title: '100% Support',
      description: 'Comprehensive support and maintenance services'
    }
  ];

  return (
    <>
      <Head>
        <title>Ragovate Digital - Transform Your Digital Presence</title>
        <meta name="description" content="Leading digital solutions provider offering web development, app development, web design, software testing, and industrial training with 100% placement support." />
        <meta name="keywords" content="web development, app development, web design, software testing, industrial training, digital solutions, Varanasi" />
        <meta name="author" content="Ragovate Digital" />
        <meta property="og:title" content="Ragovate Digital - Transform Your Digital Presence" />
        <meta property="og:description" content="Leading digital solutions provider offering comprehensive technology services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ragovatedigital.com" />
      </Head>

      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-sun-50 via-white to-sunOrange-50">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-sun-400 rounded-full mix-blend-multiply filter blur-xl animate-blob" />
            <div className="absolute top-40 right-10 w-72 h-72 bg-sunOrange-400 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-sun-300 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
          </div>

          <div className="container-custom relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="hero-text mb-6 animate-fade-in-up text-gray-900">
                Transform Your{' '}
                <span className="text-gradient-sun">
                  Digital Presence
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 leading-relaxed animate-fade-in-up text-gray-600" style={{ animationDelay: '200ms' }}>
                We create powerful digital solutions that help businesses thrive in the modern world. 
                From web development to industrial training, we're your complete technology partner.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold border-2 border-sunOrange-500 text-sunOrange-500 hover:bg-sunOrange-500 hover:text-white transition-all duration-300 shadow-md"
                >
                  <span>Get Started Today</span>
                  <ArrowRight size={20} />
                </Link>

                <Link
                  href="/services"
                  className="px-6 py-3 border-2 rounded-lg font-semibold border-sun-500 text-sun-500 hover:bg-sun-500 hover:text-white transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </Link>
              </div>

  
    <div
      className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 animate-fade-in-up"
      style={{ animationDelay: "600ms" }}
    >
      {statsData.map((stat, index) => (
        <div key={index} className="text-center">
          <div className="text-2xl md:text-3xl font-bold mb-2 text-sun-500">
            {counts[index]}
            {stat.suffix}
          </div>
          <div className="text-sm text-gray-600">{stat.label}</div>
        </div>
      ))}
    </div>


            </div>
          </div>
        </section>

        {/* Company Introduction */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                About Ragovate Digital
              </h2>
              <p className="text-lg leading-relaxed mb-8 text-gray-600">
                Since our inception, Ragovate Digital has been at the forefront of digital innovation. 
                We combine technical expertise with creative vision to deliver solutions that not only 
                meet your requirements but exceed your expectations. Our comprehensive approach ensures 
                that every project is a step towards your digital transformation.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center space-x-2 font-medium text-sun-500 hover:text-sunOrange-500 transition-colors duration-200"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Featured Services
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-600">
                Discover our core services that help businesses establish a strong digital presence 
                and achieve sustainable growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  delay={index * 200}
                  isDetailed={false}
                />
              ))}
            </div>

            <div className="text-center">
              <Link
  href="/services"
  className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg text-white font-medium bg-gradient-to-r from-orange-400 to-yellow-400 hover:from-orange-500 hover:to-yellow-500 transition-all duration-300 shadow-md"
>
  <span>View All Services</span>
  <ArrowRight size={20} />
</Link>

            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Why Choose Ragovate Digital?
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-600">
                We're committed to delivering exceptional results through our proven approach 
                and dedicated team of professionals.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="text-center animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-sun-gradient">
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-sun-500 to-sunOrange-500 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Digital Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help transform your business with our digital solutions.
            </p>
            <Link
              href="/contact"
              className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center space-x-2"
            >
              <span>Contact Us Today</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />

      {/* Additional styles for animations */}
      <style jsx global>{`
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>
    </>
  );
}