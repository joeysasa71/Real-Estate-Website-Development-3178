import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBed, FiBath, FiMaximize, FiMapPin, FiHeart } = FiIcons;

const FeaturedProperties = () => {
  const properties = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
      price: '$1,250,000',
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      beds: 4,
      baths: 3,
      sqft: '3,200',
      type: 'Villa'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2053&q=80',
      price: '$850,000',
      title: 'Contemporary Penthouse',
      location: 'Manhattan, NY',
      beds: 3,
      baths: 2,
      sqft: '2,400',
      type: 'Penthouse'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      price: '$675,000',
      title: 'Elegant Family Home',
      location: 'Austin, TX',
      beds: 5,
      baths: 4,
      sqft: '2,800',
      type: 'House'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties in the most desirable locations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <motion.button
                    className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <SafeIcon icon={FiHeart} className="h-5 w-5 text-gray-600" />
                  </motion.button>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-blue-600">{property.price}</h3>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h4>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <SafeIcon icon={FiMapPin} className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-gray-600 border-t pt-4">
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiBed} className="h-4 w-4" />
                    <span className="text-sm">{property.beds} Beds</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiBath} className="h-4 w-4" />
                    <span className="text-sm">{property.baths} Baths</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <SafeIcon icon={FiMaximize} className="h-4 w-4" />
                    <span className="text-sm">{property.sqft} sqft</span>
                  </div>
                </div>

                <motion.button
                  className="w-full mt-6 bg-gray-900 text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Properties
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;