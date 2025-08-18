// Terms of Service page for Ragovate Digital
import Head from 'next/head';
import Link from 'next/link';
import { FileText, CheckCircle, AlertCircle, Clock, Shield, Mail, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function TermsOfService() {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      title: "Acceptance of Terms",
      icon: CheckCircle,
      content: [
        "By accessing and using Ragovate Digital services, you agree to be bound by these Terms of Service.",
        "If you disagree with any part of the terms, you may not access our services.",
        "These terms apply to all visitors, users, and others who access or use our services.",
        "We reserve the right to modify these terms at any time without prior notice.",
        "Continued use of our services after changes constitutes acceptance of modified terms."
      ]
    },
    {
      title: "Use of Services",
      icon: Shield,
      content: [
        "You may use our services only for lawful purposes and in accordance with these terms.",
        "You agree not to use our services for any illegal or unauthorized purpose.",
        "You must not transmit any worms, viruses, or any code of a destructive nature.",
        "You are responsible for maintaining the confidentiality of your account information.",
        "We reserve the right to terminate access for violations of these terms."
      ]
    },
    {
      title: "Intellectual Property",
      icon: FileText,
      content: [
        "All content, features, and functionality are owned by Ragovate Digital.",
        "Our trademarks and trade dress may not be used without prior written permission.",
        "You retain ownership of content you submit to our services.",
        "By submitting content, you grant us a license to use, modify, and display it.",
        "We respect intellectual property rights and expect the same from users."
      ]
    },
    {
      title: "Limitation of Liability",
      icon: AlertCircle,
      content: [
        "Our services are provided 'as is' without warranties of any kind.",
        "We shall not be liable for any indirect, incidental, or consequential damages.",
        "Our total liability shall not exceed the amount paid for services in the past 12 months.",
        "We are not responsible for third-party content or services linked to our platform.",
        "Users assume all risks associated with using our services."
      ]
    }
  ];

  const importantPoints = [
    {
      title: "Service Availability",
      description: "We strive to maintain 99.9% uptime but cannot guarantee uninterrupted service.",
      icon: Clock
    },
    {
      title: "Payment Terms",
      description: "Payment is due within 30 days of invoice. Late payments may incur fees.",
      icon: Shield
    },
    {
      title: "Cancellation Policy",
      description: "Services can be cancelled with 30 days written notice. Refunds are subject to our refund policy.",
      icon: AlertCircle
    }
  ];

  return (
    <>
      <Head>
        <title>Terms of Service - Ragovate Digital</title>
        <meta name="description" content="Ragovate Digital Terms of Service - Read our terms and conditions for using our digital services and solutions." />
        <meta name="keywords" content="terms of service, terms and conditions, service agreement, ragovate digital terms" />
      </Head>

      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-sun-50 via-white to-sunOrange-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-sun-gradient">
                <FileText size={40} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up text-gray-900">
                Terms of Service
              </h1>
              <p className="text-xl leading-relaxed animate-fade-in-up text-gray-600" style={{ animationDelay: '200ms' }}>
                Please read these terms carefully before using our services.
              </p>
              <div className="mt-4 text-sm text-gray-500">
                Last updated: {lastUpdated}
              </div>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="p-8 rounded-2xl card-light">
                <h2 className="text-2xl font-bold mb-4 text-gray-900">Introduction</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Welcome to Ragovate Digital. These Terms of Service ("Terms") govern your access to and use of our website, 
                  products, and services ("Services"). By accessing or using our Services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  These Terms constitute a legally binding agreement between you and Ragovate Digital. Please read them carefully.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Important Points */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">Important Terms</h2>
                <p className="text-lg text-gray-600">Key points to understand before using our services</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {importantPoints.map((point, index) => {
                  const IconComponent = point.icon;
                  return (
                    <div key={point.title} className="p-6 rounded-xl card-light text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-sun-gradient">
                        <IconComponent size={32} className="text-white" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-gray-900">{point.title}</h3>
                      <p className="text-sm text-gray-600">{point.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Terms Sections */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-8">
              {sections.map((section, index) => {
                const IconComponent = section.icon;
                return (
                  <div key={section.title} className="p-8 rounded-2xl card-light">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-sun-gradient mr-4">
                        <IconComponent size={24} className="text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <span className="w-2 h-2 rounded-full bg-sun-500 mt-2 mr-3 flex-shrink-0"></span>
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Additional Legal Sections */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Governing Law */}
              <div className="p-8 rounded-2xl card-light">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Governing Law</h3>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be governed and construed in accordance with the laws of India, 
                  without regard to its conflict of law provisions. Any disputes arising from these 
                  terms shall be subject to the exclusive jurisdiction of the courts in Varanasi, Uttar Pradesh.
                </p>
              </div>

              {/* Changes to Terms */}
              <div className="p-8 rounded-2xl card-light">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Changes to Terms</h3>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective 
                  immediately upon posting on our website. Your continued use of our services after 
                  changes constitutes acceptance of the modified terms.
                </p>
              </div>

              {/* Contact Information */}
              <div className="p-8 rounded-2xl card-light">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact Information</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  For questions about these terms, please contact:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-sun-500" />
                    <span className="text-gray-600">legal@ragovatedigital.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield size={20} className="text-sun-500" />
                    <span className="text-gray-600">Varanasi, Uttar Pradesh, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-sun-500 to-sunOrange-500 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Have questions about our terms? We're here to help.
            </p>
            <Link href="/contact" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center space-x-2">
              <span>Get in Touch</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
