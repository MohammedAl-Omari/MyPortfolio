# 🚀 Mohammed Al-Omari | Portfolio

A modern, responsive portfolio website built with React 19, TypeScript, and Tailwind CSS v4. Features a sleek glassmorphism design, smooth scroll animations, and a dynamic dark/light mode toggle.

[![Live Demo](https://img.shields.io/badge/demo-live-blue?style=flat-square)](https://mohammedal-omari.github.io/MyPortfolio/#/)

##  Features

- Modern UI/UX**: Glassmorphism design with backdrop blur effects
- Dark Mode**: Seamless dark/light theme toggle with smooth transitions
- Fully Responsive**: Optimized for all devices and screen sizes
- Smooth Animations**: Scroll-based reveal animations using Framer Motion
- Fast Performance**: Built with Vite for lightning-fast development and builds
- Contact Form**: Functional contact form integrated with Formspree
- Type-Safe**: Written in TypeScript for better code quality and developer experience

##  Tech Stack

### Core
- **React 19** - UI library
- **TypeScript** - Type safety and better DX
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing

### Styling & UI
- **Tailwind CSS v4** - Utility-first CSS framework
- **Framer Motion** - Animation library for scroll reveals
- **Lucide React** - Beautiful icon library

### Tools & Integrations
- **Formspree** - Contact form backend
- **ESLint** - Code linting
- **PostCSS** - CSS processing

##  Project Structure

```
MyPortfolio/
├── public/              # Static assets
├── src/
│   ├── Components/      # Reusable components
│   │   ├── CounterApp.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Reveal.tsx
│   │   └── ...
│   ├── data/           # Project data and content
│   │   └── projects.ts
│   ├── Pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── types/          # TypeScript type definitions
│   │   └── Project.ts
│   ├── App.tsx        
│   ├── main.tsx        
│   └── index.css      
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── vite.config.ts
```

##  Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MohammedAl-Omari/MyPortfolio.git
   cd MyPortfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173`

##  Customization

### Adding Your Own Projects

Edit `src/data/projects.ts`:

```typescript
export const projects: Project[] = [
  {
    id: 1,
    title: "Your Project Title",
    description: "Your project description",
    tags: ["React", "TypeScript", "Tailwind"],
    link: "https://your-project-url.com",  // Optional
    github: "https://github.com/yourusername/repo"  // Optional
  },
  // Add more projects...
];
```

### Updating Personal Information

- **About page**: Edit `src/Pages/About.tsx`
- **Contact info**: Update links in `src/Pages/Contact.tsx`
- **Skills**: Modify skill categories in `src/Pages/About.tsx`

### Customizing Theme Colors

Edit `tailwind.config.js` to change color schemes:

```javascript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

##  Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |

##  Deployment

This portfolio can be easily deployed to:


- **GitHub Pages**
  - Configure `vite.config.ts` with the correct base path
  - Use `gh-pages` package for deployment



- [Formspree](https://formspree.io/) - Form backend solution

---
