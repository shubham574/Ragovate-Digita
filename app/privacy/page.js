// Privacy Policy page for Ragovate Digital
import Head from 'next/head';
import Link from 'next/link';
import { Shield, Eye, Lock, Mail, Calendar, ArrowRight } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function PrivacyPolicy() {
  const lastUpdated = "January 1, 2024";

  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Business information (company name, website, industry)",
        "Technical data (IP address, browser type, device information)",
        "Usage data (pages visited, time spent, features used)",
        "Communication data (messages, feedback, support requests)"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Shield,
      content: [
        "To provide and maintain our services",
        "To improve and personalize user experience",
        "To communicate with you about services and updates",
        "To process payments and send invoices",
        "To comply with legal obligations",
        "To detect and prevent fraud or security issues"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "SSL encryption for all data transmission",
        "Regular security audits and updates",
        "Access controls and authentication protocols",
        "Secure cloud infrastructure with backup systems",
        "Employee training on data protection practices"
      ]
    }
  ];

  return (
    <>
      <Head>
        <title>Privacy Policy - Ragovate Digital</title>
        <meta name="description" content="Ragovate Digital Privacy Policy - Learn how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, personal information, ragovate digital privacy" />
      </Head>

      <Navbar />

      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section className="section-padding bg-gradient-to-br from-sun-50 via-white to-sunOrange-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center bg-sun-gradient">
                <Shield size={40} className="text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up text-gray-900">
                Privacy Policy
              </h1>
              <p className="text-xl leading-relaxed animate-fade-in-up text-gray-600" style={{ animationDelay: '200ms' }}>
                Your privacy matters to us. Learn how we protect and respect your personal information.
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
                  At Ragovate Digital ("we," "our," or "us"), we respect your privacy and are committed to protecting your personal data. 
                  This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
                  or use our services.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  By using our services, you agree to the collection and use of information in accordance with this privacy policy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Policy Sections */}
        <section className="section-padding bg-gray-50">
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

        {/* Additional Sections */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto space-y-8">
              {/* Data Retention */}
              <div className="p-8 rounded-2xl card-light">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Data Retention</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We retain your personal information only for as long as necessary to fulfill the purposes 
                  outlined in this privacy policy, unless a longer retention period is required by law.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Client data: Retained for 7 years after project completion</li>
                  <li>• Marketing data: Retained until you unsubscribe or request deletion</li>
                  <li>• Analytics data: Retained for 26 months</li>
                </ul>
              </div>

              {/* Third-Party Services */}
              <div className="p-8 rounded-2xl card-light">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Third-Party Services</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We may use third-party services for analytics, payment processing, and communication. 
                  These services have their own privacy policies, and we encourage you to review them.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Analytics:</strong> Google Analytics, Microsoft Clarity
                  </div>
                  <div>
                    <strong>Communication:</strong> Email service providers
                  </div>
                  <div>
                    <strong>Payments:</strong> Secure payment gateways
                  </div>
                  <div>
                    <strong>Hosting:</strong> Cloud service providers
                  </div>
                </div>
              </div>

              {/* Your Rights */}
              <div className="p-8 rounded-2xl card-light">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Your Rights</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Access your personal data</li>
                  <li>• Correct inaccurate data</li>
                  <li>• Request deletion of your data</li>
                  <li>• Object to data processing</li>
                  <li>• Data portability</li>
                  <li>• Withdraw consent at any time</li>
                </ul>
              </div>

              {/* Contact for Privacy */}
              <div className="p-8 rounded-2xl card-light">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Contact Us</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  If you have questions about this privacy policy or your personal data, please contact us:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center space-x-3">
                    <Mail size={20} className="text-sun-500" />
                    <span className="text-gray-600">privacy@ragovatedigital.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar size={20} className="text-sun-500" />
                    <span className="text-gray-600">Response within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-gradient-to-r from-sun-500 to-sunOrange-500 text-white">
          <div className="container-custom text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-xl mb-8 opacity-90">
              We're here to help. Contact us for any privacy-related concerns.
            </p>
            <Link href="/contact" className="bg-white text-gray-900 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-300 inline-flex items-center space-x-2">
              <span>Contact Us</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
