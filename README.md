# Find Jobs App --- Frontend Assessment

A **pixel-perfect job search application** built with **React,
TypeScript, and Tailwind CSS**, designed to demonstrate strong UI
implementation, performance optimization, and clean frontend
architecture.

## 🎯 Overview

This project is a **high-fidelity implementation of a job search
platform UI**, closely matching the provided Figma design. It focuses on
precision in layout, typography, and spacing while delivering a smooth
and intuitive filtering experience.

Users can browse, search, and filter job listings based on multiple
criteria such as keywords, location, job type, and work mode.

## ✨ Key Features

### UI & UX

-   Pixel-perfect design matching Figma specifications
-   Fully responsive layout
-   Clean, modern, and accessible UI
-   Empty-state handling

### Search & Filtering

-   Keyword search (job title & company)
-   Location filtering
-   Job type filtering
-   Work mode filtering (Remote, Hybrid, Onsite)
-   Tag-based filtering
-   Real-time filtering

### Job Listings

-   Featured, Recommended, and Latest sections
-   Promoted job badges
-   Applicant count and posted time
-   Bookmark and apply actions

## 🛠️ Tech Stack

-   React 18
-   TypeScript
-   Vite
-   Tailwind CSS
-   Radix UI
-   Lucide React
-   React Router DOM

## 📁 Project Structure

```
TalentVare/
├── src/
│   ├── components/
│   │   ├── ui/              # Reusable UI components (buttons, inputs, etc.)
│   │   ├── Header.tsx       # Application header with navigation
│   │   ├── Sidebar.tsx      # User profile sidebar
│   │   ├── SearchHero.tsx   # Search bar and filters
│   │   ├── JobCard.tsx      # Individual job card component
│   │   ├── JobSection.tsx   # Job section container
│   │   └── EmptyState.tsx   # Empty state component
│   ├── data/
│   │   └── jobs.json        # Job listings data
│   ├── pages/
│   │   ├── Index.tsx        # Main page
│   │   └── NotFound.tsx     # 404 page
│   ├── types/
│   │   └── job.ts           # TypeScript interfaces
│   ├── App.tsx              # Root component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles
├── public/
│   ├── images/              # Optimized images and icons
│   └── fonts/               # Custom fonts
└── package.json
```
## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/UmerKhan1998/TalentVare
cd TalentVare
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun dev
```

4. Open your browser and navigate to `http://localhost:8080`

### Build for Production

```bash
npm run build
# or
bun run build
```

### Preview Production Build

```bash
npm run preview
# or
bun preview
```
## 🎨 Design Implementation

### Pixel-Perfect Approach

- **Exact Spacing**: All margins, paddings, and gaps match the Figma specifications
- **Typography**: Custom font implementation with precise font sizes, weights, and line heights
- **Color System**: CSS variables for consistent theming throughout the application
- **Component Alignment**: Flexbox and Grid layouts for precise positioning
- **Image Quality**: Optimized image rendering with crisp-edges for sharp visuals
- **Default Zoom**: Application loads at 90% zoom for optimal viewing experience

### Performance Optimizations

1. **Icons**: SVG icons optimized for minimal file size
2. **Fonts**: Custom fonts loaded efficiently with font-display: swap
3. **Images**: Image rendering optimization prevents pixelation and blur
4. **Code Splitting**: Vite's automatic code splitting for faster load times
5. **Memoization**: React.useMemo used for expensive filtering operations

## 🔍 Key Components

### SearchHero Component
Handles all search and filtering functionality with interactive dropdowns for location and job type selection.

### JobCard Component
Displays individual job listings with:
- Company logo
- Job title and company name
- Location with work mode (Remote/Hybrid/Onsite)
- Posted time and applicant count
- Apply button and bookmark functionality
- Promoted badge for featured jobs

### Filtering System
Multi-criteria filtering supporting:
- Text-based keyword search
- Location selection
- Job type selection
- Tag-based filtering
- Real-time result updates

## 📊 Data Structure

Jobs are stored in JSON format with the following structure:

```typescript
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  postedTime: string;
  applicants: number;
  isPromoted: boolean;
  category: "featured" | "recommended" | "latest";
  tags: string[];
  jobType: string;
  workMode: "Remote" | "Hybrid" | "Onsite";
}
```

## 🌐 Deployment

The application is deployed on Vercel.

### Deployment Instructions

**For Vercel:**
```bash
npm run build
vercel --prod
```

**Live Demo**: https://talent-vare-black.vercel.app/
## 📝 Assessment Requirements Checklist

### 1. UI Implementation ✅
- ✅ **Pixel-Perfect Design**: Exact alignment, spacing, and styling matching the Figma mockup
- ✅ **Optimized Icons**: SVG icons with minimal size and maximum performance
- ✅ **Optimized Fonts**: Custom fonts loaded efficiently without sacrificing quality
- ✅ **Visual Quality**: Sharp, crisp images and icons throughout the application

### 2. Deployment ✅
- ✅ **Hosting**: Ready for deployment on third-party hosting services (Vercel)
- ✅ **Build Configuration**: Optimized production build with Vite
- ✅ **Deployment Link**: https://talent-vare-black.vercel.app/

### 3. Code Review ✅
- ✅ **Well-Structured Code**: Modular component architecture
- ✅ **Documentation**: Comprehensive README and inline comments
- ✅ **Best Practices**: TypeScript, React hooks, performance optimization
- ✅ **Code Quality**: Clean, readable, and maintainable codebase
- ✅ **Repository URL**: https://github.com/UmerKhan1998/TalentVare

## 🎯 Assessment Highlights

### Pixel-Perfect Implementation
Every element has been carefully crafted to match the design specifications:
- Precise spacing and alignment
- Exact font sizes and weights
- Accurate color matching using CSS variables
- Responsive layouts maintaining design integrity

### Performance Optimization
- **Icons**: Optimized SVG icons with minimal file size
- **Fonts**: Custom font loading with font-display: swap strategy
- **Images**: Image rendering optimization for sharp, crisp visuals
- **Code Splitting**: Automatic optimization via Vite
- **Lazy Loading**: Efficient component rendering

### Code Quality
- **TypeScript**: Full type safety across all components
- **Component Structure**: Modular, reusable, and maintainable
- **Code Organization**: Clear separation of concerns
- **Best Practices**: Following React and TypeScript best practices
- **Performance**: Memoization and optimization techniques

## 🤝 Code Quality Standards

- **TypeScript**: Strict typing for all components and functions
- **Component Structure**: Modular, reusable components
- **Code Organization**: Clear separation of concerns
- **Naming Conventions**: Descriptive variable and function names
- **Comments**: Strategic comments for complex logic
- **Best Practices**: React hooks, performance optimization, and accessibility

## 📋 Features Implemented

1. **Header Component**
   - Navigation menu
   - Search functionality
   - User profile display

2. **Sidebar Component**
   - User profile card
   - Statistics display
   - Calendar section

3. **Search & Filter System**
   - Keyword search
   - Location dropdown
   - Job type dropdown
   - Tag-based filters
   - Real-time filtering

4. **Job Listings**
   - Featured jobs section
   - Recommended jobs section
   - Latest jobs section
   - Job cards with all details
   - Work mode display (Remote/Hybrid/Onsite)

5. **Interactive Elements**
   - Functional dropdowns
   - Search button
   - Apply buttons
   - Bookmark functionality
   - Filter tags

## 🔧 Technical Decisions

### Why Vite?
- Lightning-fast development server
- Optimized production builds
- Built-in TypeScript support

### Why Radix UI?
- Accessible components out of the box
- Unstyled primitives for custom styling
- Excellent TypeScript support

### Why Tailwind CSS?
- Rapid UI development
- Consistent design system
- Optimal production bundle size

## 📄 License

This project is part of a frontend assessment and is for evaluation purposes only.

## 👤 Contact Information

**Repository**: https://github.com/UmerKhan1998/TalentVare
**Live Demo**: https://talent-vare-black.vercel.app/   
**Email**: muk9298@gmail.com
