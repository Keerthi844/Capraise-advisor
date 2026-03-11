# Capraise Advisors - Website

A modern, responsive website for Capraise Advisors investment banking and advisory firm built with React, Tailwind CSS, and Vite.

## Features

- 🎨 Beautiful green color scheme with modern design
- 📱 Fully responsive layout (mobile, tablet, desktop)
- 🚀 Fast performance with Vite
- 🎯 Multiple pages: Home, About, Services, Team, Careers, Contact
- 🔄 Smooth routing with React Router
- ✨ Interactive components and animations
- 📝 Contact and career application forms
- 🌐 Social media integration

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation bar with mobile menu
│   └── Footer.jsx         # Footer with links and contact info
├── pages/
│   ├── Home.jsx           # Homepage with hero and services preview
│   ├── AboutUs.jsx        # About page with mission, vision, values
│   ├── Services.jsx       # Comprehensive services listing
│   ├── Team.jsx           # Team members and leadership
│   ├── Careers.jsx        # Career opportunities and application form
│   └── Contact.jsx        # Contact form and information
├── layouts/               # Layout components (for future expansion)
├── constants/             # Constants and configurations
├── App.jsx                # Main app with routing
├── main.jsx               # React entry point
└── index.css              # Global styles with Tailwind
```

## Installation

1. **Clone or navigate to the project directory**
   ```bash
   cd Newwebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## Technologies Used

- **React 18.2.0** - UI library
- **React Router DOM 6.20.0** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Vite 5.0.8** - Build tool and dev server
- **Lucide React 0.344.0** - Icon library

## Tailwind CSS Configuration

The project uses a custom green color palette:

```javascript
colors: {
  primary: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#145231',
  }
}
```

## Pages Overview

### Home
- Hero section with call-to-action
- "We Aspire to Serve" section
- "Why Choose Us" highlights
- Services preview
- CTA section

### About Us
- Company background
- Mission and Vision statements
- Team expertise
- Core values

### Services
- Detailed service descriptions with expandable sections
- Fundraising (Debt Syndication, Private Equity)
- M&A advisory
- Restructuring services
- Advisory services (Startup, Corporate, Capital Market, Family Office, Special Situations)
- Our approach section

### Team
- Leadership team profiles
- Key expertise for each member
- Team values and collective strength

### Careers
- Why join us section
- Benefits and culture
- Career application form
- Call to action

### Contact
- Contact information
- Message form
- Social media links
- Response time information

## Features Implemented

✅ Responsive Navigation Bar with mobile menu toggle
✅ Expandable service sections
✅ Professional team profiles
✅ Functional contact and career forms
✅ Green color scheme throughout
✅ Smooth scrolling and transitions
✅ Social media integration
✅ Mobile-first responsive design
✅ Clean, maintainable folder structure
✅ Tailwind CSS utility classes

## Customization

### Updating Colors
Edit the Tailwind config in `tailwind.config.js` to change the primary green color or add new colors.

### Adding New Pages
1. Create a new file in `src/pages/`
2. Add the route in `src/App.jsx`
3. Link to the page in the Navbar

### Modifying Content
All content can be updated directly in the component files. The structure makes it easy to locate and modify specific sections.

## Building for Production

```bash
npm run build
```

This creates an optimized `dist` folder ready for deployment.

## Deployment

The built `dist` folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any other static hosting provider

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Future Enhancements

- Blog section
- Case studies/Success stories
- Client testimonials
- Team member bios with photos
- Service request workflow
- FAQ section
- Multi-language support
- Dark mode toggle

## License

© 2024 Capraise Advisors. All rights reserved.

## Support

For questions or issues, please contact info@capraise.com
# Capraise-advisor
