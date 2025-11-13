# AutoVista Digital Showroom - Design Style Guide

## Design Philosophy

### Visual Language
AutoVista embodies a **Premium Automotive Aesthetic** that balances sophistication with accessibility. The design draws inspiration from high-end automotive showrooms and luxury retail environments, creating an immediate sense of quality and trust. Every element serves to elevate the vehicle browsing experience while maintaining intuitive usability.

### Color Palette
**Primary Colors:**
- **Charcoal Black** (#1a1a1a) - Primary text, navigation, premium accents
- **Pure White** (#ffffff) - Background, content areas, clean spaces
- **Steel Gray** (#6b7280) - Secondary text, borders, subtle elements

**Accent Colors:**
- **Racing Red** (#dc2626) - Call-to-action buttons, highlights, urgency indicators
- **Chrome Silver** (#e5e7eb) - Metallic accents, vehicle details, premium touches
- **Success Green** (#059669) - Availability indicators, confirmation states
- **Warning Amber** (#d97706) - Low stock alerts, important notifications

**Gradient Applications:**
- Subtle gradients using primary colors with low saturation
- No more than 30% saturation for any gradient element
- Chrome-to-black gradients for premium section backgrounds

### Typography
**Primary Font Pairing:**
- **Display/Headers**: "Inter" - Modern, geometric sans-serif for maximum clarity
- **Body Text**: "Inter" - Consistent font family for cohesive reading experience
- **Accent Text**: "JetBrains Mono" - Monospace for technical specifications

**Hierarchy:**
- H1: 3.5rem (56px) - Hero headlines, maximum impact
- H2: 2.5rem (40px) - Section headers, bold presence  
- H3: 1.875rem (30px) - Subsection titles, clear structure
- Body: 1rem (16px) - Optimal reading size for all content
- Small: 0.875rem (14px) - Captions, metadata, secondary info

### Layout & Grid System
**Grid Structure:**
- 12-column responsive grid with 24px gutters
- Maximum content width: 1440px
- Consistent 80px horizontal padding on large screens
- Mobile-first responsive breakpoints

**Spacing Scale:**
- Base unit: 8px
- Scale: 8px, 16px, 24px, 32px, 48px, 64px, 96px
- Consistent vertical rhythm throughout all components

## Visual Effects & Animation

### Core Libraries Integration
**Anime.js Implementation:**
- Smooth page transitions with 300ms duration
- Staggered animations for vehicle cards (100ms delay between items)
- Subtle hover effects with 200ms timing
- Scroll-triggered animations with 16px vertical translation

**ECharts.js Data Visualization:**
- Vehicle comparison charts with consistent color theming
- Interactive hover states revealing detailed specifications
- Responsive chart sizing for all device breakpoints
- Maximum 3 colors per chart, following primary palette

**Splide.js Carousels:**
- Vehicle image galleries with smooth transitions
- Auto-play with 4-second intervals
- Navigation dots with custom styling matching brand colors
- Touch-friendly swipe gestures for mobile

**Typed.js Text Effects:**
- Hero section tagline animation
- 50ms typing speed for optimal readability
- Cursor styling matching Racing Red accent color
- Loop functionality for continuous engagement

### Background Effects
**Shader Implementation:**
- Subtle particle system using p5.js
- Metallic chrome particles floating across sections
- Low opacity (15%) to maintain content readability
- Responsive particle density based on screen size

**Interactive Elements:**
- 3D tilt effects on vehicle cards using CSS transforms
- Depth shadows that respond to mouse position
- Smooth color transitions on interactive elements
- Micro-interactions for all clickable components

### Header & Navigation Effects
**Navigation Bar:**
- Glass morphism effect with 10% opacity background
- Smooth color transitions on scroll
- Sticky positioning with backdrop blur
- Active state indicators with Racing Red underline

**Hero Section:**
- Parallax scrolling with maximum 8% translation
- Gradient text effects on main headlines
- Animated call-to-action buttons with glow effects
- Typewriter animation for dynamic taglines

## Component Styling

### Vehicle Cards
**Design Specifications:**
- White background with subtle shadow (0 4px 12px rgba(0,0,0,0.1))
- 12px border radius for modern appearance
- Hover state: Lift effect with increased shadow
- Image aspect ratio: 16:10 for optimal vehicle display
- Overlay gradient on images for text readability

### Buttons & Interactive Elements
**Primary Button:**
- Racing Red background (#dc2626)
- White text with 600 font weight
- 12px border radius
- Hover: Darker red (#b91c1c) with smooth transition
- Padding: 12px 24px for optimal touch target

**Secondary Button:**
- Transparent background with Steel Gray border
- Charcoal Black text
- Same dimensions and hover effects as primary

### Forms & Inputs
**Input Fields:**
- Border: 2px solid Steel Gray (#6b7280)
- Focus state: Racing Red border with subtle glow
- Padding: 16px for comfortable text entry
- Border radius: 8px for modern appearance
- Error state: Warning Amber border with helper text

### Data Visualization
**Comparison Charts:**
- Maximum 3 data series per chart
- Consistent color usage from primary palette
- Interactive tooltips with detailed specifications
- Responsive design for mobile optimization
- Clean grid lines and axis labels

## Responsive Design Strategy

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px  
- Desktop: 1024px - 1439px
- Large Desktop: 1440px+

### Mobile Optimizations
- Touch-friendly button sizes (minimum 44px)
- Simplified navigation with hamburger menu
- Stacked layouts for comparison tables
- Optimized image sizes for faster loading
- Gesture-based interactions for carousels

### Performance Considerations
- Optimized images with WebP format
- Lazy loading for below-the-fold content
- Minimal JavaScript bundle size
- CSS animations over JavaScript where possible
- Progressive enhancement for advanced features

## Brand Consistency

### Logo Usage
- AutoVista wordmark in Inter Bold
- Consistent sizing across all pages
- Proper spacing and clear space requirements
- Monochrome versions for different backgrounds

### Iconography
- Consistent stroke width (2px) for all icons
- Steel Gray color for standard icons
- Racing Red for active/selected states
- Proper alignment with text baseline

### Photography Style
- High-contrast, professional automotive photography
- Consistent lighting and color grading
- Vehicle-focused compositions
- Clean backgrounds without distractions
- Multiple angles showcasing key features