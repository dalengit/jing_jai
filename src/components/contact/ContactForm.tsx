import React, { useState, useCallback, memo } from 'react'

interface FormData {
  name: string
  email: string
  phone: string
  message: string
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the form submission to your backend
    setFormStatus('success')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setTimeout(() => setFormStatus('idle'), 3000)
  }, [])

  return (
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
            name="name"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-thai-gold focus:border-thai-gold"
            value={formData.name}
            onChange={handleInputChange}
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
            name="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-thai-gold focus:border-thai-gold"
            value={formData.email}
            onChange={handleInputChange}
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
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-thai-gold focus:border-thai-gold"
            value={formData.phone}
            onChange={handleInputChange}
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
            name="message"
            required
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-thai-gold focus:border-thai-gold"
            value={formData.message}
            onChange={handleInputChange}
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
  )
}

export default memo(ContactForm) 