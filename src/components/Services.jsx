import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiTrendingUp, FiShield, FiUsers, FiDollarSign, FiKey } = FiIcons;

const Services = () => {
  const services = [
    {
      icon: FiHome,
      title: 'Property Sales',
      description: 'Expert guidance through the entire buying and selling process with personalized attention.',
      features: ['Market Analysis', 'Property Valuation', 'Negotiation Support']
    },
    {
      icon: FiTrendingUp,
      title: 'Investment Advisory',
      description: 'Strategic investment advice to maximize your real estate portfolio returns.',
      features: ['ROI Analysis', 'Market Trends', 'Portfolio Management']
    },
    {
      icon: FiShield,
      title: 'Legal Support',
      description: 'Comprehensive legal assistance to ensure smooth and secure transactions.',
      features: ['Contract Review', 'Due Diligence', 'Closing Support']
    },
    {
      icon: FiUsers,
      title: 'Client Relations',
      description: 'Dedicated client service with 24/7 support throughout your real estate journey.',
      features: ['Personal Advisor', '24/7 Support', 'Follow-up Service']
    },
    {
      icon: FiDollarSign,
      title: 'Financial Planning',
      description: 'Complete financial planning services including mortgage and loan assistance.',
      features: ['Mortgage Advice', 'Loan Processing', 'Financial Planning']
    },
    {
      icon: FiKey,
      title: 'Property Management',
      description: 'Full-service property management for rental and investment properties.',
      features: ['Tenant Management', 'Maintenance', 'Rent Collection']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Premium Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From buying and selling to investment advisory, we provide comprehensive real estate services tailored to your needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-2xl mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                <SafeIcon icon={service.icon} className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <motion.button
                className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;