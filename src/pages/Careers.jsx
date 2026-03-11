import { useState } from 'react'
import { Mail, Heart, Zap } from 'lucide-react'
import { Images, ImageCard } from '../assets/Images'

export default function Careers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
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
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will review your application and get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      message: ''
    })
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Join the House of Passion & Skilled Teams</h1>
          <p className="text-xl text-primary-100">
            "Join the house of passion & skilled team for revolutionary success"
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-full mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Should You Join Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-8xl mx-auto">
            <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600 flex flex-col">
              <div className="h-40 mb-4 rounded-lg overflow-hidden">
                <ImageCard src={Images.passionateCultureCareers} alt="Passionate Culture" />
              </div>
              <Heart className="text-primary-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Passionate Culture</h3>
              <p className="text-gray-700">
                We believe that the work we undertake should affect people's lives and the environment. 
                Join a team united by purpose and driven by excellence.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600 flex flex-col">
              <div className="h-40 mb-4 rounded-lg overflow-hidden">
                <ImageCard src={Images.culture} alt="Growth" />
              </div>
              <Zap className="text-primary-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Revolutionary Impact</h3>
              <p className="text-gray-700">
                We constantly strive to combine the best minds, skills, and priorities to succeed at creating 
                lasting impact. Be part of something extraordinary.
              </p>
            </div>

            <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-600 flex flex-col">
              <div className="h-40 mb-4 rounded-lg overflow-hidden">
                <ImageCard src={Images.careersHero} alt="Growth" />
              </div>
              <Mail className="text-primary-600 mb-4" size={32} />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Growth Opportunities</h3>
              <p className="text-gray-700">
                If you believe your contribution can match our desire to perform incredible feats and make 
                a lasting impression, grow with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Career Benefits</h3>
              {[
                'Competitive compensation packages',
                'Professional development opportunities',
                'Mentorship from industry experts',
                'Collaborative work environment',
                'Flexible work arrangements',
                'Health and wellness programs'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Work Culture</h3>
              {[
                'Diverse and inclusive team',
                'Access to cutting-edge tools and technologies',
                'Emphasis on continuous learning',
                'Exposure to high-level transactions',
                'Direct client interaction',
                'Work on impactful projects'
              ].map((culture, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                  <p className="text-gray-700">{culture}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Ready to Join Us?</h2>
          <div className="bg-white border-2 border-primary-200 rounded-lg p-8 shadow-lg">
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                    placeholder="Your full name"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
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
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                    placeholder="+91-XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-bold mb-2">Position Interested In *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                  >
                    <option value="">Select a position</option>
                    <option value="Investment Banking">Investment Banking</option>
                    <option value="Advisory">Advisory</option>
                    <option value="Finance">Finance</option>
                    <option value="Operations">Operations</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-bold mb-2">Tell us about yourself *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-600"
                  placeholder="Share your background, experience, and why you're interested in joining Capraise Advisors..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary-600 text-white py-3 rounded-lg font-bold hover:bg-primary-700 transition"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get in Touch with Us ASAP!</h2>
          <p className="text-xl text-primary-100 mb-8">
            If you believe that your contribution can match our desire to perform incredible feats 
            and make a lasting impression, we want to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <a 
              href="mailto:careers@capraise.com"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-primary-50 transition"
            >
              Email Us
            </a>
            <a 
              href="tel:+91-XXXXXXXXXX"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-600 transition"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
