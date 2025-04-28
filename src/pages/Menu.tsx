import React, { useState, useCallback, memo } from 'react'
import { motion } from 'framer-motion'

const menuCategories = [
  { id: 'appetizers', name: 'Appetizers' },
  { id: 'soups', name: 'Soups' },
  { id: 'curries', name: 'Curries' },
  { id: 'noodles', name: 'Noodles' },
  { id: 'rice', name: 'Rice Dishes' },
  { id: 'desserts', name: 'Desserts' },
  { id: 'drinks', name: 'Drinks' },
]

const menuItems = {
  appetizers: [
    { name: 'Spring Rolls', description: 'Crispy rolls with vegetables and glass noodles', price: 8.95, spicy: false },
    { name: 'Satay', description: 'Grilled chicken skewers with peanut sauce', price: 10.95, spicy: false },
    { name: 'Som Tum', description: 'Spicy green papaya salad with lime dressing', price: 11.95, spicy: true },
  ],
  soups: [
    { name: 'Tom Yum', description: 'Hot and sour soup with mushrooms and herbs', price: 12.95, spicy: true },
    { name: 'Tom Kha', description: 'Coconut soup with galangal and chicken', price: 12.95, spicy: false },
  ],
  curries: [
    { name: 'Green Curry', description: 'Thai green curry with bamboo shoots and basil', price: 15.95, spicy: true },
    { name: 'Panang Curry', description: 'Rich curry with kaffir lime leaves', price: 15.95, spicy: true },
    { name: 'Massaman Curry', description: 'Mild curry with potatoes and peanuts', price: 15.95, spicy: false },
  ],
  noodles: [
    { name: 'Pad Thai', description: 'Rice noodles with tamarind sauce and peanuts', price: 14.95, spicy: false },
    { name: 'Drunken Noodles', description: 'Wide rice noodles with basil and chili', price: 14.95, spicy: true },
  ],
  rice: [
    { name: 'Basil Fried Rice', description: 'Spicy fried rice with holy basil', price: 13.95, spicy: true },
    { name: 'Pineapple Fried Rice', description: 'Fried rice with pineapple and cashews', price: 14.95, spicy: false },
  ],
  desserts: [
    { name: 'Mango Sticky Rice', description: 'Sweet sticky rice with fresh mango', price: 8.95, spicy: false },
    { name: 'Coconut Ice Cream', description: 'Homemade coconut ice cream', price: 6.95, spicy: false },
  ],
  drinks: [
    { name: 'Thai Iced Tea', description: 'Classic sweet Thai tea with milk', price: 4.95, spicy: false },
    { name: 'Thai Iced Coffee', description: 'Traditional Thai coffee with milk', price: 4.95, spicy: false },
    { name: 'Young Coconut', description: 'Fresh young coconut water', price: 5.95, spicy: false },
  ],
}

const Menu = memo(() => {
  const [activeCategory, setActiveCategory] = useState('appetizers')

  const handleCategoryChange = useCallback((categoryId: string) => {
    setActiveCategory(categoryId)
  }, [])

  return (
    <div className="bg-thai-cream min-h-screen py-12">
      <div className="container">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="heading text-center mb-12"
        >
          Our Menu
        </motion.h1>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-thai-gold text-white'
                  : 'bg-white text-thai-earth hover:bg-thai-earth hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="grid gap-6 max-w-4xl mx-auto">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-display text-xl font-semibold text-thai-earth flex items-center gap-2">
                    {item.name}
                    {item.spicy && (
                      <span className="text-thai-red text-sm">🌶️ Spicy</span>
                    )}
                  </h3>
                  <p className="text-gray-600 mt-1">{item.description}</p>
                </div>
                <span className="font-medium text-thai-gold">
                  ${item.price.toFixed(2)}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dietary Notes */}
        <div className="mt-12 text-center text-gray-600">
          <p>Please inform our staff of any allergies or dietary restrictions.</p>
          <p className="mt-2">
            🌶️ indicates spicy dishes - spice levels can be adjusted upon request
          </p>
        </div>
      </div>
    </div>
  )
})

Menu.displayName = 'Menu'

export default Menu 