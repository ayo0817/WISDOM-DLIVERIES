import { motion } from 'motion/react';
import { Utensils, Heart, Award, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="bg-red-600 py-20 text-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-extrabold mb-6"
          >
            Our Story
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-red-100 max-w-3xl mx-auto"
          >
            Wisdom Obanor Food Delivery was founded with a simple mission: to bring authentic, delicious, and affordable meals to every home.
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Vision of Wisdom Obanor</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Started in the heart of Lagos, Wisdom Obanor Food Delivery began as a small kitchen with a big dream. We noticed that busy professionals and students often struggled to find healthy, traditional meals that didn't break the bank.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Today, we've grown into a leading food delivery service, but our core values remain the same. We believe that everyone deserves access to great food, regardless of their schedule or budget.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-10">
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Heart className="text-red-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Passion</h4>
                  <p className="text-sm text-gray-500">We love what we do.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-red-100 p-2 rounded-lg">
                  <Award className="text-red-600 w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Quality</h4>
                  <p className="text-sm text-gray-500">Only the best ingredients.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"
              alt="Kitchen"
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-extrabold text-red-600 mb-1">10+</div>
              <div className="text-gray-500 font-bold">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <Target className="text-red-600 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To revolutionize the food delivery industry by providing a platform that connects people with high-quality, authentic meals while supporting local culinary talent.
              </p>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
              <Utensils className="text-red-600 w-12 h-12 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become the most trusted and preferred food delivery brand globally, known for our commitment to quality, speed, and community impact.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
