# PowerGym Technical Documentation

## Table of Contents

1. [Component Architecture](#1-component-architecture)
2. [State Management](#2-state-management)
3. [Technical Implementation Details](#3-technical-implementation-details)
   - [3.1 Navbar Component](#31-navbar-component)
   - [3.2 Membership Form Modal](#32-membership-form-modal)
   - [3.3 Data Structures](#33-data-structures)
4. [Responsive Design Implementation](#4-responsive-design-implementation)
5. [Performance Considerations](#5-performance-considerations)
6. [Accessibility Features](#6-accessibility-features)
7. [Code Conventions](#7-code-conventions)
8. [Build and Bundling](#8-build-and-bundling)
9. [Testing Strategy](#9-testing-strategy)
10. [Troubleshooting](#10-troubleshooting)

## 1. Component Architecture

The PowerGym website follows a component-based architecture using React functional components with TypeScript. Each section of the website is implemented as a separate component, promoting code reusability and maintainability.

### Component Hierarchy

```
App
├── Navbar
│   └── MembershipForm (Modal)
├── Hero
├── About
│   └── Feature (Reusable component)
├── Classes
├── Trainers
│   └── TrainerCard (Reusable component)
├── Pricing
│   └── PricingCard (Reusable component)
├── Testimonials
├── Contact
│   └── ContactInfo (Reusable component)
└── Footer
    └── SocialIcon (Reusable component)
```

Each component is responsible for rendering a specific section of the website and managing its own state. Components communicate with each other through props and, in some cases, through shared state.

## 2. State Management

The PowerGym website uses React's built-in state management solutions:

- **useState**: For component-level state management
- **useEffect**: For side effects like scroll event listeners and data fetching

### Key State Variables

- **Navbar Component**:
  - `isOpen`: Controls the visibility of the mobile menu
  - `isScrolled`: Tracks whether the user has scrolled down the page
  - `activeLink`: Tracks the currently active section
  - `showMembershipForm`: Controls the visibility of the membership form modal

- **MembershipForm Component**:
  - `formData`: Stores the user's form inputs
  - `step`: Tracks the current step in the multi-step form
  - `isSubmitted`: Tracks whether the form has been submitted

- **Classes Component**:
  - `filter`: Stores the currently selected class category filter

- **Testimonials Component**:
  - `activeIndex`: Tracks the currently displayed testimonial

## 3. Technical Implementation Details

### 3.1 Navbar Component

The Navbar component is a complex component that handles several responsibilities:

1. **Responsive Navigation**: Displays a horizontal menu on desktop and a hamburger menu on mobile
2. **Scroll Tracking**: Changes appearance when the user scrolls down the page
3. **Active Link Tracking**: Highlights the current section as the user scrolls
4. **Membership Form Integration**: Opens the membership form modal when the "Join Now" button is clicked

#### Scroll Tracking Implementation

```typescript
useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 20);
    
    // Update active link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id') || '';
      
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        setActiveLink(sectionId);
      }
    });
  };
  
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

This code adds a scroll event listener that updates the `isScrolled` state based on the scroll position and updates the `activeLink` state based on which section is currently in view.

### 3.2 Membership Form Modal

The Membership Form Modal is implemented as a separate component within the Navbar component. It provides a multi-step form for users to sign up for a gym membership.

#### Key Features

1. **Multi-step Form**: The form is divided into two steps for better user experience
2. **Form Validation**: Required fields are marked and validated
3. **Success Feedback**: A success message is displayed after form submission
4. **Accessibility**: The modal is accessible with keyboard navigation and ARIA attributes

#### Form State Management

```typescript
const [formData, setFormData] = useState({
  name: '',
  email: '',
  phone: '',
  dob: '',
  plan: 'basic',
  message: ''
});
const [step, setStep] = useState(1);
const [isSubmitted, setIsSubmitted] = useState(false);

const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({ ...prev, [name]: value }));
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // In a real application, you would send this data to a server
  console.log('Form submitted:', formData);
  setIsSubmitted(true);
};
```

This code manages the form state, handles form input changes, and processes form submission.

### 3.3 Data Structures

The website uses several data structures to store and display information:

#### Class Data Structure

```typescript
interface ClassType {
  id: number;
  title: string;
  category: string;
  trainer: string;
  image: string;
  schedule: string;
  duration: string;
}
```

#### Trainer Data Structure

```typescript
interface TrainerProps {
  name: string;
  role: string;
  image: string;
  experience: string;
  specialty: string[];
  socialMedia: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
}
```

#### Pricing Plan Data Structure

```typescript
interface PricingPlan {
  id: number;
  name: string;
  price: string;
  period: string;
  features: string[];
  isPopular: boolean;
  buttonText: string;
}
```

#### Testimonial Data Structure

```typescript
interface TestimonialType {
  id: number;
  name: string;
  role: string;
  image: string;
  quote: string;
  rating: number;
}
```

These data structures are used to store and display information in a consistent and type-safe manner.

## 4. Responsive Design Implementation

The PowerGym website uses Tailwind CSS's responsive utility classes to create a responsive design that adapts to different screen sizes.

### Breakpoints

The website uses the following breakpoints:

- **sm**: 640px and above
- **md**: 768px and above
- **lg**: 1024px and above
- **xl**: 1280px and above
- **2xl**: 1536px and above

### Responsive Grid Implementation

```html
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
  {/* Grid items */}
</div>
```

This code creates a grid that displays one column on mobile, two columns on tablets, and four columns on desktop.

### Mobile Navigation Implementation

```html
{/* Desktop Menu */}
<div className="hidden md:flex items-center">
  {/* Desktop navigation links */}
</div>

{/* Mobile Menu Button */}
<div className="md:hidden">
  <button onClick={toggleMenu}>
    {/* Hamburger icon */}
  </button>
</div>

{/* Mobile Menu */}
{isOpen && (
  <div className="md:hidden">
    {/* Mobile navigation links */}
  </div>
)}
```

This code hides the desktop menu and shows the mobile menu button on small screens, and vice versa on larger screens.

## 5. Performance Considerations

The PowerGym website is optimized for performance in several ways:

1. **Code Splitting**: Each component is in a separate file, allowing for better code organization and potential code splitting
2. **Lazy Loading**: Images are loaded with the `loading="lazy"` attribute to defer loading of off-screen images
3. **Optimized Images**: Images are served from Pexels, which provides optimized images
4. **Minimal Dependencies**: The website uses minimal external dependencies to reduce bundle size
5. **Efficient Rendering**: React's virtual DOM ensures efficient rendering of components

## 6. Accessibility Features

The PowerGym website includes several accessibility features:

1. **Semantic HTML**: The website uses semantic HTML elements like `<section>`, `<nav>`, and `<footer>`
2. **ARIA Attributes**: ARIA attributes are used to improve accessibility for screen readers
3. **Keyboard Navigation**: All interactive elements are accessible via keyboard
4. **Focus Management**: Focus is properly managed in the membership form modal
5. **Color Contrast**: The website uses colors with sufficient contrast for readability

## 7. Code Conventions

The PowerGym website follows these code conventions:

1. **TypeScript**: All components are written in TypeScript for type safety
2. **Functional Components**: All components are functional components with hooks
3. **Interface Definitions**: Interfaces are defined for props and data structures
4. **Consistent Naming**: Components and files follow a consistent naming convention
5. **Component Organization**: Each component is in a separate file in the `components` directory

## 8. Build and Bundling

The PowerGym website uses Vite for building and bundling:

1. **Development**: `npm run dev` starts the development server
2. **Production Build**: `npm run build` creates a production build
3. **Preview**: `npm run preview` previews the production build locally

## 9. Testing Strategy

The PowerGym website can be tested using the following strategies:

1. **Unit Testing**: Test individual components in isolation
2. **Integration Testing**: Test interactions between components
3. **End-to-End Testing**: Test the entire application as a user would
4. **Responsive Testing**: Test the website on different screen sizes
5. **Accessibility Testing**: Test the website for accessibility compliance

## 10. Troubleshooting

Common issues and their solutions:

1. **Installation Issues**: Make sure you have the correct versions of Node.js and npm installed
2. **Build Errors**: Check the console for error messages and fix any TypeScript errors
3. **Styling Issues**: Make sure Tailwind CSS is properly configured
4. **Responsive Issues**: Test the website on different screen sizes and fix any layout issues
5. **Performance Issues**: Use browser developer tools to identify and fix performance bottlenecks
