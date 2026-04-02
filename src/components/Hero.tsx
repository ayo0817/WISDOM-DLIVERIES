import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Clock, ShieldCheck, Truck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
              >
                <span className="block xl:inline">Delicious meals delivered to</span>{' '}
                <span className="block text-red-600 xl:inline">your doorstep</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0"
              >
                Experience the best of local and traditional dishes with Wisdom Obanor Food Delivery. Fast, affordable, and always fresh.
              </motion.p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/menu"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 md:py-4 md:text-lg md:px-10"
                  >
                    Order Now <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </motion.div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/about"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </Link>
                </div>
              </div>

              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Clock className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <ShieldCheck className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium">Quality Food</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Truck className="w-5 h-5 text-yellow-500" />
                  <span className="text-sm font-medium">Affordable Rates</span>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1920"
          alt="Delicious Food"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
  );
}
