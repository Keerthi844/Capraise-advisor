import { useState } from 'react'
import { Mail, Phone, MapPin, Send } from 'lucide-react'
import { Images, ImageCard } from '../assets/Images'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Contact form submitted:', formData)
    alert('Thank you for reaching out! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: ''
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-primary-100">
            Let's discuss how we can help your business succeed
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600 flex flex-col">
            <MapPin className="text-primary-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Location</h3>
            <p className="text-gray-700">
              Hyderabad, India
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600 flex flex-col">
            <Mail className="text-primary-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-700">
              <a href="mailto:info@capraise.com" className="hover:text-primary-600 transition">
                info@capraise.com
              </a>
            </p>
          </div>

          <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600 flex flex-col">
            <Phone className="text-primary-600 mb-4" size={32} />
            <h3 className="text-xl font-bold text-gray-900 mb-2">Phone</h3>
            <p className="text-gray-700">
              <a href="tel:+91-XXXXXXXXXX" className="hover:text-primary-600 transition">
                +91-XXXXXXXXXX
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Send us a Message</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2 bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                      placeholder="+91-XXXXXXXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-bold mb-2">Company</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 focus:ring-2 focus:ring-primary-100"
                    placeholder="Tell us about your requirement..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Info Box */}
            <div className="bg-primary-600 text-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-6">Why Contact Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-200 font-bold">✓</span>
                  <span>Expert advisory on investment banking matters</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-200 font-bold">✓</span>
                  <span>Tailored solutions for your business needs</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-200 font-bold">✓</span>
                  <span>Access to our network of investors and partners</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-200 font-bold">✓</span>
                  <span>Strategic guidance for growth and expansion</span>
                </li>
              </ul>

              <div className="mt-8 pt-8 border-t border-primary-400">
                <p className="text-primary-100 text-sm">
                  Response time: Usually within 24-48 hours during business days
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Find Us On The Map</h2>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d7612.660921007307!2d78.38543729311169!3d17.443890417653794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1773205435987!5m2!1sen!2sin" 
              width="100%" 
              height="450" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social Media Links */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Connect With Us</h2>
          <p className="text-gray-700 text-lg mb-8">
            Follow us on social media for latest updates and insights
          </p>
          <div className="flex justify-center items-center gap-6">
            <a 
              href="https://www.instagram.com/capraiseadvisors/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-red-500 text-white px-6 py-3 rounded-lg font-bold hover:shadow-lg transition"
            >
              <span>📸</span>
              <span>Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
