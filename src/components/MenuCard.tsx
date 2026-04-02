import { motion } from 'motion/react';
import { Plus } from 'lucide-react';
import { useCart, MenuItem } from '../context/CartContext';

interface MenuCardProps {
  item: MenuItem;
  key?: string;
}

export default function MenuCard({ item }: MenuCardProps) {
  const { addToCart } = useCart();

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-red-600 shadow-sm">
            {item.category}
          </span>
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-gray-900 leading-tight">{item.name}</h3>
          <span className="text-red-600 font-bold">₦{item.price.toLocaleString()}</span>
        </div>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{item.description}</p>
        <button
          onClick={() => addToCart(item)}
          className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-red-600 transition-colors active:scale-95"
        >
          <Plus className="w-5 h-5" />
          <span>Add to Cart</span>
        </button>
      </div>
    </motion.div>
  );
}
