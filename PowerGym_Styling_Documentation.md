# PowerGym Styling and Design System Documentation

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color Palette](#2-color-palette)
3. [Typography](#3-typography)
4. [Layout System](#4-layout-system)
5. [Component Styling](#5-component-styling)
   - [5.1 Buttons](#51-buttons)
   - [5.2 Cards](#52-cards)
   - [5.3 Forms](#53-forms)
   - [5.4 Navigation](#54-navigation)
6. [Responsive Design](#6-responsive-design)
7. [Animation and Transitions](#7-animation-and-transitions)
8. [Icons and Images](#8-icons-and-images)
9. [CSS Architecture](#9-css-architecture)
10. [Best Practices](#10-best-practices)

## 1. Design Philosophy

The PowerGym website follows a modern, professional design philosophy with a focus on creating a visually appealing and user-friendly experience. The design is characterized by:

- **Bold and Energetic**: The use of strong colors and dynamic elements reflects the energy and strength associated with fitness
- **Clean and Focused**: Clear visual hierarchy and ample white space help users focus on the most important content
- **Professional and Trustworthy**: The design conveys professionalism and reliability, important qualities for a fitness business
- **Accessible and Inclusive**: The design is accessible to all users, regardless of their abilities or devices

The website uses a consistent design language throughout all sections, creating a cohesive and unified experience.

## 2. Color Palette

The PowerGym website uses a color palette based on red and black, with supporting neutral colors:

### Primary Colors

- **Red (Primary Brand Color)**: `#dc2626` (red-600)
  - Used for primary buttons, accents, and highlights
  - Variations: `#b91c1c` (red-700), `#991b1b` (red-800), `#7f1d1d` (red-900)

- **Black (Background)**: `#000000`
  - Used for the main background
  - Variations: `#111827` (gray-900), `#1f2937` (gray-800), `#374151` (gray-700)

### Secondary Colors

- **White**: `#ffffff`
  - Used for text on dark backgrounds and some UI elements
  - Variations: `#f9fafb` (gray-50), `#f3f4f6` (gray-100)

- **Gray**: Various shades from Tailwind's gray palette
  - Used for secondary text, borders, and backgrounds
  - Key shades: `#9ca3af` (gray-400), `#6b7280` (gray-500), `#4b5563` (gray-600)

### Accent Colors

- **Green**: `#16a34a` (green-600)
  - Used for success states and indicators
  - Example: The success icon in the membership form

- **Yellow**: `#facc15` (yellow-400)
  - Used for ratings and reviews
  - Example: The star ratings in the testimonials section

### Color Usage Guidelines

- Use red for primary actions, important highlights, and brand elements
- Use black and dark grays for backgrounds and containers
- Use white and light grays for text and icons on dark backgrounds
- Use color consistently and purposefully to guide the user's attention
- Ensure sufficient contrast between text and background colors for readability

## 3. Typography

The PowerGym website uses Tailwind's default font stack, which provides a clean, modern, and readable typography system:

### Font Family

- **Sans-serif**: The default font stack includes system fonts like SF Pro, Segoe UI, and Roboto
- This ensures the text looks native and performs well on all devices

### Font Sizes

The website uses Tailwind's font size scale:

- **xs**: 0.75rem (12px)
- **sm**: 0.875rem (14px)
- **base**: 1rem (16px)
- **lg**: 1.125rem (18px)
- **xl**: 1.25rem (20px)
- **2xl**: 1.5rem (24px)
- **3xl**: 1.875rem (30px)
- **4xl**: 2.25rem (36px)
- **5xl**: 3rem (48px)
- **6xl**: 3.75rem (60px)

### Font Weights

- **normal**: 400
- **medium**: 500
- **bold**: 700
- **extrabold**: 800

### Typography Usage

- **Headings**: Bold or extrabold, larger sizes (2xl to 6xl), often with red accents
- **Body Text**: Normal weight, base or lg size, usually in white or gray
- **Buttons and CTAs**: Bold or medium weight, base or lg size
- **Labels and Small Text**: Normal or medium weight, sm or xs size

### Responsive Typography

Font sizes are adjusted for different screen sizes using Tailwind's responsive prefixes:

```html
<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold">
  BUILD YOUR <span className="text-red-600">BODY</span>
</h1>
```

This creates a heading that is 2.25rem on mobile, 3rem on tablets, and 3.75rem on desktop.

## 4. Layout System

The PowerGym website uses a combination of Tailwind's container, spacing, and grid systems to create consistent layouts:

### Container

The `container` class is used to center content and provide consistent padding:

```html
<div className="container mx-auto px-4">
  <!-- Content -->
</div>
```

This creates a centered container with horizontal padding of 1rem (16px) on all screen sizes.

### Spacing

The website uses Tailwind's spacing scale for margins, padding, and gaps:

- **0**: 0px
- **1**: 0.25rem (4px)
- **2**: 0.5rem (8px)
- **3**: 0.75rem (12px)
- **4**: 1rem (16px)
- **6**: 1.5rem (24px)
- **8**: 2rem (32px)
- **12**: 3rem (48px)
- **16**: 4rem (64px)
- **20**: 5rem (80px)

Common spacing patterns include:

- Section padding: `py-20` (5rem top and bottom)
- Component margins: `mb-8` (2rem bottom), `mt-16` (4rem top)
- Grid gaps: `gap-8` (2rem between grid items)

### Grid System

The website uses CSS Grid for layout, with responsive column counts:

```html
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <!-- Grid items -->
</div>
```

This creates a grid with one column on mobile, two columns on tablets, and four columns on desktop, with a gap of 2rem between items.

### Flexbox

Flexbox is used for smaller-scale layouts and alignment:

```html
<div className="flex justify-between items-center">
  <!-- Flex items -->
</div>
```

This creates a flex container with items aligned horizontally with space between them and vertically centered.

## 5. Component Styling

### 5.1 Buttons

The website uses several button styles:

#### Primary Button

```html
<button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300">
  GET STARTED
</button>
```

#### Secondary Button

```html
<button className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-md font-bold text-lg transition duration-300 flex items-center">
  <Play size={16} className="mr-2" />
  TOUR OUR GYM
</button>
```

#### Gradient Button

```html
<button className="relative group overflow-hidden bg-gradient-to-br from-red-600 to-red-800 text-white px-8 py-2.5 rounded-md font-medium transition-all duration-300 shadow-lg hover:shadow-red-600/30">
  <span className="relative z-10">Join Now</span>
  <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-900 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
  <span className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
</button>
```

### 5.2 Cards

The website uses several card styles:

#### Feature Card

```html
<div className="flex flex-col items-center p-6 bg-black bg-opacity-80 rounded-lg transition-transform duration-300 hover:transform hover:scale-105">
  <div className="text-red-600 mb-4">
    {icon}
  </div>
  <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
  <p className="text-gray-300 text-center">{description}</p>
</div>
```

#### Class Card

```html
<div className="group bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
  <div className="relative h-64 overflow-hidden">
    <img 
      src={classItem.image} 
      alt={classItem.title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute top-4 right-4 bg-red-600 text-white text-sm font-bold px-3 py-1 rounded">
      {classItem.category}
    </div>
  </div>
  <div className="p-6">
    <h3 className="text-xl font-bold text-white mb-2">{classItem.title}</h3>
    <p className="text-gray-300 mb-4">Trainer: {classItem.trainer}</p>
    <div className="flex justify-between text-sm text-gray-400">
      <span>{classItem.schedule}</span>
      <span>{classItem.duration}</span>
    </div>
  </div>
</div>
```

### 5.3 Forms

The website uses consistent form styling:

#### Input Fields

```html
<input
  type="text"
  id="name"
  name="name"
  value={formData.name}
  onChange={handleChange}
  required
  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
  placeholder="John Doe"
/>
```

#### Select Fields

```html
<select
  id="plan"
  name="plan"
  value={formData.plan}
  onChange={handleChange}
  required
  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
>
  <option value="basic">Basic Plan - $29.99/month</option>
  <option value="premium">Premium Plan - $49.99/month</option>
  <option value="elite">Elite Plan - $79.99/month</option>
</select>
```

#### Textarea Fields

```html
<textarea
  id="message"
  name="message"
  value={formData.message}
  onChange={handleChange}
  rows={4}
  className="w-full bg-gray-800 text-white border border-gray-700 rounded-md px-4 py-3 focus:outline-none focus:border-red-600 transition-colors"
  placeholder="Tell us about your fitness goals or any questions you have..."
></textarea>
```

### 5.4 Navigation

The navigation bar has several states and styles:

#### Desktop Navigation

```html
<nav className={`fixed w-full z-50 transition-all duration-300 ${
  isScrolled
    ? 'bg-gradient-to-r from-black to-red-950 shadow-[0_4px_30px_rgba(220,38,38,0.2)] py-2'
    : 'bg-transparent py-4'
}`}>
  <!-- Navigation content -->
</nav>
```

#### Navigation Links

```html
<a
  href={href}
  className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full ${
    isActive
      ? 'text-white bg-gradient-to-r from-red-700 to-red-900 shadow-md'
      : 'text-gray-200 hover:text-white'
  }`}
>
  <span className="relative z-10">{children}</span>
  {!isActive && (
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 group-hover:w-1/2 transition-all duration-300"></span>
  )}
</a>
```

## 6. Responsive Design

The website uses Tailwind's responsive prefixes to create different layouts for different screen sizes:

### Breakpoints

- **sm**: 640px and above
- **md**: 768px and above
- **lg**: 1024px and above
- **xl**: 1280px and above
- **2xl**: 1536px and above

### Common Responsive Patterns

#### Responsive Grid

```html
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  <!-- Grid items -->
</div>
```

#### Responsive Typography

```html
<h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
  ABOUT <span className="text-red-600">POWERGYM</span>
</h2>
```

#### Responsive Visibility

```html
<div className="hidden md:block">
  <!-- Visible only on md screens and above -->
</div>
<div className="md:hidden">
  <!-- Visible only on screens smaller than md -->
</div>
```

#### Responsive Flexbox

```html
<div className="flex flex-col md:flex-row justify-between items-center">
  <!-- Flex items -->
</div>
```

## 7. Animation and Transitions

The website uses CSS transitions and animations to create a dynamic and engaging user experience:

### Transitions

```html
<button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-300">
  GET STARTED
</button>
```

This button has a smooth transition when hovering, with a duration of 300ms.

### Hover Effects

```html
<div className="group bg-gray-900 rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
  <div className="relative h-64 overflow-hidden">
    <img 
      src={classItem.image} 
      alt={classItem.title} 
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
  </div>
</div>
```

This card scales up slightly when hovered, and the image inside it scales up more, creating a zoom effect.

### Animations

```html
<a href="#about" className="text-white animate-bounce mb-8">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
    <path d="m6 9 6 6 6-6"/>
  </svg>
</a>
```

This down arrow has a bouncing animation to draw attention to it.

## 8. Icons and Images

### Icons

The website uses Lucide React for icons:

```jsx
import { Dumbbell, Clock, Award, Users } from 'lucide-react';

// Usage
<Dumbbell size={40} />
```

Icons are typically styled with a size and color:

```html
<div className="text-red-600 mb-4">
  <Dumbbell size={40} />
</div>
```

### Images

Images are sourced from Pexels and are used with appropriate alt text and styling:

```html
<img 
  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg"
  alt="Gym background" 
  className="w-full h-full object-cover"
/>
```

Common image styling patterns include:

- `object-cover`: Ensures the image covers its container while maintaining aspect ratio
- `w-full h-full`: Makes the image fill its container
- `rounded-lg`: Adds rounded corners to the image
- `transition-transform duration-500 group-hover:scale-110`: Creates a zoom effect on hover

## 9. CSS Architecture

The website uses Tailwind CSS for styling, which follows a utility-first approach:

### Tailwind Configuration

The Tailwind configuration is defined in `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

### CSS Imports

The global CSS file (`index.css`) imports Tailwind's base, components, and utilities:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### Utility Classes

Styling is applied using Tailwind's utility classes directly in the JSX:

```html
<div className="bg-black min-h-screen text-white">
  <!-- Content -->
</div>
```

### Component-Specific Styling

Component-specific styling is applied using Tailwind's utility classes and conditional classes:

```html
<a
  href={href}
  className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-full ${
    isActive
      ? 'text-white bg-gradient-to-r from-red-700 to-red-900 shadow-md'
      : 'text-gray-200 hover:text-white'
  }`}
>
  <!-- Content -->
</a>
```

## 10. Best Practices

### Consistency

- Use consistent spacing, typography, and colors throughout the website
- Follow the same patterns for similar components
- Use the same animation durations and easing functions for similar animations

### Performance

- Use appropriate image sizes and formats
- Minimize the use of complex animations and transitions
- Use Tailwind's JIT (Just-In-Time) mode to reduce CSS bundle size

### Accessibility

- Ensure sufficient color contrast for text readability
- Use semantic HTML elements
- Add appropriate ARIA attributes for interactive elements
- Test with keyboard navigation and screen readers

### Maintainability

- Use meaningful class names and consistent patterns
- Group related utility classes together
- Use variables for repeated values
- Document complex or unusual styling patterns
