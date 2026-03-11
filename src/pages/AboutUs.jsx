import { CheckCircle, Plane, TrendingUp, ShoppingCart, Building2, Wind, Truck } from 'lucide-react'
import { Images, ImageCard } from '../assets/Images'

export default function AboutUs() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">About Capraise Advisors</h1>
          <p className="text-xl text-primary-100">
            Leading investment banking and advisory firm headquartered in Hyderabad, India
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Who We Are</h2>
          <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
            <p>
              Capraise Advisors is a multi-disciplinary investment banking and advisory firm headquartered in Hyderabad, India. 
              We specialize in delivering comprehensive financial and strategic solutions that help clients realize their long-term 
              objectives and create sustainable value.
            </p>
            <p>
              With a strong track record and a client-centric approach, Capraise Advisors partners with individuals, businesses, 
              and institutions across the globe, offering tailored advisory services backed by deep industry knowledge and execution excellence.
            </p>
            <p>
              Our team consists of highly skilled professionals drawn from diverse backgrounds, including Chartered Accountants, 
              Company Secretaries, Certified Public Accountants, former bankers, management professionals, and legal experts. 
              This integrated expertise enables us to provide holistic, practical, and results-driven advisory solutions.
            </p>
            <p>
              United by a shared vision, we are committed to delivering best-in-class advisory services and supporting the creation 
              of world-class companies through insight, integrity, and strategic foresight.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary-600 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To deliver strategic financial solutions that enable our clients to focus on building and growing their businesses. 
                  We aim to maximize value through insightful advisory, innovative thinking, and uncompromising professional standards, 
                  while contributing positively to our clients, stakeholders, and communities.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-primary-600 h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-700 leading-relaxed">
                  To be the trusted one-stop advisory partner for entrepreneurs and businesses worldwide—driving success through integrity, 
                  expertise, and consistently exceptional outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Expertise */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'Chartered Accountants (CAs)',
              'Company Secretaries (CSs)',
              'Certified Public Accountants (CPAs)',
              'Former Bankers',
              'Management Professionals',
              'Legal Experts'
            ].map((expertise, index) => (
              <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                <CheckCircle className="text-primary-600 flex-shrink-0" size={24} />
                <span className="text-gray-800 font-semibold">{expertise}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* We Aspire to Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">We Aspire to Serve</h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Our expertise and solutions are tailored for a diverse range of clients across the investment and business landscape.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: 'VCs/PEs', icon: '🚀', description: 'Venture Capital and Private Equity firms' },
              { title: 'Angel Investors', icon: '💼', description: 'Individual angel investors and networks' },
              { title: 'HNIs', icon: '👑', description: 'High Net Worth Individuals' },
              { title: 'Startups', icon: '⚡', description: 'Early-stage and growth-stage startups' },
              { title: 'Incubators', icon: '🏢', description: 'Business incubation centers' },
              { title: 'Accelerators', icon: '🎯', description: 'Business acceleration programs' }
            ].map((client, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-br hover:from-green-400 hover:to-green-100 transition-all">
                <div className="text-4xl mb-4">{client.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{client.title}</h3>
                <p className="text-gray-600">{client.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Industries</h2>
          <div className="space-y-12">
            {[
              {
                icon: Plane,
                title: 'Travel and Aviation Consulting',
                description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
                image: Images.travelAviation
              },
              {
                icon: TrendingUp,
                title: 'Business Services Consulting',
                description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
                image: Images.businessServices
              },
              {
                icon: ShoppingCart,
                title: 'Consumer Products Consulting',
                description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
                image: Images.consumerProducts
              },
              {
                icon: Building2,
                title: 'Financial Services Consulting',
                description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
                image: Images.financialServices
              },
              {
                icon: Wind,
                title: 'Energy and Environment Consulting',
                description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
                image: Images.energy
              },
              {
                icon: Truck,
                title: 'Surface Transport & Logistics Consulting',
                description: 'We are a company that offers design and build services for you from initial sketches to the final construction.',
                image: Images.logistics
              }
            ].map((industry, index) => {
              const IconComponent = industry.icon;
              const isEven = index % 2 === 0;
              return (
                <div key={index} className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8`}>
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <div className="h-64 rounded-lg overflow-hidden shadow-lg">
                      <ImageCard src={industry.image} alt={industry.title} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="w-full md:w-1/2">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="bg-gray-900 rounded-full p-4 flex-shrink-0">
                        <IconComponent className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{industry.title}</h3>
                    </div>
                    <p className="text-gray-600 text-base leading-relaxed">{industry.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Integrity',
                description: 'Uncompromising professional and ethical standards'
              },
              {
                title: 'Excellence',
                description: 'Best-in-class advisory services and solutions'
              },
              {
                title: 'Client-Centric',
                description: 'Tailored solutions for unique client needs'
              },
              {
                title: 'Innovation',
                description: 'Forward-thinking strategies and approaches'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center border-t-4 border-primary-600"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
