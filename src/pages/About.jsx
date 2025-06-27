import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiAward, FiUsers, FiTrendingUp, FiHeart } = FiIcons;

const About = () => {
  const team = [
    {
      name: 'Maria Rodriguez',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=387&q=80',
      experience: '15+ years',
      speciality: 'Luxury Properties'
    },
    {
      name: 'James Chen',
      role: 'Senior Broker',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      experience: '12+ years',
      speciality: 'Commercial Real Estate'
    },
    {
      name: 'Sarah Johnson',
      role: 'Investment Advisor',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80',
      experience: '10+ years',
      speciality: 'Investment Properties'
    }
  ];

  const values = [
    {
      icon: FiHeart,
      title: 'Client First',
      description: 'We prioritize our clients\' needs and goals above everything else, ensuring personalized service.'
    },
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We strive for excellence in every transaction, maintaining the highest standards of service.'
    },
    {
      icon: FiUsers,
      title: 'Integrity',
      description: 'Honesty and transparency guide all our interactions and business practices.'
    },
    {
      icon: FiTrendingUp,
      title: 'Innovation',
      description: 'We embrace technology and innovative approaches to deliver superior results.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            About Agente Broker
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With over 15 years of experience in premium real estate, we've built our reputation on trust, expertise, and exceptional results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2073&q=80"
              alt="About Us"
              className="w-full h-96 object-cover rounded-2xl shadow-lg"
            />
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-gray-900">
              Your Trusted Real Estate Partner
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Founded in 2008, Agente Broker has grown from a small local agency to one of the most respected names in luxury real estate. Our commitment to excellence and client satisfaction has earned us recognition as industry leaders.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We specialize in high-end properties, investment opportunities, and comprehensive real estate services. Our team of experienced professionals brings deep market knowledge and personalized attention to every transaction.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">2,500+</h3>
                <p className="text-gray-600">Properties Sold</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-600">$2.5B+</h3>
                <p className="text-gray-600">Total Sales Volume</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <SafeIcon icon={value.icon} className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Meet Our Expert Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>{member.experience}</span>
                    <span>{member.speciality}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-20 bg-blue-600 rounded-2xl p-12 text-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">Ready to Work with Us?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your real estate goals and how we can help you achieve them.
          </p>
          <motion.button
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Schedule a Consultation
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;