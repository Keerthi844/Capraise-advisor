import { Images, ImageCard } from '../assets/Images'
import { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Team() {
  const [searchParams] = useSearchParams()
  
  useEffect(() => {
    const member = searchParams.get('member')
    if (member) {
      const element = document.getElementById(`member-${member}`)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }, [searchParams])
  const teamMembers = [
    {
      name: 'KAUSHIK KRISHNA',
      position: 'Vice President, Tata Group',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      expertise: [
        'New Business Development',
        'Product Launch',
        'Quality Assurance',
        'Customer Advocacy',
        'Process Excellence',
        'Change Management',
        'Pricing Strategy EBITA Improvement',
        'P&L Accountability',
      ],
      bio: 'Kaushik is a dynamic business leader and Vice President at the Tata Group, with proven expertise in new business development, mergers & acquisitions, joint ventures, and product launches. He has successfully driven quality assurance, customer advocacy, and process excellence initiatives, contributing to significant EBITA improvement and P&L growth. Kaushik’s strategic focus spans pricing strategy, change management, and first revenue cycle execution, enabling organizations to accelerate market entry and optimize performance. With a strong record in business transformation and value creation, he continues to play a key role in driving sustainable growth and innovation across the Tata Group’s diverse businesses.'
    },
    {
      name: 'DEVENDER KODAM',
      position: 'CFO, Capraise Advisors',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      expertise: [
        'Chartered Accountant',
        'Bookkeeping & Accounting',
        'Auditing & Taxation',
        'Business Valuation',
        'Debt Syndication',
        'Private Equity Advisory',
        'Corporate Laws'
      ],
      bio: 'Devender is a qualified chartered accountant with experience of working in one of the big 5 accounting firms. He holds experience across multiple disciplines in the finance world such as bookkeeping, accounting, auditing, taxation and business valuation for many companies. Devender is founder of D K M H and Company, a chartered accountant firm serving the finance needs for different clients. Devender being the managing partner of the firm brings in his expansive industry experience in executing complex finance challenges with different regulatory norms in the fields of Accounting, Auditing, Taxation, Corporate laws. Further, he has immense experience in Business valuation, Debt syndication and Private equity advisory. His extensive experience in varied industry gives him the opportunity to be the SPOC for any collaboration and networking for Accounting, Audit, Assurance, Advisory and Tax related services.'

    },
    {
      name: 'LOKESH',
      position: 'Practice Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      expertise: [
        'IT Consulting Leadership',
        'Strategic Client Engagements',
        'Practice Performance',
        'Industry Solutions',
        'Operational Effectiveness',
        'Cost Efficiencies',
        'Business Transformation'
      ],
      bio:'Lokesh is an accomplished Practice Director with extensive experience in leading IT consulting operations and strategic client engagements. His responsibilities include overseeing practice performance, developing and maintaining industry solution capabilities, and advising on strategic direction across markets. As a trusted advisor, Lokesh works closely with C-level executives to enhance operational effectiveness, drive cost efficiencies, and deliver measurable business outcomes. He plays a pivotal role in strengthening client relationships through hands-on involvement and client-facing initiatives, while also serving as a principal consultant and technical advisor, offering actionable insights and expertise that enable organizations to achieve lasting transformation and growth.'
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Leadership Team</h1>
          <p className="text-xl text-primary-100">
            Experienced professionals dedicated to delivering excellence
          </p>
        </div>
      </section>
    
      {/* Team Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {teamMembers.map((member, index) => {
              let memberId = ''
              if (member.name === 'KAUSHIK KRISHNA') memberId = 'kaushik'
              else if (member.name === 'DEVENDER KODAM') memberId = 'devender'
              else if (member.name === 'LOKESH') memberId = 'lokesh'
              
              return (
              <div key={index} id={`member-${memberId}`} className="bg-gray-50 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                  {/* Profile Section */}
                  <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8 flex flex-col justify-center items-center">
                    <div className="w-40 h-40 rounded-full mb-6 flex items-center justify-center overflow-hidden shadow-lg border-4 border-white">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-center">{member.name}</h3>
                    <p className="text-primary-100 font-semibold text-center">{member.position}</p>
                  </div>

                  {/* Content Section */}
                  <div className="md:col-span-2 p-8">
                    <div className="mb-6">
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Biography</h4>
                      <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-3">Key Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span 
                            key={idx}
                            className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Why Our Team Stands Out</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                title: 'Diverse Expertise',
                description: 'CAs, CSs, CPAs, MBAs, ex-bankers, and legal experts'
              },
              {
                title: 'Proven Track Record',
                description: 'Successfully executed complex transactions and advisory engagements'
              },
              {
                title: 'Industry Experience',
                description: 'Deep knowledge across multiple sectors and industries'
              },
              {
                title: 'Client Focus',
                description: 'Dedicated to delivering personalized, results-driven solutions'
              }
            ].map((value, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition border-t-4 border-primary-600 text-center"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collective Strength */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Collective Strength</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            United by a shared commitment to excellence, integrity, and client success, our team leverages diverse 
            backgrounds and expertise to solve complex challenges. We believe in collaborative problem-solving, continuous 
            learning, and maintaining the highest professional standards in everything we do.
          </p>
          <div className="bg-primary-50 border-l-4 border-primary-600 p-8 rounded-lg">
            <p className="text-gray-800 italic text-lg">
              "We don't just provide advisory services—we become partners in our clients' success journey, 
              bringing strategic insights, operational excellence, and unwavering dedication to value creation."
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
