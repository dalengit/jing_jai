import { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission to your backend
    setFormStatus('success')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setFormStatus('idle'), 3000)
  }

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
            {/* Contact Information */}
            <div>
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
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-white rounded-lg p-8 shadow-md">
                <h2 className="subheading mb-6">Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-thai-gold focus:border-thai-gold"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-thai-gold focus:border-thai-gold"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Phone (optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-thai-gold focus:border-thai-gold"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-thai-gold focus:border-thai-gold"
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Send Message
                  </button>

                  {formStatus === 'success' && (
                    <p className="text-green-600 text-center">
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  )}

                  {formStatus === 'error' && (
                    <p className="text-red-600 text-center">
                      There was an error sending your message. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact 