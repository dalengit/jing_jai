import React from 'react'
import { motion } from 'framer-motion'

interface MenuItemProps {
  name: string
  description: string
  price: number
  spicy: boolean
  index: number
}

const MenuItem: React.FC<MenuItemProps> = ({
  name,
  description,
  price,
  spicy,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-md"
    >
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-display text-xl font-semibold text-thai-earth flex items-center gap-2">
            {name}
            {spicy && (
              <span className="text-thai-red text-sm">🌶️ Spicy</span>
            )}
          </h3>
          <p className="text-gray-600 mt-1">{description}</p>
        </div>
        <span className="font-medium text-thai-gold">
          ${price.toFixed(2)}
        </span>
      </div>
    </motion.div>
  )
}

export default MenuItem 