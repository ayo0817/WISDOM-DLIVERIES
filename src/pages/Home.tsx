import Hero from '../components/Hero';
import { MENU_ITEMS } from '../data';
import MenuCard from '../components/MenuCard';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight, Star, TrendingUp, Users } from 'lucide-react';

export default function Home() {
  const featuredItems = MENU_ITEMS.slice(0, 3);

  return (
    <div className="space-y-20 pb-20">
      <Hero />

      {/* Featured Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Meals</h2>
            <p className="text-gray-500 mt-2">Our most loved dishes this week</p>
          </div>
          <Link to="/menu" className="text-red-600 font-bold flex items-center hover:underline">
            View All Menu <ArrowRight className="ml-1 w-5 h-5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-red-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">5k+</div>
              <div className="text-red-100 text-sm">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-red-100 text-sm">Meal Varieties</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">20min</div>
              <div className="text-red-100 text-sm">Avg. Delivery Time</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4.9/5</div>
              <div className="text-red-100 text-sm">Customer Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Why Wisdom Obanor?</h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            We don't just deliver food; we deliver an experience. Here's why thousands choose us daily.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Star className="text-yellow-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Premium Quality</h3>
            <p className="text-gray-500">We use only the freshest ingredients sourced from local farmers to ensure every meal is perfect.</p>
          </div>
          <div className="text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="text-red-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Fastest Delivery</h3>
            <p className="text-gray-500">Our logistics network is optimized to get your food to you while it's still piping hot.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="text-blue-600 w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-3">Customer First</h3>
            <p className="text-gray-500">Our support team is available 24/7 to ensure your ordering experience is seamless.</p>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-900 rounded-3xl p-8 md:p-16 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Get 20% Off Your First Order</h2>
          <p className="text-gray-400 mb-8">Subscribe to our newsletter and stay updated with our latest deals and new menu items.</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <button className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
