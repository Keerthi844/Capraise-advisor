import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-primary-400 mb-4">Capraise Advisors</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Multi-disciplinary investment banking and advisory firm headquartered in Hyderabad, India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-primary-400 transition">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-primary-400 transition">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary-400 transition">Services</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-primary-400 transition">Team</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-primary-400 transition">Careers</Link></li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition">Fundraising</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition">M&A</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition">Restructuring</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-400 transition">Advisory</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail size={16} />
                <a href="mailto:info@capraise.com" className="hover:text-primary-400 transition">
                  info@capraise.com
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone size={16} />
                <a href="tel:+91-XXXXXXXXXX" className="hover:text-primary-400 transition">
                  +91-XXXXXXXXXX
                </a>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <MapPin size={16} />
                <span>Hyderabad, India</span>
              </li>
              <li className="pt-2">
                <a 
                  href="https://www.instagram.com/capraiseadvisors/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition"
                >
                  <Instagram size={20} />
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Capraise Advisors. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-primary-400 transition">Privacy Policy</a>
              <a href="#" className="hover:text-primary-400 transition">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
