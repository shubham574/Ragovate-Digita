// Services page with detailed service information
import Head from 'next/head';
import Link from 'next/link';
import { Code, Smartphone, Palette, Bug, GraduationCap, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceCard from '../../components/ServiceCard';

export default function Services() {
  // Comprehensive services data
  const services = [
    {
      title: 'Web Development',
      description: 'Build powerful, scalable web applications using cutting-edge technologies. From simple websites to complex enterprise solutions, we deliver high-performance web experiences.',
      icon: Code,
      features: [
        'Custom Website Development',
        'E-commerce Solutions',
        'Progressive Web Apps (PWA)',
        'API Development & Integration',
        'Database Design & Optimization',
        'Content Management Systems',
        'Responsive Design Implementation',
        'Performance Optimization'
      ]
    },
    {
      title: 'App Development',
      description: 'Create engaging mobile applications for iOS and Android platforms. We develop native and cross-platform apps that provide seamless user experiences.',
      icon: Smartphone,
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'React Native Solutions',
        'Flutter Applications',
        'App Store Optimization',
        'Push Notifications',
        'In-App Purchases',
        'Backend Integration'
      ]
    },
    {
      title: 'Web Design',
      description: 'Design beautiful, user-centric interfaces that convert visitors into customers. Our designs focus on usability, accessibility, and brand consistency.',
      icon: Palette,
      features: [
        'UI/UX Design',
        'Brand Identity Design',
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design Systems',
        'Accessibility Design',
        'Mobile-First Design',
        'Design Testing & Iteration'
      ]
    },
    {
      title: 'Software Testing & QA',
      description: 'Ensure your applications are bug-free and perform optimally with our comprehensive testing services. We use automated and manual testing approaches.',
      icon: Bug,
      features: [
        'Manual Testing',
        'Automated Testing',
        'Performance Testing',
        'Security Testing',
        'API Testing',
        'Cross-Browser Testing',
        'Mobile App Testing',
        'Load & Stress Testing'
      ]
    },
    {
      title: 'Industrial Training',
      description: 'Comprehensive training programs designed to bridge the gap between academic knowledge and industry requirements. We provide 100% placement support.',
      icon: GraduationCap,
      features: [
        'Full-Stack Development Training',
        'Mobile App Development Course',
        'UI/UX Design Training',
        'Software Testing Certification',
        'Industry Expert Mentorship',
        '100% Placement Support',
        'Real Project Experience',
        'Continuous Skill Assessment'
      ]
    }
  ];

  // Process steps
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project roadmap.'
    },
    {
      step: '02',
      title: 'Design & Development',
      description: 'Our team creates intuitive designs and develops robust solutions.'
    },
    {
      step: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution is bug-free and optimized.'
    },
    {
      step: '04',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing support and maintenance.'
    }
  ];

  return (
    <>
      <Head>
        <title>Our Services - Ragovate Digital</title>
        <meta name="description" content="Comprehensive digital services including web development, app development, web design, software testing, and industrial training with 100% placement support." />
        <meta name="keywords" content="web development services, app development, web design, software testing, QA services, industrial training, placement support" />
        <meta property="og:title" content="Our Services - Ragovate Digital" />
        <meta property="og:description" content="Comprehensive digital services to transform your business" />
      </Head>

      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-sun-50 via-white to-sunOrange-50">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up text-gray-900">
              Our <span className="text-gradient-sun">Services</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-8 animate-fade-in-up text-gray-600" style={{ animationDelay: '200ms' }}>
              We offer comprehensive digital solutions to help your business thrive in the digital age. 
              From concept to deployment, we're your trusted technology partner.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  delay={index * 150}
                  isDetailed={true}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Process */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Our Development Process
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-600">
                We follow a structured approach to ensure every project is delivered 
                on time, within budget, and exceeds expectations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold bg-sun-gradient text-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Technologies We Use
              </h2>
              <p className="text-lg max-w-2xl mx-auto text-gray-600">
                We work with the latest technologies and frameworks to deliver 
                cutting-edge solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {[
                'React', 'Next.js', 'Node.js', 'Python', 'MongoDB', 'PostgreSQL',
                'React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'AWS',
                'Figma', 'Adobe XD', 'Sketch', 'Photoshop', 'Illustrator', 'InVision'
              ].map((tech, index) => (
                <div
                  key={tech}
                  className="p-4 rounded-lg text-center transition-all duration-300 hover:scale-105 animate-fade-in-up card-light hover:bg-sun-50"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="font-medium text-gray-900">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-sun-500 to-sunOrange-500 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a solution 
              that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center justify-center space-x-2">
                <span>Start Your Project</span>
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
