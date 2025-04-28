import React from 'react'
import { motion } from 'framer-motion'

const ContactInfo: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md">
      <h2 className="subheading mb-6">Visit Us</h2>
      <div className="space-y-4 text-gray-600">
        <p className="flex items-center">
          <span className="text-thai-gold mr-3">📍</span>
          123 Thai Street, San Francisco, CA 94110
        </p>
        <p className="flex items-center">
          <span className="text-thai-gold mr-3">📞</span>
          (555) 123-4567
        </p>
        <p className="flex items-center">
          <span className="text-thai-gold mr-3">✉️</span>
          info@jingjai.com
        </p>
      </div>

      <h3 className="font-display text-xl font-semibold mt-8 mb-4">
        Opening Hours
      </h3>
      <div className="space-y-2 text-gray-600">
        <p>Monday - Friday: 11:00 AM - 10:00 PM</p>
        <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
      </div>

      {/* Map */}
      <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8!2d-122.4!3d37.7!4m5!3m4!1s0x0:0x0!8m2!3d37.7!4d-122.4"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  )
}

export default ContactInfo 