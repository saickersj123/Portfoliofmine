# Flynn Park - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS v4. This website showcases Flynn Park's professional experience as a DevOps/Cloud Engineer and Systems Administrator.

## 🚀 Features

- **Modern Design**: Clean, professional design with dark/light theme support
- **Responsive**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal performance
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Accessible**: WCAG compliant with proper ARIA labels
- **Interactive**: Smooth animations and transitions

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **State Management**: Zustand
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Linting**: ESLint + Prettier

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation component
│   ├── Footer.tsx      # Footer component
│   └── theme-provider.tsx # Theme management
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── About.tsx       # About page
│   ├── Experience.tsx  # Work experience
│   ├── Projects.tsx    # Portfolio projects
│   ├── Skills.tsx      # Skills showcase
│   └── Contact.tsx     # Contact form
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
└── App.tsx             # Main app component
```

## 🎨 Design System

The website uses a consistent design system with:

- **Color Scheme**: CSS custom properties for theming
- **Typography**: Consistent font hierarchy
- **Spacing**: Standardized spacing scale
- **Components**: Reusable UI components
- **Animations**: Smooth transitions and hover effects

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors
- `npm run format` - Format code with Prettier

## 📱 Pages Overview

### Home
- Hero section with introduction
- Key statistics and achievements
- Service highlights
- Call-to-action

### About
- Professional summary
- Education details
- Certifications
- Core values

### Experience
- Work history timeline
- Key achievements
- Technologies used
- Performance metrics

### Projects
- Portfolio showcase
- Project descriptions
- Technologies and features
- Links to code and demos

### Skills
- Categorized skill sets
- Proficiency levels
- Visual progress indicators
- Core competencies

### Contact
- Contact information
- Contact form
- Social media links
- Professional interests

## 🎯 Key Features

### Theme Support
- Dark/light mode toggle
- System preference detection
- Persistent theme storage

### Responsive Design
- Mobile-first approach
- Breakpoint optimization
- Touch-friendly interactions

### Performance
- Code splitting
- Lazy loading
- Optimized images
- Minimal bundle size

### Accessibility
- Semantic HTML
- ARIA labels
- Keyboard navigation
- Screen reader support

## 🔧 Customization

### Colors
Update the CSS custom properties in `src/index.css`:

```css
:root {
  --primary: oklch(0.208 0.042 265.755);
  --primary-foreground: oklch(0.984 0.003 247.858);
  /* ... other colors */
}
```

### Content
Update the content in each page component to reflect your information:

- Personal details in `About.tsx`
- Work experience in `Experience.tsx`
- Projects in `Projects.tsx`
- Skills in `Skills.tsx`
- Contact information in `Contact.tsx`

### Styling
Custom styles can be added to `src/App.css` or using Tailwind classes directly in components.

## 📦 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Deploy Options

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist/` folder
- **GitHub Pages**: Use GitHub Actions
- **AWS S3**: Upload to S3 bucket with CloudFront

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: saickersj123@gmail.com
- **GitHub**: [github.com/saickersj123](https://github.com/saickersj123)
- **Phone**: (519)-965-7954

---

Built with ❤️ by Flynn Park
