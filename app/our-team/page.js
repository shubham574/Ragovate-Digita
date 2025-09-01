"use client"

// Our Team page with team member profiles

import Head from 'next/head';
import Link from 'next/link';
import {
  ArrowRight,
  Code,
  Palette,
  Shield,
  GraduationCap
} from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import TeamCard from '../../components/TeamCard';
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function OurTeam() {
  // ✅ Stats Data
  const statsData = [
    { number: 50, suffix: "+", label: "Team Members" },
    { number: 10, suffix: "+", label: "Departments" },
    { number: 5, suffix: "+", label: "Years Experience" },
    { number: 100, suffix: "%", label: "Dedication" },
  ];

  // ✅ Team members data
  const teamMembers = [
    {
      name: 'Gaurav Kumar',
      role: 'Chairman',
      bio: 'Gaurav drives the strategic direction of our service offerings. ',
      image: '/images/Image1.jpg',
    },
    {
      name: 'Sunita Devi',
      role: 'Founder',
      bio: 'Sunita ensures social relations and seamless communication',
      image: '/images/image3.png',
    },
    {
      name: 'Priya Kushwaha',
      role: 'Business Development Manager',
      bio: 'Aline is the mastermind behind our tailored business solutions. ',
      image: '/images/image2.jpg',
    },
    {
      name: 'Manish Chaurasiya',
      role: 'CEO',
      bio: 'Manish is a visionary CEO, leading the company with innovation, strategic growth, and a people-first approach.',
      image: '/images/team/sneha-patel.jpg',
    },
    {
      name: 'Manish Chaurasiya',
      role: 'Mobile App Developer',
      bio: 'Specialized in React Native and Flutter development. Built 50+ mobile applications for various industries.',
      image: '/images/team/vikash-gupta.jpg',
    },
    
  ];

  // ✅ Departments
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

  // ✅ Company culture highlights
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

  // ✅ Count-up animation state
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    if (inView) {
      statsData.forEach((stat, i) => {
        let start = 0;
        const end = stat.number;
        const duration = 2000; // 2 seconds
        const stepTime = Math.max(Math.floor(duration / end), 20);

        const timer = setInterval(() => {
          start += 1;
          setCounts((prev) => {
            const newCounts = [...prev];
            newCounts[i] = start;
            return newCounts;
          });
          if (start === end) clearInterval(timer);
        }, stepTime);
      });
    }
  }, [inView]);

  return (
    <>
      <Head>
        <title>Our Team - Ragovate Digital</title>
        <meta
          name="description"
          content="Meet the talented team behind Ragovate Digital. Our expert developers, designers, and trainers are passionate about delivering exceptional digital solutions."
        />
        <meta
          name="keywords"
          content="ragovate digital team, developers, designers, QA experts, training specialists, company culture"
        />
        <meta property="og:title" content="Our Team - Ragovate Digital" />
        <meta property="og:description" content="Meet our talented team of digital experts" />
      </Head>

      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-sun-50 via-white to-sunOrange-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up text-gray-900">
              Meet Our <span className="text-gradient-sun">Amazing Team</span>
            </h1>
            <p
              className="text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up text-gray-600"
              style={{ animationDelay: '200ms' }}
            >
              Behind every great project is a great team. Meet the passionate individuals who bring
              our vision to life and make your digital dreams a reality.
            </p>

            {/* ✅ Team Stats */}
            <div
              ref={ref}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 animate-fade-in-up"
              style={{ animationDelay: "400ms" }}
            >
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <motion.div
                    className="text-2xl md:text-3xl font-bold mb-2 text-sun-500"
                  >
                    {counts[index]}
                    {stat.suffix}
                  </motion.div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Leadership Team
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-600">
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
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Departments
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-600">
                Specialized teams working together to deliver exceptional results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {departments.map((dept, index) => {
                const IconComponent = dept.icon;
                return (
                  <div
                    key={dept.name}
                    className="p-6 rounded-xl text-center animate-fade-in-up card-light"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-sun-gradient">
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">
                      {dept.name}
                    </h3>
                    <p className="text-sm mb-3 text-gray-600">
                      {dept.description}
                    </p>
                    <span className="text-sm font-medium text-sun-500">
                      {dept.count}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Culture & Values
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-600">
                We believe in creating an environment where everyone can thrive and do their best work
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cultureHighlights.map((highlight, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-lg animate-fade-in-up bg-white/50"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="w-2 h-2 rounded-full flex-shrink-0 bg-sun-500" />
                    <span className="text-gray-700">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="section-padding bg-gradient-to-r from-sun-500 to-sunOrange-500 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for
              innovation and excellence. Be part of our growing family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2"
              >
                <span>View Open Positions</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
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
