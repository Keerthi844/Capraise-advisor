// Stock images from free services for Capraise Advisors Website
import logo from './images/logo.jpg'
import passionateCulture from './images/Passionate Culture.jpg'
import revolutionaryImpact from './images/Revolutionary Impact.jpg'
import careerGrowth from './images/career growth.jpg'

export const Images = {
  // Business & Strategy
  tailoredServices: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
  analyticalApproach: 'https://images.unsplash.com/photo-1551288049-bebda4e267f71?w=500&h=400&fit=crop',
  robustNetwork: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&h=400&fit=crop',
  oneOnOne: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
  expertTeam: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',

  // Services
  fundraising: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
  restructuring: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
  advisory: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&h=400&fit=crop',
  debtSyndication: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
  privateEquity: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
  mergerAcquisition: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
  startupAdvisory: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&h=400&fit=crop',
  capitalMarket: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
  corporateAdvisory: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=400&fit=crop',
  familyOffice: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
  specialSituations: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',

  // About Page
  mission: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
  vision: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
  teamWork: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&h=400&fit=crop',
  
  // Industries/Services
  travelAviation: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=500&h=400&fit=crop',
  businessServices: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
  consumerProducts: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=500&h=400&fit=crop',
  financialServices: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
  energy: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=500&h=400&fit=crop',
  logistics: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=400&fit=crop',
  
  // Team Members
  teamDefault: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=300&fit=crop',
  
  // Careers
  careersHero: careerGrowth,
  culture: revolutionaryImpact,
  passionateCultureCareers: passionateCulture,
  
  // Contact
  network: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop',
  partnership: 'https://images.unsplash.com/photo-1552664688-cf412ec27db2?w=500&h=400&fit=crop',
  success: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=400&fit=crop',
  contactLocation: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop',
  contactEmail: 'https://images.unsplash.com/photo-1516321318423-f06f70a504f9?w=500&h=400&fit=crop',
  contactPhone: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&h=400&fit=crop',
  
  // Logo
  logo: logo,
}

// Image component with fallback
export const ImageCard = ({ src, alt, className = "w-full h-full object-cover" }) => (
  <img 
    src={src} 
    alt={alt} 
    className={className}
    onError={(e) => {
      e.target.src = 'https://via.placeholder.com/500x400?text=Image+Loading'
    }}
  />
)
