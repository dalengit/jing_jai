import { ReactNode, useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-ting-light">
      <header className="w-full z-50 relative">
        <div className="absolute inset-0 bg-ting-pink"></div>
        <nav className="container mx-auto px-4 py-2 relative">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="flex items-center group"
            >
              <span className="text-ting-burgundy font-display text-2xl font-bold">
                JING JAI
              </span>
            </Link>
            
            <button
              className="md:hidden text-ting-burgundy hover:text-ting-rose transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-8 w-8" />
              ) : (
                <Bars3Icon className="h-8 w-8" />
              )}
            </button>

            <div className="hidden md:flex items-center space-x-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${
                    location.pathname === item.href ? 'active' : ''
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="md:hidden mt-4 overflow-hidden"
              >
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block py-2 text-center nav-link-mobile ${
                      location.pathname === item.href
                        ? 'text-ting-burgundy'
                        : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-ting-burgundy text-white relative overflow-hidden">
        <div className="absolute w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl -top-1/2 -right-1/4" />
        <div className="absolute w-[600px] h-[600px] bg-white/5 rounded-full blur-3xl -bottom-1/2 -left-1/4" />
        <div className="absolute inset-0 bg-thai-pattern opacity-5" />
        
        <div className="container mx-auto px-4 py-16 md:py-20 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            <div className="space-y-6">
              <Link to="/" className="inline-block group">
                <span className="text-ting-burgundy font-display text-2xl font-bold">
                  JING JAI
                </span>
              </Link>
              <p className="text-ting-light/90 leading-relaxed">
                Authentic Thai cuisine in a warm, welcoming atmosphere. Experience the true taste of Thailand in San Francisco.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="font-display text-xl text-ting-pink">Opening Hours</h3>
              <div className="space-y-4 text-ting-light/90">
                <div className="flex items-center space-x-4">
                  <span className="w-24 text-ting-pink/80">Mon - Fri</span>
                  <span>11:00 AM - 10:00 PM</span>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="w-24 text-ting-pink/80">Sat - Sun</span>
                  <span>12:00 PM - 11:00 PM</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="font-display text-xl text-ting-pink">Quick Links</h3>
              <nav className="space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block text-ting-light/90 hover:text-ting-pink transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="space-y-6">
              <h3 className="font-display text-xl text-ting-pink">Contact</h3>
              <div className="space-y-4 text-ting-light/90">
                <p className="flex items-start space-x-4">
                  <span className="text-ting-pink/80">Address:</span>
                  <span>123 Thai Street<br />San Francisco, CA 94110</span>
                </p>
                <p className="flex items-center space-x-4">
                  <span className="text-ting-pink/80">Phone:</span>
                  <a href="tel:+15551234567" className="hover:text-ting-pink transition-colors duration-200">
                    (555) 123-4567
                  </a>
                </p>
                <p className="flex items-center space-x-4">
                  <span className="text-ting-pink/80">Email:</span>
                  <a href="mailto:info@jingjai.com" className="hover:text-ting-pink transition-colors duration-200">
                    info@jingjai.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-ting-light/70 text-sm">
                &copy; {new Date().getFullYear()} Jing Jai. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a href="#" className="text-ting-light/70 hover:text-ting-pink text-sm transition-colors duration-200">
                  Privacy Policy
                </a>
                <a href="#" className="text-ting-light/70 hover:text-ting-pink text-sm transition-colors duration-200">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout 