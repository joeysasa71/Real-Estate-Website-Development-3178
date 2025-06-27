import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiBed, FiBath, FiMaximize, FiMapPin, FiHeart, FiFilter, FiGrid, FiList } = FiIcons;

const Properties = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({
    type: 'all',
    priceRange: 'all',
    bedrooms: 'all'
  });

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
      type: 'Villa',
      featured: true
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
      type: 'Penthouse',
      featured: false
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
      type: 'House',
      featured: true
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2075&q=80',
      price: '$925,000',
      title: 'Waterfront Condo',
      location: 'Miami, FL',
      beds: 2,
      baths: 2,
      sqft: '1,800',
      type: 'Condo',
      featured: false
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      price: '$1,450,000',
      title: 'Mountain View Estate',
      location: 'Aspen, CO',
      beds: 6,
      baths: 5,
      sqft: '4,500',
      type: 'Estate',
      featured: true
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      price: '$750,000',
      title: 'Urban Loft',
      location: 'Seattle, WA',
      beds: 2,
      baths: 1,
      sqft: '1,400',
      type: 'Loft',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Premium Properties
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our curated collection of luxury properties in prime locations.
          </p>
        </motion.div>

        <motion.div
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row gap-4">
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
              >
                <option value="all">All Types</option>
                <option value="house">House</option>
                <option value="villa">Villa</option>
                <option value="condo">Condo</option>
                <option value="penthouse">Penthouse</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.priceRange}
                onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
              >
                <option value="all">Any Price</option>
                <option value="0-500k">$0 - $500K</option>
                <option value="500k-1m">$500K - $1M</option>
                <option value="1m-2m">$1M - $2M</option>
                <option value="2m+">$2M+</option>
              </select>
              
              <select 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.bedrooms}
                onChange={(e) => setFilters({...filters, bedrooms: e.target.value})}
              >
                <option value="all">Any Bedrooms</option>
                <option value="1">1+ Bedrooms</option>
                <option value="2">2+ Bedrooms</option>
                <option value="3">3+ Bedrooms</option>
                <option value="4">4+ Bedrooms</option>
              </select>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <SafeIcon icon={FiGrid} className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-md transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : ''
                  }`}
                >
                  <SafeIcon icon={FiList} className="h-5 w-5" />
                </button>
              </div>
              
              <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <SafeIcon icon={FiFilter} className="h-4 w-4" />
                <span>Filters</span>
              </button>
            </div>
          </div>
        </motion.div>

        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {properties.map((property, index) => (
            <motion.div
              key={property.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group ${
                viewMode === 'list' ? 'flex' : ''
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className={`relative overflow-hidden ${
                viewMode === 'list' ? 'w-1/3' : ''
              }`}>
                <img
                  src={property.image}
                  alt={property.title}
                  className={`object-cover group-hover:scale-110 transition-transform duration-500 ${
                    viewMode === 'list' ? 'w-full h-full' : 'w-full h-64'
                  }`}
                />
                <div className="absolute top-4 left-4 flex space-x-2">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {property.type}
                  </span>
                  {property.featured && (
                    <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  )}
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

              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-bold text-blue-600">{property.price}</h3>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-2">{property.title}</h4>
                
                <div className="flex items-center text-gray-600 mb-4">
                  <SafeIcon icon={FiMapPin} className="h-4 w-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between text-gray-600 border-t pt-4 mb-4">
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

                <div className="flex space-x-3">
                  <motion.button
                    className="flex-1 bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Details
                  </motion.button>
                  <motion.button
                    className="px-6 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors duration-200"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Schedule Tour
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.button
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Load More Properties
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Properties;