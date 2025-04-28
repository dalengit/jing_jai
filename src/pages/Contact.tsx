import React, { lazy, Suspense } from 'react'
import { motion } from 'framer-motion'

const ContactInfo = lazy(() => import('../components/contact/ContactInfo'))
const ContactForm = lazy(() => import('../components/contact/ContactForm'))

const Contact = () => {
  return (
    <div className="bg-thai-cream min-h-screen py-12">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="heading text-center mb-12">Contact Us</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Suspense fallback={<div>Loading...</div>}>
              <ContactInfo />
              <ContactForm />
            </Suspense>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 