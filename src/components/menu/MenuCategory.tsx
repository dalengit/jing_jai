import React from 'react'

interface MenuCategoryProps {
  categories: Array<{
    id: string
    name: string
  }>
  activeCategory: string
  onCategoryChange: (categoryId: string) => void
}

const MenuCategory: React.FC<MenuCategoryProps> = ({
  categories,
  activeCategory,
  onCategoryChange,
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
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
  )
}

export default MenuCategory 