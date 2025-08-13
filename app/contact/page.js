'use client';
// Contact Us page with enquiry form
import { useState } from 'react';
import Head from 'next/head';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useDarkMode } from '../../components/DarkModeContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function Contact() {
  const { isDarkMode } = useDarkMode();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone.replace(/\s+/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('Thank you! Your enquiry has been submitted successfully.');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        toast.error(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Contact information
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      details: 'info@ragovatedigital.com',
      description: 'Send us your queries anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: '+91 98765 43210',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: 'Varanasi, Uttar Pradesh, India',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: 'Mon-Fri: 9:00 AM - 6:00 PM',
      description: 'Ready to help during business hours'
    }
  ];

  // FAQ items
  const faqs = [
    {
      question: 'How long does a typical project take?',
      answer: 'Project timelines vary based on complexity, but most projects are completed within 4-12 weeks.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we offer comprehensive support and maintenance packages for all our projects.'
    },
    {
      question: 'What technologies do you work with?',
      answer: 'We work with modern technologies including React, Node.js, React Native, Flutter, and more.'
    },
    {
      question: 'Do you offer training programs?',
      answer: 'Yes, we provide industrial training with 100% placement support in various technology domains.'
    }
  ];

  return (
    <>
      <Head>
        <title>Contact Us - Ragovate Digital</title>
        <meta name="description" content="Get in touch with Ragovate Digital for your digital solution needs. Contact us for web development, app development, design, testing, and training services." />
        <meta name="keywords" content="contact ragovate digital, web development inquiry, app development quote, digital solutions contact" />
        <meta property="og:title" content="Contact Us - Ragovate Digital" />
        <meta property="og:description" content="Get in touch for your digital solution needs" />
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
              Get in <span className={`${isDarkMode ? 'text-gradient-moon' : 'text-gradient-sun'}`}>Touch</span>
            </h1>
            <p className={`text-xl max-w-3xl mx-auto animate-fade-in-up ${
              isDarkMode ? 'text-moon-200' : 'text-gray-600'
            }`} style={{ animationDelay: '200ms' }}>
              Ready to transform your digital presence? We're here to help you every step of the way. 
              Let's discuss your project and create something amazing together.
            </p>
          </div>
        </section>

        {/* Contact Information */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={info.title}
                    className={`text-center p-6 rounded-xl animate-fade-in-up ${
                      isDarkMode ? 'card-dark' : 'card-light'
                    }`}
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${
                      isDarkMode ? 'bg-moon-gradient' : 'bg-sun-gradient'
                    }`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${
                      isDarkMode ? 'text-lightText' : 'text-gray-900'
                    }`}>
                      {info.title}
                    </h3>
                    <p className={`font-medium mb-1 ${
                      isDarkMode ? 'text-moonBlue-400' : 'text-sun-500'
                    }`}>
                      {info.details}
                    </p>
                    <p className={`text-sm ${
                      isDarkMode ? 'text-moon-300' : 'text-gray-600'
                    }`}>
                      {info.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form & Map Section */}
        <section className={`section-padding ${
          isDarkMode ? 'bg-moon-900/50' : 'bg-gray-50'
        }`}>
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Contact Form */}
              <div className={`p-8 rounded-2xl animate-fade-in-up ${
                isDarkMode ? 'card-dark' : 'card-light'
              }`}>
                <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${
                  isDarkMode ? 'text-lightText' : 'text-gray-900'
                }`}>
                  Send us a Message
                </h2>
                <p className={`mb-8 ${
                  isDarkMode ? 'text-moon-200' : 'text-gray-600'
                }`}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-lightText' : 'text-gray-900'
                    }`}>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form-input ${errors.name ? 'border-red-500' : ''}`}
                      placeholder="Enter your full name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-lightText' : 'text-gray-900'
                    }`}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-lightText' : 'text-gray-900'
                    }`}>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                      placeholder="Enter your phone number"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium mb-2 ${
                      isDarkMode ? 'text-lightText' : 'text-gray-900'
                    }`}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`form-input resize-none ${errors.message ? 'border-red-500' : ''}`}
                      placeholder="Tell us about your project or inquiry..."
                    />
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full ${
                      isDarkMode ? 'btn-primary-dark' : 'btn-primary'
                    } disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Company Info & Map */}
              <div className="space-y-8">
                {/* Company Details */}
                <div className={`p-8 rounded-2xl animate-fade-in-up ${
                  isDarkMode ? 'card-dark' : 'card-light'
                }`} style={{ animationDelay: '200ms' }}>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDarkMode ? 'text-lightText' : 'text-gray-900'
                  }`}>
                    Why Choose Ragovate Digital?
                  </h3>
                  <div className="space-y-4">
                    {[
                      'Expert team with 5+ years experience',
                      '500+ successful projects delivered',
                      '100% client satisfaction guarantee',
                      '24/7 support and maintenance',
                      'Competitive pricing and flexible plans',
                      'On-time delivery commitment'
                    ].map((point, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <CheckCircle size={16} className={`mt-1 flex-shrink-0 ${
                          isDarkMode ? 'text-moonBlue-400' : 'text-sun-500'
                        }`} />
                        <span className={`text-sm ${
                          isDarkMode ? 'text-moon-200' : 'text-gray-600'
                        }`}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Office Map Placeholder */}
                <div className={`p-8 rounded-2xl animate-fade-in-up ${
                  isDarkMode ? 'card-dark' : 'card-light'
                }`} style={{ animationDelay: '400ms' }}>
                  <h3 className={`text-xl font-bold mb-4 ${
                    isDarkMode ? 'text-lightText' : 'text-gray-900'
                  }`}>
                    Visit Our Office
                  </h3>
                  <div className={`w-full h-48 rounded-lg flex items-center justify-center ${
                    isDarkMode ? 'bg-moon-800' : 'bg-gray-200'
                  }`}>
                    <div className="text-center">
                      <MapPin size={32} className={`mx-auto mb-2 ${
                        isDarkMode ? 'text-moonBlue-400' : 'text-sun-500'
                      }`} />
                      <p className={`text-sm ${
                        isDarkMode ? 'text-moon-300' : 'text-gray-600'
                      }`}>
                        Interactive Map Coming Soon
                      </p>
                      <p className={`text-xs mt-1 ${
                        isDarkMode ? 'text-moon-400' : 'text-gray-500'
                      }`}>
                        Varanasi, Uttar Pradesh, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${
                isDarkMode ? 'text-lightText' : 'text-gray-900'
              }`}>
                Frequently Asked Questions
              </h2>
              <p className={`text-lg max-w-2xl mx-auto ${
                isDarkMode ? 'text-moon-200' : 'text-gray-600'
              }`}>
                Find answers to common questions about our services and process
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl animate-fade-in-up ${
                    isDarkMode ? 'card-dark' : 'card-light'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <h3 className={`text-lg font-semibold mb-3 ${
                    isDarkMode ? 'text-lightText' : 'text-gray-900'
                  }`}>
                    {faq.question}
                  </h3>
                  <p className={`${
                    isDarkMode ? 'text-moon-200' : 'text-gray-600'
                  }`}>
                    {faq.answer}
                  </p>
                </div>
              ))}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Don't wait to transform your digital presence. Get in touch today 
              and let's bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('name').focus()}
                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Fill Contact Form
              </button>
              <a
                href="tel:+919876543210"
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded-lg transition-colors duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}