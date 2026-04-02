import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Have questions about our menu, delivery, or want to partner with us? We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="lg:col-span-1 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <Phone className="text-red-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-500">+234 800 123 4567</p>
                  <p className="text-gray-500">+234 800 765 4321</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <Mail className="text-red-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-500">hello@wisdomobanor.com</p>
                  <p className="text-gray-500">support@wisdomobanor.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-xl">
                  <MapPin className="text-red-600 w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Visit Us</h4>
                  <p className="text-gray-500">123 Delivery Way, Victoria Island</p>
                  <p className="text-gray-500">Lagos, Nigeria</p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-100">
              <h4 className="font-bold text-gray-900 mb-4">Chat with us on WhatsApp</h4>
              <a
                href="https://wa.me/2348001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 bg-green-500 text-white py-4 rounded-xl font-bold hover:bg-green-600 transition-colors"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Start Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-sm">
            <h3 className="text-2xl font-bold mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-red-600"
                  placeholder="Your message here..."
                />
              </div>
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-red-600 text-white rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-red-700 transition-colors shadow-lg shadow-red-100"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
