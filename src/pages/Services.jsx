import { useState } from 'react'
import { ChevronDown, TrendingUp, Building2, Briefcase, Zap, Users } from 'lucide-react'
import { Images, ImageCard } from '../assets/Images'

export default function Services() {
  const [expandedService, setExpandedService] = useState(null)

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-primary-100">
            As a full-service investment banking company, we provide specialized services tailored to satisfy the particular requirements of our clients.
          </p>
        </div>
      </section>

      {/* 1. FUNDRAISING SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-4">
              <TrendingUp size={40} className="text-primary-600" />
              1) Fundraising
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
            We select the most valuable & promising asset class by examining the facts after conducting thorough research of the business to properly understand the client’s requirement. As a result of our strong connections with financial institutions, NBFCs, venture capital funds, private equity funds, and banks from diverse sectors, we are able to meet the specific funding needs that arise for businesses at different stages of their journey. Capraise assists the company throughout the procedure with every critical aspect in order to accomplish a smooth transaction closure.
            </p>
          </div>

          {/* Fundraising Subsections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Debt Syndication */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <ImageCard src={Images.debtSyndication} alt="Debt Syndication" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1.1) Debt Syndication</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We help clients choose the right debt instruments, structure financing deals, and negotiate good terms with lenders. Our team has an abundant amount of experience with setting up syndicated loans, project financing, acquisition financing, and working capital arrangements.
                </p>
                <div className="bg-primary-50 rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">Our Services:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 font-bold">•</span>
                      <span>Structuring and arranging debt syndication transactions</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 font-bold">•</span>
                      <span>Identifying and engaging suitable lenders</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 font-bold">•</span>
                      <span>Managing due diligence and documentation</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 font-bold">•</span>
                      <span>Supporting legal, document and regulatory processes</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 font-bold">•</span>
                      <span>End-to-end transaction support</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-primary-600 font-bold">•</span>
                      <span>Advisory on debt refinancing and restructuring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Private Equity Syndication */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
              <div className="h-48 overflow-hidden">
                <ImageCard src={Images.privateEquity} alt="Private Equity Syndication" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1.2) Private Equity Syndication</h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  We serve as a bridge between institutional investors looking for investment possibilities and private equity firms looking for funding. Leveraging our extensive network of institutional investors, we identify and engage potential syndicate partners aligned with the investment opportunity.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">Services for Startups</h4>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600">•</span>
                        <span>Fundraising (equity/debt)</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600">•</span>
                        <span>Business plan development</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600">•</span>
                        <span>Pitch deck creation</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600">•</span>
                        <span>Investor Outreach</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600">•</span>
                        <span>Financial Analysis</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4">
                    <h4 className="font-bold text-gray-900 mb-3 text-sm">Services for VCs</h4>
                    <ul className="space-y-2 text-xs">
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600">•</span>
                        <span>Deal sourcing</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600">•</span>
                        <span>Due diligence</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600">•</span>
                        <span>Deal structuring</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600">•</span>
                        <span>Portfolio management</span>
                      </li>
                      <li className="flex items-start gap-2 text-gray-700">
                        <span className="text-primary-600">•</span>
                        <span>Fund Accounting</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MERGERS & ACQUISITIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="w-full lg:w-1/2">
              <div className="h-96 rounded-xl overflow-hidden shadow-xl">
                <ImageCard src={Images.mergerAcquisition} alt="Mergers & Acquisitions" />
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-4">
                <Building2 size={40} className="text-primary-600" />
                1.3) Mergers & Acquisitions
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We offer professional advice at every stage of the M&A process, from deal structuring to transaction execution. By providing thorough due diligence, valuation analysis, negotiation support, and transaction structuring, our team of qualified specialists make sure that our clients maximise value and accomplish their strategic goals.
              </p>
              <div className="bg-primary-50 rounded-xl p-8 border-l-4 border-primary-600">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Our M&A Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Identifying targets for M&A',
                    'Comprehensive due diligence',
                    'Valuation & negotiation',
                    'Documentation & legal advice',
                    'Post-merger integration',
                    'Divestitures & spin-offs'
                  ].map((service, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                      <span className="text-gray-700">{service}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. RESTRUCTURING */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-4">
            <Zap size={40} className="text-primary-600" />
            2) Restructuring
          </h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-4xl">
          Restructuring involves the strategic reorganization of a company’s operational, financial, or organizational framework to improve performance and sustainability. It is typically undertaken to enhance efficiency, realign business strategy, or address financial stress.
We assist businesses in restoring profitability and strengthening long-term viability through initiatives such as operational streamlining, divestment of non-core assets, debt refinancing or renegotiation, cost-optimization programs, and organizational realignment. Our approach focuses on identifying underlying challenges, optimizing resources, and positioning companies for sustainable growth in competitive markets, supported by careful planning, financial analysis, and effective stakeholder communication.

          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '2.1) Financial Restructuring',
                description: 'We assist in the process of altering the capital structure of a business with the goal of enhancing its financial stability and lowering financial risks. It might entail altering loan conditions, extending the time between payments, or turning debt into equity.',
                icon: '💰'
              },
              {
                title: '2.2) Operational Restructuring',
                description: 'We assist a company to restructure its operations in order to be more effective and efficient. To increase efficiency and cut expenses, it could entail streamlining procedures, rearranging departments, outsourcing non-core tasks, or implementing new technology.',
                icon: '⚙️'
              },
              {
                title: '2.3) Organizational Restructuring',
                description: 'We help businesses that are undergoing reorganisation that entails adjusting their internal organisational structure and reporting lines. This could mean decentralising decision-making, combining or removing departments, forming new divisions or teams, or putting new management structures in place.',
                icon: '🏢'
              },
              {
                title: '2.4) Strategic Restructuring',
                description: 'Strategic restructuring, which entails reinventing a company\'s complete business strategy, including its markets, products, and competitive positioning, is assisted by our experienced team. It could entail selling non-core businesses, buying new companies, expanding into new markets, or refocusing on promising new opportunities',
                icon: '🎯'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-xl p-8 border-l-4 border-primary-600">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Restructuring Services Include:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Guidance for companies facing financial distress',
                'Advising companies looking to improve financial performance',
                'Operational restructuring & cost optimization',
                'Spin-offs and divestitures',
                'Legal support',
                'Change management guidance'
              ].map((service, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 4. ADVISORY SERVICES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 flex items-center gap-4">
            <Briefcase size={40} className="text-primary-600" />
            3) Advisory Services
          </h2>
          <p className="text-lg text-gray-700 mb-12 leading-relaxed max-w-4xl">
            Our professionals assist businesses in several areas, such as capital structuring, financial planning and analysis, risk management, and fundraising. 
In order to meet financial goals, we evaluate the company's financial situation, look for areas that may be improved, and develop specialised methods.

          </p>

          <div className="space-y-12">
            {/* 3.1 Startup Advisory */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">3.1) Startup Advisory</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our startup advisory refers to the specialised services and direction offered to business owners and start-up firms to assist them in navigating the difficulties of launching and expanding a new enterprise.
                    In order to help startups with all facets of their business development, our seasoned professionals and consultants give their skills, knowledge of the sector, and networks.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Business Planning & Strategy',
                      'Fundraising & Investment Support',
                      'Market Entry & Go-to-Market Strategy',
                      'Operations & Scalability',
                      'Product Development & Innovation',
                      'Legal & Regulatory Compliance'
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2 h-80 rounded-xl overflow-hidden shadow-lg">
                <ImageCard src={Images.startupAdvisory} alt="Startup Advisory" />
              </div>
            </div>

            {/* 3.2 Capital Market Advisory */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 h-80 rounded-xl overflow-hidden shadow-lg">
                <ImageCard src={Images.capitalMarket} alt="Capital Market Advisory" />
              </div>
              <div className="w-full lg:w-1/2">
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">3.2) Capital Market Advisory</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our team offers expert services to help companies navigate the complexity of the financial markets, raise capital, and strengthen their capital structure. We help companies by determining their finance needs, developing funding strategies, and providing guidance on a variety of capital market operations and opportunities.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Capital Raising & Strategy',
                      'Initial Public Offerings',
                      'Debt Financing',
                      'Equity Offerings',
                      'Investor Relations',
                      'Market Research',
                      'Valuation',
                      'Capital Structure Optimization'
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full"></span>
                        <span className="text-gray-700 text-sm">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 3.3 Corporate Advisory */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-12">
              <div className="flex items-center gap-4 mb-6">
                <Users size={32} className="text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">3.3) Corporate Advisory</h3>
              </div>
              <p className="text-gray-700 mb-8 leading-relaxed">
              Our specialists provide a wide range of specialised services to businesses by supporting them in operational effectiveness, strategic decision-making, and overall performance. In order to offer perspectives, direction, and recommendations on all facets of the business' operations and strategy, we closely collaborate with corporate management and stakeholders.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  'Strategic Planning',
                  'Financial & Strategic Analysis',
                  'Valuation',
                  'Restructuring',
                  'Business Expansion',
                  'Capital Structure',
                  'Performance Improvement',
                  'Corporate Governance',
                  'Business Turnaround',
                  'Investor Relations',
                  'Stakeholder Management',
                  'ESOP Policy'
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-white rounded-lg p-3">
                    <span className="text-primary-600 font-bold">→</span>
                    <span className="text-gray-700">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 3.4 Family Office Advisory */}
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">3.4) Family Office Advisory</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                  The services we provide are tailored to the unique requirements and goals of our clients. Our professionals use their in-depth understanding of the business world, their grasp of finance, and their strategic perceptions to help corporate management make wise decisions and achieve long-term success. Our family office advisory services are highly personalised and tailored to each family's specific requirements and preferences.
                  </p>
                  <div className="space-y-3">
                    {[
                      'Wealth Management Solutions',
                      'Investment Management',
                      'Tax Guidance & Planning',
                      'Estate Planning Services',
                      'Philanthropic Advisory Services',
                      'Concierge Services'
                    ].map((service, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-primary-600 rounded-full"></span>
                        <span className="text-gray-700">{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/2 order-1 lg:order-2 h-80 rounded-xl overflow-hidden shadow-lg">
                <ImageCard src={Images.familyOffice} alt="Family Office Advisory" />
              </div>
            </div>

            {/* 3.5 Special Situations Advisory */}
            <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">3.5) Special Situations Advisory</h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
              We offer professional consulting services to businesses or investors who are dealing with unusual or complex situations and need advice and knowledge on a strategic level. Distressed circumstances, mergers and acquisitions, restructurings, divestitures, litigation, or other significant events can create exceptional conditions that need for specialised knowledge and customised solutions. We aid in providing special answers to the required problem.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Distressed Situations',
                    desc: 'Managing financial distress and turnaround situations'
                  },
                  {
                    title: 'Mergers & Acquisitions',
                    desc: 'Support for complex M&A transactions'
                  },
                  {
                    title: 'Capital Structure',
                    desc: 'Optimizing capital structure in complex scenarios'
                  },
                  {
                    title: 'Dispute Resolution',
                    desc: 'Litigation support and dispute resolution'
                  },
                  {
                    title: 'Crisis Management',
                    desc: 'Handling business crises and emergencies'
                  },
                  {
                    title: 'Risk Mitigation',
                    desc: 'Comprehensive risk assessment and mitigation'
                  }
                ].map((item, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-700 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 text-center">Our Approach</h2>
          <p className="text-lg text-gray-700 text-center mb-12 leading-relaxed max-w-3xl mx-auto">
            Our team uses customized strategies to give clients specialized solutions. Instead of using a one-size-fits-all approach, we carefully examine the unique needs, objectives, and situations of each client to create individualized plans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: '1. Research & Analysis',
                description: 'We conduct extensive research and analysis to develop a thorough grasp of the client\'s operations, sector, and financial situation.',
                icon: '🔍'
              },
              {
                title: '2. Customized Solutions',
                description: 'Using insights from in-depth investigation, we create financial solutions specifically matched to client needs.',
                icon: '⚡'
              },
              {
                title: '3. Network & Resources',
                description: 'Our professionals leverage their vast network of connections with investors, financial institutions, and industry experts.',
                icon: '🌐'
              },
              {
                title: '4. Implementation & Support',
                description: 'We work closely with clients to implement customized solutions while continuously offering assistance throughout execution.',
                icon: '✅'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
