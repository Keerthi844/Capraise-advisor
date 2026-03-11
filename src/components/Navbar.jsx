import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Images } from '../assets/Images'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={Images.logo} alt="Capraise Advisors" className="h-10 w-10" />
            <span className="hidden sm:inline text-xl font-bold text-gray-800">
              Capraise Advisors
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-primary-600 transition">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-primary-600 transition">About</Link>
            <Link to="/services" className="text-gray-700 hover:text-primary-600 transition">Services</Link>
            <Link to="/team" className="text-gray-700 hover:text-primary-600 transition">Team</Link>
            <Link to="/careers" className="text-gray-700 hover:text-primary-600 transition">Careers</Link>
            <Link 
              to="/contact" 
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 hover:text-primary-600"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link 
              to="/" 
              className="block text-gray-700 hover:text-primary-600 transition py-2"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className="block text-gray-700 hover:text-primary-600 transition py-2"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link 
              to="/services" 
              className="block text-gray-700 hover:text-primary-600 transition py-2"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/team" 
              className="block text-gray-700 hover:text-primary-600 transition py-2"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link 
              to="/careers" 
              className="block text-gray-700 hover:text-primary-600 transition py-2"
              onClick={toggleMenu}
            >
              Careers
            </Link>
            <Link 
              to="/contact" 
              className="block bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
