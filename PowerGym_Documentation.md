# PowerGym Website Documentation

## Table of Contents

1. [Introduction](#1-introduction)
2. [Project Structure](#2-project-structure)
3. [Technology Stack](#3-technology-stack)
4. [Components](#4-components)
   - [4.1 Navigation](#41-navigation)
   - [4.2 Hero Section](#42-hero-section)
   - [4.3 About Section](#43-about-section)
   - [4.4 Classes Section](#44-classes-section)
   - [4.5 Trainers Section](#45-trainers-section)
   - [4.6 Pricing Section](#46-pricing-section)
   - [4.7 Testimonials Section](#47-testimonials-section)
   - [4.8 Contact Section](#48-contact-section)
   - [4.9 Footer](#49-footer)
5. [Features](#5-features)
   - [5.1 Responsive Design](#51-responsive-design)
   - [5.2 Membership Form](#52-membership-form)
   - [5.3 Active Link Tracking](#53-active-link-tracking)
6. [Styling](#6-styling)
7. [Setup and Installation](#7-setup-and-installation)
8. [Development Guidelines](#8-development-guidelines)
9. [Deployment](#9-deployment)
10. [Future Enhancements](#10-future-enhancements)

## 1. Introduction

PowerGym is a responsive, modern website for a fictional gym business. The website is built using React, TypeScript, and Tailwind CSS. It features a clean, professional design with a red and black color scheme, and includes various sections such as Home, About, Classes, Trainers, Pricing, Testimonials, and Contact.

The website is designed to provide potential gym members with information about the gym's facilities, classes, trainers, and membership options. It also includes a membership form that allows users to sign up for a membership.

## 2. Project Structure

The project follows a standard React application structure:

```
PowerGym/
├── public/                  # Static files
├── src/                     # Source code
│   ├── components/          # React components
│   │   ├── About.tsx        # About section component
│   │   ├── Classes.tsx      # Classes section component
│   │   ├── Contact.tsx      # Contact section component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Hero.tsx         # Hero section component
│   │   ├── Navbar.tsx       # Navigation bar component
│   │   ├── Pricing.tsx      # Pricing section component
│   │   ├── Testimonials.tsx # Testimonials section component
│   │   └── Trainers.tsx     # Trainers section component
│   ├── App.tsx              # Main application component
│   ├── index.css            # Global styles
│   └── main.tsx             # Entry point
├── index.html               # HTML template
├── package.json             # Project dependencies and scripts
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript configuration
└── vite.config.ts           # Vite configuration
```

## 3. Technology Stack

The PowerGym website is built using the following technologies:

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A typed superset of JavaScript
- **Vite**: A build tool that provides a faster and leaner development experience
- **Tailwind CSS**: A utility-first CSS framework
- **Lucide React**: A library of icons for React applications

## 4. Components

### 4.1 Navigation

The navigation component (`Navbar.tsx`) provides a responsive navigation bar that allows users to navigate to different sections of the website. It includes:

- Logo
- Desktop navigation links
- Mobile navigation menu
- "Join Now" button that opens a membership form
- Active link tracking that highlights the current section

The navigation bar is fixed to the top of the page and changes its appearance when the user scrolls down.

### 4.2 Hero Section

The hero section (`Hero.tsx`) is the first section of the website and serves as an introduction to the gym. It includes:

- Background image
- Heading and subheading
- Call-to-action buttons
- Member count and rating

### 4.3 About Section

The about section (`About.tsx`) provides information about the gym. It includes:

- Heading and description
- Features grid with icons
- Image with years of experience badge
- "Why Choose Us" section with bullet points

### 4.4 Classes Section

The classes section (`Classes.tsx`) showcases the different classes offered by the gym. It includes:

- Heading and description
- Filter buttons to filter classes by category
- Grid of class cards with images, titles, trainers, schedules, and durations

### 4.5 Trainers Section

The trainers section (`Trainers.tsx`) introduces the gym's trainers. It includes:

- Heading and description
- Grid of trainer cards with images, names, roles, experience, specialties, and social media links

### 4.6 Pricing Section

The pricing section (`Pricing.tsx`) displays the different membership plans offered by the gym. It includes:

- Heading and description
- Grid of pricing cards with plan names, prices, features, and call-to-action buttons
- Highlighted "Most Popular" plan

### 4.7 Testimonials Section

The testimonials section (`Testimonials.tsx`) showcases testimonials from gym members. It includes:

- Heading and description
- Testimonial carousel with member images, quotes, names, and ratings
- Navigation buttons and indicators

### 4.8 Contact Section

The contact section (`Contact.tsx`) provides contact information and a contact form. It includes:

- Heading and description
- Contact information cards with icons
- Google Maps embed
- Contact form with name, email, subject, and message fields

### 4.9 Footer

The footer component (`Footer.tsx`) provides additional information and links. It includes:

- Logo and description
- Quick links to different sections
- Working hours
- Contact information
- Newsletter subscription form
- Copyright information and policy links
- Social media links

## 5. Features

### 5.1 Responsive Design

The website is fully responsive and adapts to different screen sizes. It uses Tailwind CSS's responsive utility classes to create different layouts for mobile, tablet, and desktop screens.

Key responsive features include:
- Mobile navigation menu that appears on small screens
- Responsive grid layouts that adjust based on screen size
- Flexible typography that scales with screen size
- Images that maintain their aspect ratio on all devices

### 5.2 Membership Form

The membership form is a modal component that appears when the user clicks the "Join Now" button. It allows users to sign up for a gym membership by providing their personal information and selecting a membership plan.

The form is implemented as a two-step process:
1. Personal information (name, email, phone, date of birth)
2. Membership plan selection and additional information

After submission, a success message is displayed to confirm that the application has been received.

### 5.3 Active Link Tracking

The navigation bar includes active link tracking that highlights the current section as the user scrolls through the website. This is implemented using the `useEffect` hook to listen for scroll events and update the active link based on the current scroll position.

## 6. Styling

The website uses Tailwind CSS for styling, with a custom color scheme based on red and black. The design is clean, modern, and professional, with a focus on readability and usability.

Key styling features include:
- Consistent color scheme throughout the website
- Use of gradients and shadows for depth
- Responsive typography and spacing
- Hover and active states for interactive elements
- Smooth transitions and animations

## 7. Setup and Installation

To set up the project locally, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`
4. Open http://localhost:5173 in your browser

## 8. Development Guidelines

When developing the PowerGym website, follow these guidelines:

- Use TypeScript for type safety
- Follow the component structure and naming conventions
- Use Tailwind CSS for styling
- Keep components small and focused on a single responsibility
- Use responsive design principles
- Ensure accessibility by using semantic HTML and ARIA attributes
- Test on different devices and browsers

## 9. Deployment

To deploy the website to production, follow these steps:

1. Build the project: `npm run build`
2. The build output will be in the `dist` directory
3. Deploy the contents of the `dist` directory to your hosting provider

## 10. Future Enhancements

Potential future enhancements for the PowerGym website include:

- Backend integration for the membership form
- User authentication and member portal
- Class booking system
- Blog section with fitness tips and news
- Online store for gym merchandise
- Integration with social media platforms
- Performance optimizations for faster loading
- Internationalization for multiple languages
