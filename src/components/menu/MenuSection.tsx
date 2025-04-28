import React from 'react'
import MenuCategory from './MenuCategory'
import MenuItem from './MenuItem'

interface MenuItem {
  name: string
  description: string
  price: number
  spicy: boolean
}

interface MenuSectionProps {
  categories: string[]
  activeCategory: string
  menuItems: Record<string, MenuItem[]>
  onCategoryChange: (category: string) => void
}

const MenuSection: React.FC<MenuSectionProps> = ({
  categories,
  activeCategory,
  menuItems,
  onCategoryChange,
}) => {
  return (
    <section className="py-16 bg-thai-cream">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-display font-bold text-thai-earth text-center mb-12">
          Our Menu
        </h2>
        
        <MenuCategory
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={onCategoryChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {menuItems[activeCategory]?.map((item, index) => (
            <MenuItem
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
              spicy={item.spicy}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default MenuSection 