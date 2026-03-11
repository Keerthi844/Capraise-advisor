import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Users, Briefcase, Target, CheckCircle, Award, Zap, ChevronLeft, ChevronRight } from 'lucide-react'
import { Images, ImageCard } from '../assets/Images'
import { useState } from 'react'

export default function Home() {
  const [currentIndustry, setCurrentIndustry] = useState(0)

  const industries = [
    {
      title: 'Travel & Aviation Consulting',
      description: 'We are company that offers design and build services for you from intial sketches to the final construction',
      image: Images.travelAviation,
      alt: 'Travel & Aviation Consulting'
    },
    {
      title: 'Business Services Consulting',
      description: 'We are company that offers design and build services for you from intial sketches to the final construction',
      image: Images.logistics,
      alt: 'Business Services Consulting'
    },
    {
      title: 'Consumer Products Consulting',
      description: 'We are company that offers design and build services for you from intial sketches to the final construction',
      image: Images.financialServices,
      alt: 'Consumer Products Consulting'
    },
    {
      title: 'Financial Services Consulting',
      description: 'We are company that offers design and build services for you from intial sketches to the final construction',
      image: Images.energy,
      alt: 'Financial Services Consulting'
    },
    {
      title: 'Energy and Environment Consulting',
      description: 'We are company that offers design and build services for you from intial sketches to the final construction',
      image: Images.consumerProducts,
      alt: 'Energy and Environment Consulting'
    },
    {
      title: 'Surface Transport & Logistics Consulting',
      description: 'We are company that offers design and build services for you from intial sketches to the final construction',
      image: Images.businessServices,
      alt: 'Surface Transport & Logistics Consulting'
    }
  ]

  const nextIndustry = () => {
    setCurrentIndustry((prev) => (prev + 1) % industries.length)
  }

  const prevIndustry = () => {
    setCurrentIndustry((prev) => (prev - 1 + industries.length) % industries.length)
  }

  return (
    <div className="bg-white">
      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.8s ease-out;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .animate-fade-in-up-delay-1 {
          animation: fadeInUp 0.8s ease-out 0.2s both;
        }
        .animate-fade-in-up-delay-2 {
          animation: fadeInUp 0.8s ease-out 0.4s both;
        }
      `}</style>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in-down">
                Strategic Financial Solutions for Global Success
              </h1>
              <p className="text-xl text-primary-100 mb-8 animate-fade-in-up-delay-1">
                Multi-disciplinary investment banking and advisory firm specializing in comprehensive financial and strategic solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
                <Link
                  to="/services"
                  className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-primary-50 transition flex items-center justify-center space-x-2"
                >
                  <span>Explore Services</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary-600 transition"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-2xl h-80">
              <ImageCard src={Images.businessServices} alt="Strategic Solutions" />
            </div>
          </div>
        </div>
      </section>

      {/* We Aspire to Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="rounded-lg overflow-hidden shadow-2xl h-80">
              <ImageCard src={Images.teamWork} alt="We Aspire to Serve" />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-8 text-gray-900">We Aspire to Serve</h2>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                {[
                  'VCs/PEs',
                  'Angel Investors',
                  'HNIs',
                  'Startups',
                  'Incubators',
                  'Accelerators'
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow hover:shadow-lg hover:bg-green-400 hover:text-white transition duration-300 text-center border-t-4 border-primary-600 h-24 flex items-center justify-center"
                  >
                    <p className="font-semibold text-gray-800 hover:text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">500+</div>
              <p className="text-gray-700 font-semibold">Successful Transactions</p>
              <p className="text-gray-500 mt-2 text-sm">Across multiple industries and geographies</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">$50B+</div>
              <p className="text-gray-700 font-semibold">Capital Facilitated</p>
              <p className="text-gray-500 mt-2 text-sm">Strategic investments and funding</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">100+</div>
              <p className="text-gray-700 font-semibold">Expert Professionals</p>
              <p className="text-gray-500 mt-2 text-sm">Diverse expertise and experience</p>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-primary-600 mb-2">25+</div>
              <p className="text-gray-700 font-semibold">Years of Excellence</p>
              <p className="text-gray-500 mt-2 text-sm">Proven track record of success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights with Icons */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                  <Briefcase className="text-primary-600" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tailored Services</h3>
              <p className="text-gray-600">Experts in facilitating complicated financial transactions and help clients navigate challenging procedures</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                  <TrendingUp className="text-primary-600" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Analytical Approach</h3>
              <p className="text-gray-600">We carefully examine the financial standing, market developments, and expansion possibilities of businesses to offer insightful information for decision-making</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                  <Users className="text-primary-600" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Robust Network</h3>
              <p className="text-gray-600">Our extensive network helps connect clients with the appropriate prospects and resources such as important stakeholders, including regulators, corporate executives, and investors</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="text-primary-600" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">One-on-One Services</h3>
              <p className="text-gray-600">Customised business process structure for individual clients with personalized solutions</p>
            </div>
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center">
                  <Award className="text-primary-600" size={40} />
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Leading Team of Experts</h3>
              <p className="text-gray-600">Experienced CAs, CSs, CPAs, MBAs, ex-bankers, lawyers, and more</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Carousel */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900">Industries We Serve</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            We bring industry expertise across diverse sectors, providing tailored financial solutions for specialized market needs
          </p>

          <div className="relative">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
                {/* Image Side */}
                <div className={`order-1 lg:order-${currentIndustry % 2 === 0 ? '1' : '2'} flex items-center justify-center overflow-hidden bg-gray-100`}>
                  <div className="w-full h-96 lg:h-full">
                    <ImageCard src={industries[currentIndustry].image} alt={industries[currentIndustry].alt} />
                  </div>
                </div>

                {/* Content Side */}
                <div className={`order-2 lg:order-${currentIndustry % 2 === 0 ? '2' : '1'} p-12 flex flex-col justify-center`}>
                  <h3 className="text-4xl font-bold text-gray-900 mb-6">{industries[currentIndustry].title}</h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">{industries[currentIndustry].description}</p>

                  <div className="flex items-center gap-4">
                    <div className="flex gap-2">
                      {industries.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentIndustry(index)}
                          className={`w-3 h-3 rounded-full transition ${index === currentIndustry ? 'bg-primary-600' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                          aria-label={`Go to industry ${index + 1}`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 text-sm text-gray-500">
                    {currentIndustry + 1} of {industries.length}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevIndustry}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 lg:-translate-x-20 bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition shadow-lg"
              aria-label="Previous industry"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextIndustry}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 lg:translate-x-20 bg-primary-600 text-white p-3 rounded-full hover:bg-primary-700 transition shadow-lg"
              aria-label="Next industry"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </section>


      {/* Our Approach Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-gray-900 mb-6">
            Our Strategic Approach
          </h2>

          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16">
            We combine deep financial expertise, strategic insight, and a
            strong global network to deliver exceptional results for our clients.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Card 1 */}

            <div className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden hover:bg-gradient-to-r hover:from-primary-500 hover:to-indigo-500">

              {/* Corner Shape */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full -mr-16 -mt-16 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-125"></div>

              {/* Icon */}
              <div className="relative w-14 h-14 bg-primary-100 text-primary-600 rounded-xl flex items-center justify-center mb-4 transition group-hover:bg-white group-hover:text-primary-600">
                <Users size={28} />
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition">
                Client Understanding
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 text-sm group-hover:text-white/90 transition">
                We start by deeply understanding the goals, financial position,
                and growth aspirations of every client.
              </p>

            </div>
            {/* Card 2 */}
            <div className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden hover:bg-gradient-to-r hover:from-primary-500 hover:to-indigo-500">

              {/* Corner Shape */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-125"></div>

              {/* Icon */}
              <div className="relative w-14 h-14 bg-primary-500 text-white rounded-xl flex items-center justify-center mb-4 transition group-hover:bg-white group-hover:text-primary-600">
                <TrendingUp size={28} />
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition">
                Market Analysis
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 text-sm group-hover:text-white/90 transition">
                Our team evaluates market trends, financial risks,
                and opportunities to build strong strategies.
              </p>

            </div>

            {/* Card 3 */}
            <div className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden hover:bg-gradient-to-r hover:from-primary-500 hover:to-indigo-500">

              {/* Corner Shape */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-125"></div>

              {/* Icon */}
              <div className="relative w-14 h-14 bg-primary-500 text-white rounded-xl flex items-center justify-center mb-4 transition group-hover:bg-white group-hover:text-primary-600">
                <Target size={28} />
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition">
                Strategic Planning
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 text-sm group-hover:text-white/90 transition">
                We create tailored financial strategies designed to
                maximize growth and minimize risk.
              </p>

            </div>

            {/* Card 4 */}
            <div className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden hover:bg-gradient-to-r hover:from-primary-500 hover:to-indigo-500">

              {/* Corner Shape */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-full -mr-12 -mt-12 transition-all duration-500 group-hover:bg-white/20 group-hover:scale-125"></div>

              {/* Icon */}
              <div className="relative w-14 h-14 bg-primary-500 text-white rounded-xl flex items-center justify-center mb-4 transition group-hover:bg-white group-hover:text-primary-600">
                <CheckCircle size={28} />
              </div>

              {/* Title */}
              <h3 className="relative text-xl font-bold mb-2 text-gray-900 group-hover:text-white transition">
                Execution & Support
              </h3>

              {/* Description */}
              <p className="relative text-gray-600 text-sm group-hover:text-white/90 transition">
                We support clients through execution and ensure
                successful financial outcomes.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">Meet Our Leadership Team</h2>
          <div className="flex justify-center items-center gap-16 flex-wrap">
            <Link
              to="/team?member=kaushik"
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-110 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="KAUSHIK KRISHNA"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition">KAUSHIK KRISHNA</p>
            </Link>

            <Link
              to="/team?member=devender"
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-110 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
                  alt="DEVENDER KODAM"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition">DEVENDER KODAM</p>
            </Link>

            <Link
              to="/team?member=lokesh"
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:scale-110 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                  alt="LOKESH"
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition">LOKESH</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full -ml-36 -mb-36"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            Partner with Capraise Advisors for strategic financial solutions backed by expertise, integrity, and proven results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-primary-600 px-10 py-4 rounded-lg font-bold hover:bg-primary-50 transition shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </Link>
            <Link
              to="/services"
              className="inline-block border-2 border-white text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-primary-600 transition"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
