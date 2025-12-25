# Target Academy of Science

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Architecture](#project-architecture)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Core Modules](#core-modules)
  - [Home Module](#home-module)
  - [Staff Module](#staff-module)
  - [Student Module](#student-module)
- [Available Scripts](#available-scripts)
- [API Integration](#api-integration)
- [State Management](#state-management)
- [Routing](#routing)
- [Component Library](#component-library)
- [Custom Hooks](#custom-hooks)
- [Form Validation](#form-validation)
- [Styling and Theming](#styling-and-theming)
- [Development Guidelines](#development-guidelines)
- [Testing](#testing)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Performance Optimization](#performance-optimization)
- [Common Issues and Troubleshooting](#common-issues-and-troubleshooting)
- [Contributing](#contributing)
- [License](#license)

## Overview

Target Academy of Science is a comprehensive educational management platform built with modern web technologies. This frontend application serves as the primary interface for students, staff, and administrative personnel to interact with the academy's digital ecosystem. The platform facilitates academic operations including course management, assignment submission, result tracking, student registration, staff management, and various administrative functions.

The application is built using React and Vite, providing a fast, responsive, and intuitive user experience across all devices. It implements role-based access control with distinct interfaces for students, staff, and public users, ensuring that each user group has access to relevant features and information.

## Features

### Public Portal Features

- **Home Page**: Comprehensive information about the academy, courses, and facilities
- **Student Registration**: Online registration system for new student admissions
- **Staff Registration**: Application portal for teaching and non-teaching staff positions
- **Career Information**: Details about career opportunities and job openings
- **Results Display**: Public access to examination results and announcements
- **Responsive Navigation**: Mobile-friendly navigation with optimized user experience

### Student Portal Features

- **Dashboard**: Personalized student dashboard with quick access to all features
- **Profile Management**: Complete profile viewing and editing capabilities
- **Assignments**: View, download, and submit assignments with deadline tracking
- **Notes and Papers**: Access to study materials, notes, and previous year papers
- **Marks and Results**: View marks, grades, and comprehensive result analysis
- **Attendance Tracking**: Monitor attendance records and percentage
- **Fee Management**: View fee structure, payment history, and pending dues
- **Notifications**: Receive real-time updates about notices, events, and announcements

### Staff Portal Features

- **Staff Dashboard**: Comprehensive overview of classes, students, and pending tasks
- **Student Management**: Add, edit, and manage student records and information
- **Assignment Management**: Create, distribute, and track assignment submissions
- **Test and Paper Management**: Create tests, upload papers, and manage examination content
- **Result Management**: Enter marks, generate results, and publish grade reports
- **Notes Management**: Upload and organize study materials for students
- **Notice Board**: Create and publish notices and announcements
- **Event Management**: Schedule and manage academic and extracurricular events
- **Attendance System**: Record and manage student attendance
- **Transaction Management**: Handle fee collection and financial transactions
- **Control Panel**: Administrative controls for batch, class, and subject management
- **Staff Directory**: View and manage staff profiles and contact information

## Technology Stack

### Core Framework

- **React 18.3.1**: Modern React with hooks, concurrent features, and optimized rendering
- **Vite**: Next-generation frontend build tool for lightning-fast HMR and optimized production builds

### UI Framework and Styling

- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Unstyled, accessible component primitives for building high-quality design systems
- **Framer Motion**: Production-ready animation library for React
- **GSAP**: Professional-grade animation platform for complex animations
- **shadcn/ui**: Re-usable component library built on Radix UI and Tailwind CSS

### State Management

- **Redux Toolkit**: Official, opinionated Redux toolset for efficient state management
- **React Redux**: Official React bindings for Redux
- **TanStack Query (React Query)**: Powerful data synchronization and server state management

### Routing

- **React Router DOM 6.27.0**: Declarative routing for React applications with modern API

### Form Management

- **React Hook Form 7.54.2**: Performant, flexible forms with easy validation
- **Zod**: TypeScript-first schema validation with static type inference
- **Hookform Resolvers**: Validation resolvers for React Hook Form

### HTTP Client

- **Axios 1.7.7**: Promise-based HTTP client for browser and Node.js with interceptors and error handling

### UI Components

- **Lucide React**: Beautiful and consistent icon library
- **React Day Picker**: Flexible date picker component
- **Input OTP**: One-time password input component
- **React Toastify**: Toast notification library

### PDF Handling

- **React PDF**: Display PDF documents in React applications
- **React PDF Renderer**: Create PDF documents using React components

### Utilities

- **date-fns**: Modern JavaScript date utility library
- **clsx**: Utility for constructing className strings conditionally
- **class-variance-authority**: Tool for managing component variants

## Project Architecture

The application follows a modular architecture with clear separation of concerns:

### Layered Architecture

1. **Presentation Layer**: React components organized by feature modules
2. **Business Logic Layer**: Custom hooks and utility functions
3. **Data Access Layer**: API services and Redux state management
4. **Configuration Layer**: Environment variables, Axios configuration, and constants

### Module Structure

- **Home Module**: Public-facing pages and components
- **Staff Module**: Staff portal with administrative features
- **Student Module**: Student portal with academic features
- **Shared Components**: Reusable UI components and utilities

### Design Patterns

- **Component Composition**: Small, focused components combined to create complex UIs
- **Custom Hooks**: Encapsulated business logic and state management
- **Higher-Order Components**: Cross-cutting concerns like authentication and authorization
- **Render Props**: Flexible component sharing and code reuse
- **Context API**: Theme management and global state sharing

## Prerequisites

Before setting up the project, ensure you have the following software installed on your system:

### Required Software

- **Node.js**: Version 16.0 or higher (recommended: LTS version 18.x or 20.x)

  - Download from [nodejs.org](https://nodejs.org/)
  - Verify installation: `node --version`

- **npm**: Version 7.0 or higher (comes with Node.js)

  - Verify installation: `npm --version`
  - Alternative: **yarn** (version 1.22 or higher)

- **Git**: Latest stable version
  - Download from [git-scm.com](https://git-scm.com/)
  - Verify installation: `git --version`

### Optional Tools

- **nvm** (Node Version Manager): For managing multiple Node.js versions
- **VS Code**: Recommended IDE with extensions:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux/React-Native snippets

## Getting Started

### Installation

Follow these steps to set up the project on your local machine:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/your-username/target-academy-frontend.git
   cd target-academy-frontend
   ```

2. **Install Dependencies**
   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

   This will install all dependencies listed in `package.json`, including:

   - React and React DOM
   - Redux Toolkit and React Redux
   - React Router DOM
   - Axios for HTTP requests
   - Tailwind CSS and UI component libraries
   - Form validation libraries
   - Animation libraries
   - And all other required packages

3. **Verify Installation**
   ```bash
   npm list --depth=0
   ```
   This command will display all installed top-level packages.

### Environment Configuration

The application requires environment variables for proper operation:

1. **Create Environment File**
   Create a `.env` file in the root directory:

   ```bash
   touch .env
   ```

2. **Configure Environment Variables**
   Add the following variables to your `.env` file:

   ```env
   # API Configuration
   VITE_API_BASE_URL=http://localhost:3000/api
   VITE_API_TIMEOUT=30000

   # Application Configuration
   VITE_APP_NAME=Target Academy of Science
   VITE_APP_VERSION=1.0.0

   # Feature Flags
   VITE_ENABLE_ANALYTICS=false
   VITE_ENABLE_DEBUG_MODE=false

   # External Services
   VITE_CLOUDINARY_CLOUD_NAME=your-cloud-name
   VITE_CLOUDINARY_API_KEY=your-api-key
   ```

   **Important Notes**:

   - All environment variables in Vite must be prefixed with `VITE_`
   - Never commit `.env` file to version control
   - Update the API base URL to match your backend server
   - Create a `.env.example` file with dummy values for reference

### Running the Application

1. **Start Development Server**

   ```bash
   npm run dev
   ```

   This will:

   - Start the Vite development server
   - Enable Hot Module Replacement (HMR)
   - Open the application at `http://localhost:5173`
   - Display any compilation errors in the terminal and browser

2. **Access the Application**

   - Open your browser and navigate to `http://localhost:5173`
   - The application will automatically reload when you make changes to the code

3. **Development Features**
   - **Fast Refresh**: Instant feedback on code changes
   - **Error Overlay**: Visual error messages in the browser
   - **Source Maps**: Debug original source code in browser DevTools

## Project Structure

```
target-academy-frontend/
├── public/                          # Static assets served directly
│   ├── robots.txt                   # Search engine crawling rules
│   ├── sitemap.xml                  # Site structure for SEO
│   └── Home/                        # Home page specific assets
│       └── School/                  # School-related images and files
│
├── src/                             # Source code directory
│   ├── main.jsx                     # Application entry point
│   ├── App.jsx                      # Root component with routing
│   ├── App.css                      # Global application styles
│   └── index.css                    # Base styles and Tailwind imports
│
├── src/api/                         # API service layer
│   ├── staff-api.js                 # Staff-related API endpoints
│   ├── student-api.js               # Student-related API endpoints
│   └── secondary-api.js             # Secondary/supporting APIs
│
├── src/assets/                      # Application assets (images, fonts, etc.)
│
├── src/components/                  # React components
│   ├── theme-provider.jsx           # Theme context provider
│   │
│   ├── Home/                        # Public-facing components
│   │   ├── MainPage/                # Landing page components
│   │   ├── Navbar/                  # Navigation bar components
│   │   ├── Registration/            # Student registration flow
│   │   ├── Staff-Registration/      # Staff application flow
│   │   ├── Results/                 # Public result display
│   │   ├── Career/                  # Career opportunities section
│   │   └── context/                 # Home module context providers
│   │
│   ├── Staff/                       # Staff portal components
│   │   ├── Dashboard/               # Staff dashboard and overview
│   │   ├── Students/                # Student management components
│   │   ├── Assignments/             # Assignment management
│   │   ├── Tests/                   # Test creation and management
│   │   ├── Papers/                  # Question paper management
│   │   ├── Notes/                   # Study material management
│   │   ├── Result/                  # Result entry and publishing
│   │   ├── Notices/                 # Notice board management
│   │   ├── Events/                  # Event scheduling
│   │   ├── Transactions/            # Fee and transaction handling
│   │   ├── ControlPanel/            # Admin controls
│   │   ├── Profile/                 # Staff profile management
│   │   ├── Staff/                   # Staff directory
│   │   ├── SideBar/                 # Staff portal navigation
│   │   └── Notes-Papers-Utils/      # Shared utilities
│   │
│   ├── Student/                     # Student portal components
│   │   ├── MainPage/                # Student dashboard
│   │   ├── Profile.jsx/             # Student profile
│   │   ├── Assignments/             # Assignment viewing/submission
│   │   ├── Notes-Papers/            # Study materials access
│   │   ├── Marks/                   # Marks and results viewing
│   │   ├── Nav.jsx                  # Student navigation
│   │   ├── SideBar.jsx              # Student sidebar navigation
│   │   ├── Sidebar/                 # Additional sidebar components
│   │   ├── student-edit.jsx         # Profile editing
│   │   └── student-skelleton.jsx    # Loading skeletons
│   │
│   ├── ui/                          # Reusable UI components (shadcn/ui)
│   │   ├── button.jsx               # Button component with variants
│   │   ├── input.jsx                # Input field component
│   │   ├── card.jsx                 # Card container component
│   │   ├── dialog.jsx               # Modal dialog component
│   │   ├── form.jsx                 # Form wrapper components
│   │   ├── select.jsx               # Dropdown select component
│   │   ├── checkbox.jsx             # Checkbox input component
│   │   ├── calendar.jsx             # Date picker component
│   │   ├── avatar.jsx               # User avatar component
│   │   ├── accordion.jsx            # Collapsible content component
│   │   ├── dropdown-menu.jsx        # Dropdown menu component
│   │   ├── navigation-menu.jsx      # Navigation menu component
│   │   ├── popover.jsx              # Popover overlay component
│   │   ├── scroll-area.jsx          # Custom scroll container
│   │   ├── chart.jsx                # Chart visualization component
│   │   └── ...                      # Additional UI components
│   │
│   ├── magicui/                     # Custom animated components
│   │   ├── animated-beam.jsx        # Animated beam effect
│   │   ├── orbiting-circles.jsx     # Orbiting animation
│   │   └── ripple.jsx               # Ripple effect component
│   │
│   ├── Loaders/                     # Loading state components
│   │   ├── Home/                    # Home page loaders
│   │   ├── Staff/                   # Staff portal loaders
│   │   └── Student/                 # Student portal loaders
│   │
│   └── Utils/                       # Utility components
│
├── src/config/                      # Configuration files
│   └── axiosConfig.js               # Axios instance and interceptors
│
├── src/constants/                   # Application constants
│   ├── home-mobile-link.jsx         # Home navigation links
│   ├── sidebar-staff-links.jsx      # Staff sidebar configuration
│   ├── sidebar-student-links.jsx    # Student sidebar configuration
│   └── Home/                        # Home page constants
│
├── src/Hooks/                       # Custom React hooks
│   ├── use-mobile.jsx               # Mobile detection hook
│   ├── use-student.js               # Student data management
│   ├── use-student-auth.js          # Student authentication
│   ├── use-staff.js                 # Staff data management
│   ├── use-assignment.js            # Assignment operations
│   ├── use-notes.js                 # Notes management
│   ├── use-papers.js                # Papers management
│   ├── use-marks.js                 # Marks and results
│   ├── use-result.js                # Result operations
│   ├── use-test-paper.js            # Test paper management
│   ├── use-notice.js                # Notice operations
│   ├── use-batch.js                 # Batch management
│   ├── use-class.js                 # Class management
│   ├── use-subject.js               # Subject management
│   ├── use-school.js                # School information
│   └── use-job.js                   # Job/career operations
│
├── src/layouts/                     # Layout components
│   ├── Home.jsx                     # Public layout wrapper
│   ├── Staff.jsx                    # Staff portal layout
│   └── Student.jsx                  # Student portal layout
│
├── src/lib/                         # Library utilities
│   ├── utils.js                     # Common utility functions
│   └── Auth/                        # Authentication utilities
│
├── src/pages/                       # Page components
│   ├── not-verified.jsx             # Email verification pending page
│   ├── Home/                        # Home page routes
│   ├── Staff/                       # Staff portal pages
│   └── Student/                     # Student portal pages
│
├── src/Redux/                       # Redux state management
│   ├── store.js                     # Redux store configuration
│   └── slices/                      # Redux slices for state
│
├── src/Routes/                      # Application routing
│   └── routes.jsx                   # Route definitions and guards
│
├── src/Zod Schema/                  # Form validation schemas
│   ├── Staff/                       # Staff form schemas
│   └── Student/                     # Student form schemas
│
├── components.json                  # shadcn/ui configuration
├── eslint.config.js                 # ESLint configuration
├── jsconfig.json                    # JavaScript project config
├── package.json                     # Project dependencies and scripts
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── vite.config.js                   # Vite build configuration
├── vercel.json                      # Vercel deployment config
├── index.html                       # HTML template
├── README.md                        # Project documentation
└── LICENSE                          # License information
```

## Core Modules

### Home Module

The Home module serves as the public-facing interface of the application, providing information and access points for prospective students, staff, and visitors.

**Key Components**:

- **Main Landing Page**: Showcases academy information, courses, facilities, and achievements
- **Navigation System**: Responsive navbar with mobile menu support
- **Student Registration**: Multi-step form for new student admissions with validation
- **Staff Registration**: Application portal for teaching and administrative positions
- **Results Portal**: Public access to examination results with search functionality
- **Career Section**: Job listings, opportunities, and application information
- **Contact Information**: Location, contact details, and inquiry forms

**Technical Features**:

- Server-side rendering ready
- SEO optimized with meta tags
- Responsive design for all screen sizes
- Image optimization and lazy loading
- Form validation with real-time feedback

### Staff Module

The Staff module provides a comprehensive management system for teaching and administrative staff to handle academic operations.

**Dashboard Features**:

- Overview of assigned classes and students
- Pending tasks and assignments
- Recent activities and notifications
- Quick access to frequently used features

**Student Management**:

- Add new students with complete profile information
- Edit and update student records
- View student academic history
- Manage student enrollment and batch assignments
- Track student attendance and performance

**Academic Management**:

- **Assignments**: Create, distribute, and track homework assignments
- **Tests**: Schedule tests, create question papers, and manage evaluations
- **Papers**: Upload and organize question papers for examinations
- **Notes**: Share study materials, lecture notes, and resources
- **Results**: Enter marks, calculate grades, and publish results

**Administrative Functions**:

- **Notices**: Create and publish announcements for students
- **Events**: Schedule academic events, holidays, and activities
- **Transactions**: Record fee payments and manage financial records
- **Control Panel**: Manage batches, classes, subjects, and academic structure

**Profile Management**:

- View and edit personal profile
- Update contact information and credentials
- Change password and security settings

### Student Module

The Student module provides students with access to their academic information and learning resources.

**Dashboard Features**:

- Personalized overview of academic status
- Upcoming assignments and deadlines
- Recent announcements and notices
- Quick links to important features

**Academic Resources**:

- **Assignments**: View assigned homework, download attachments, and submit work
- **Notes**: Access study materials organized by subject and topic
- **Papers**: Download previous year question papers and sample papers
- **Marks**: View marks for tests, assignments, and examinations
- **Results**: Access complete result cards and performance analysis

**Profile Management**:

- View personal and academic information
- Update contact details and profile picture
- Track attendance and academic progress
- View fee payment history and pending dues

## Available Scripts

The project includes several npm scripts for different development and build operations:

### Development Scripts

- **`npm run dev`**

  - Starts the Vite development server
  - Enables hot module replacement (HMR)
  - Runs on `http://localhost:5173` by default
  - Displays compilation errors and warnings in terminal and browser

  ```bash
  npm run dev
  # or
  yarn dev
  ```

### Build Scripts

- **`npm run build`**

  - Creates an optimized production build
  - Minifies JavaScript, CSS, and HTML
  - Generates source maps for debugging
  - Outputs to `dist/` directory
  - Performs tree-shaking to remove unused code

  ```bash
  npm run build
  # or
  yarn build
  ```

### Preview Scripts

- **`npm run preview`**

  - Serves the production build locally
  - Useful for testing the production build before deployment
  - Runs on `http://localhost:4173` by default

  ```bash
  npm run preview
  # or
  yarn preview
  ```

### Linting Scripts

- **`npm run lint`**

  - Runs ESLint on the entire codebase
  - Checks for code quality issues and potential errors
  - Enforces coding standards and best practices

  ```bash
  npm run lint
  # or
  yarn lint
  ```

### Custom Scripts (if needed)

You can add custom scripts to `package.json` for common tasks:

```json
{
  "scripts": {
    "clean": "rm -rf dist node_modules",
    "format": "prettier --write \"src/**/*.{js,jsx,json,css,md}\"",
    "analyze": "vite-bundle-visualizer"
  }
}
```

## API Integration

The application integrates with a backend REST API for data operations.

### API Configuration

API configuration is managed in `src/config/axiosConfig.js`:

```javascript
// Centralized Axios instance with:
// - Base URL from environment variables
// - Request/response interceptors
// - Authentication token injection
// - Error handling and retry logic
// - Request timeout configuration
```

### API Services

API services are organized by feature in the `src/api/` directory:

1. **staff-api.js**: Staff-related endpoints

   - Staff authentication
   - Student management operations
   - Assignment and test management
   - Result and marks entry
   - Notice and event management

2. **student-api.js**: Student-related endpoints

   - Student authentication
   - Profile management
   - Assignment submission
   - Marks and result viewing
   - Resource access

3. **secondary-api.js**: Supporting endpoints
   - Public information retrieval
   - File uploads
   - Search functionality

### Authentication

The application implements token-based authentication:

- **Login Flow**: User credentials → API → JWT token
- **Token Storage**: Secure storage in localStorage/sessionStorage
- **Token Injection**: Automatic inclusion in request headers via interceptor
- **Token Refresh**: Automatic token renewal before expiration
- **Logout**: Token removal and state cleanup

### Error Handling

Comprehensive error handling strategy:

- Network errors: Display user-friendly messages
- 401 Unauthorized: Redirect to login page
- 403 Forbidden: Show access denied message
- 500 Server Error: Display error page with retry option
- Validation errors: Show field-specific error messages

## State Management

The application uses Redux Toolkit for global state management.

### Redux Store Structure

Located in `src/Redux/store.js`, the store is configured with:

- **Redux Toolkit**: Simplified Redux setup with less boilerplate
- **Redux DevTools**: Browser extension integration for debugging
- **Middleware**: Custom middleware for logging and async operations
- **Persistence**: Optional state persistence to localStorage

### State Slices

Organized in `src/Redux/slices/`:

- **authSlice**: User authentication state (logged-in user, tokens)
- **staffSlice**: Staff-specific data and operations
- **studentSlice**: Student-specific data and operations
- **uiSlice**: UI state (modals, notifications, loading states)
- **dataSlice**: Cached application data (classes, subjects, batches)

### TanStack Query (React Query)

Used for server state management:

- **Query Caching**: Automatic caching of API responses
- **Background Refetching**: Keep data fresh with automatic updates
- **Pagination Support**: Built-in pagination helpers
- **Optimistic Updates**: Update UI before server confirmation
- **Error Retry**: Automatic retry on failed requests

### Local State

Component-level state managed with:

- **useState**: Simple component state
- **useReducer**: Complex state logic
- **Context API**: Shared state without prop drilling

## Routing

The application uses React Router DOM v6 for navigation.

### Route Configuration

Routes are defined in `src/Routes/routes.jsx`:

```javascript
// Route structure:
// - Public routes (Home, Registration, Results)
// - Protected student routes (require student authentication)
// - Protected staff routes (require staff authentication)
// - 404 Not Found route
// - Redirect logic for authenticated users
```

### Route Guards

Authentication guards protect routes:

- **PublicRoute**: Accessible without authentication
- **PrivateRoute**: Requires authentication, redirects to login if not authenticated
- **RoleBasedRoute**: Checks user role (student/staff) before allowing access

### Navigation

Programmatic navigation using:

- `useNavigate()` hook for imperative navigation
- `<Link>` component for declarative navigation
- `<NavLink>` for active link styling

### Route Parameters

Dynamic routes with parameters:

- `/student/assignment/:id` - Assignment details
- `/staff/student/:id` - Student profile
- `/results/:batchId` - Batch-specific results

## Component Library

The project uses a combination of custom and third-party components.

### UI Component System

Built on **shadcn/ui** principles:

- Copy-paste component source (not npm package)
- Full customization control
- Built on Radix UI primitives
- Styled with Tailwind CSS

### Available Components

**Form Components**:

- Input: Text, email, password, number fields
- Select: Dropdown selection with search
- Checkbox: Single and multi-select checkboxes
- Radio: Radio button groups
- Switch: Toggle switches
- Calendar: Date picker with range selection
- Input OTP: One-time password input

**Layout Components**:

- Card: Content containers with header, body, footer
- Accordion: Collapsible content sections
- Tabs: Tabbed interface for content organization
- Separator: Visual dividers between sections
- Scroll Area: Custom scrollable containers

**Feedback Components**:

- Dialog: Modal dialogs for confirmations and forms
- Alert Dialog: Warning and confirmation dialogs
- Toast: Temporary notification messages
- Progress: Loading progress indicators
- Skeleton: Loading placeholder animations

**Navigation Components**:

- Navigation Menu: Multi-level navigation
- Dropdown Menu: Context menus and options
- Menubar: Application menubar
- Popover: Floating content containers

**Data Display Components**:

- Table: Data tables with sorting and filtering
- Avatar: User profile images with fallback
- Badge: Status indicators and labels
- Tooltip: Helpful hints on hover
- Chart: Data visualization components

### Custom Animated Components

Located in `src/components/magicui/`:

- **Animated Beam**: Connecting beam animations between elements
- **Orbiting Circles**: Circular orbit animations
- **Ripple**: Click ripple effects

### Component Usage

Example of using a component:

```javascript
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

function MyComponent() {
  return (
    <Card>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </Card>
  );
}
```

## Custom Hooks

Custom hooks encapsulate reusable logic and side effects.

### Available Hooks

Located in `src/Hooks/`:

1. **use-mobile.jsx**: Detects mobile/tablet screen sizes
2. **use-student-auth.js**: Student authentication logic
3. **use-student.js**: Student data fetching and management
4. **use-staff.js**: Staff data operations
5. **use-assignment.js**: Assignment CRUD operations
6. **use-notes.js**: Notes management logic
7. **use-papers.js**: Paper upload and retrieval
8. **use-marks.js**: Marks entry and calculation
9. **use-result.js**: Result generation and publishing
10. **use-test-paper.js**: Test paper management
11. **use-notice.js**: Notice board operations
12. **use-batch.js**: Batch management
13. **use-class.js**: Class operations
14. **use-subject.js**: Subject management
15. **use-school.js**: School information
16. **use-job.js**: Career/job operations

### Hook Benefits

- **Code Reusability**: Share logic across components
- **Separation of Concerns**: Keep components focused on UI
- **Testability**: Test business logic independently
- **Composition**: Combine multiple hooks easily

### Example Hook Usage

```javascript
import { useStudent } from "@/Hooks/use-student";

function StudentProfile() {
  const { student, loading, error, updateProfile } = useStudent();

  if (loading) return <Loader />;
  if (error) return <Error message={error} />;

  return <ProfileCard data={student} onUpdate={updateProfile} />;
}
```

## Form Validation

Forms use React Hook Form with Zod schema validation.

### Validation Schema

Schemas are defined in `src/Zod Schema/`:

```javascript
// Example schema structure:
import { z } from "zod";

export const studentSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone must be 10 digits"),
  age: z.number().min(5).max(100),
});
```

### Form Implementation

```javascript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { studentSchema } from "@/Zod Schema/Student/studentSchema";

function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentSchema),
  });

  const onSubmit = (data) => {
    // Handle form submission
  };

  return <form onSubmit={handleSubmit(onSubmit)}>{/* Form fields */}</form>;
}
```

### Validation Features

- **Real-time Validation**: Validate on change, blur, or submit
- **Error Messages**: Display field-specific error messages
- **Type Safety**: TypeScript integration with schema inference
- **Custom Validation**: Add custom validation rules
- **Async Validation**: Server-side validation support

## Styling and Theming

The application uses Tailwind CSS for styling with a custom design system.

### Tailwind Configuration

Configured in `tailwind.config.js`:

- Custom color palette
- Typography scale
- Spacing system
- Breakpoints for responsive design
- Custom animations and transitions
- Plugin configurations

### Theme System

Theme provider in `src/components/theme-provider.jsx`:

- Light and dark mode support
- Theme persistence to localStorage
- System preference detection
- Dynamic theme switching

### CSS Architecture

1. **index.css**: Base styles and Tailwind imports
2. **App.css**: Global application styles
3. **Component Styles**: Scoped to individual components
4. **Utility Classes**: Tailwind utility classes for quick styling

### Responsive Design

Mobile-first approach with breakpoints:

- `sm`: 640px (small devices)
- `md`: 768px (tablets)
- `lg`: 1024px (laptops)
- `xl`: 1280px (desktops)
- `2xl`: 1536px (large screens)

### Design Tokens

CSS variables for consistent theming:

```css
:root {
  --primary: ...;
  --secondary: ...;
  --accent: ...;
  --background: ...;
  --foreground: ...;
}
```

## Development Guidelines

### Code Style

- **JavaScript Standard**: ES6+ features, async/await
- **React Patterns**: Functional components with hooks
- **Naming Conventions**:
  - Components: PascalCase (`StudentCard.jsx`)
  - Functions: camelCase (`fetchStudentData`)
  - Constants: UPPER_SNAKE_CASE (`API_BASE_URL`)
  - Files: kebab-case for utilities (`api-helper.js`)

### Component Best Practices

1. **Single Responsibility**: Each component should do one thing well
2. **Composition Over Inheritance**: Build complex UIs from simple components
3. **Props Validation**: Use PropTypes or TypeScript for type safety
4. **Avoid Prop Drilling**: Use Context API or state management for deep props
5. **Error Boundaries**: Wrap components to catch and handle errors gracefully

### Performance Optimization

- **Code Splitting**: Lazy load routes and heavy components
- **Memoization**: Use `React.memo`, `useMemo`, `useCallback` appropriately
- **Image Optimization**: Use appropriate formats and lazy loading
- **Bundle Size**: Monitor and optimize bundle size
- **Virtual Scrolling**: For long lists, use virtualization

### Accessibility

- **Semantic HTML**: Use appropriate HTML elements
- **ARIA Labels**: Add labels for screen readers
- **Keyboard Navigation**: Ensure all features are keyboard accessible
- **Color Contrast**: Maintain WCAG AA compliance
- **Focus Management**: Proper focus indicators and trapping in modals

### Git Workflow

1. Create feature branch from `main`
2. Make changes in small, focused commits
3. Write descriptive commit messages
4. Push branch and create pull request
5. Request code review
6. Address feedback and merge

### Commit Message Format

```
type(scope): subject

body

footer
```

Types: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`

Example:

```
feat(student): add assignment submission feature

- Add file upload component
- Implement submission validation
- Add success/error notifications

Closes #123
```

## Testing

While testing setup is not shown in the structure, recommended approach:

### Testing Libraries

- **Vitest**: Fast unit test runner for Vite projects
- **React Testing Library**: Test React components
- **Jest DOM**: Additional matchers for DOM testing
- **MSW**: Mock Service Worker for API mocking

### Test Structure

```
src/
├── components/
│   ├── Button.jsx
│   └── __tests__/
│       └── Button.test.jsx
```

### Test Types

1. **Unit Tests**: Test individual functions and components
2. **Integration Tests**: Test component interactions
3. **E2E Tests**: Test complete user flows (Playwright/Cypress)

### Running Tests

```bash
npm run test          # Run all tests
npm run test:watch    # Run tests in watch mode
npm run test:coverage # Generate coverage report
```

## Building for Production

### Production Build Process

1. **Create Build**

   ```bash
   npm run build
   ```

   This process:

   - Transpiles and bundles all source code
   - Minifies JavaScript and CSS
   - Optimizes images and assets
   - Generates source maps
   - Creates `dist/` directory with production files

2. **Build Output**

   ```
   dist/
   ├── index.html              # Entry HTML file
   ├── assets/
   │   ├── index-[hash].js     # Main JavaScript bundle
   │   ├── index-[hash].css    # Main CSS bundle
   │   └── [assets]-[hash].*   # Other assets
   └── ...
   ```

3. **Preview Production Build**
   ```bash
   npm run preview
   ```
   Test the production build locally before deployment

### Build Optimization

- **Tree Shaking**: Removes unused code
- **Code Splitting**: Splits code into smaller chunks
- **Lazy Loading**: Loads routes and components on demand
- **Asset Optimization**: Compresses images and assets
- **Minification**: Reduces file sizes

### Environment-Specific Builds

Create different builds for different environments:

```bash
# Development build
npm run build:dev

# Staging build
npm run build:staging

# Production build
npm run build
```

## Deployment

### Deployment Options

1. **Vercel** (Recommended)

   - Zero-config deployment for Vite apps
   - Automatic builds from Git
   - Global CDN and edge network
   - Free tier available

   Steps:

   ```bash
   # Install Vercel CLI
   npm install -g vercel

   # Deploy
   vercel
   ```

2. **Netlify**

   - Similar to Vercel with easy setup
   - Drag-and-drop deployment
   - Form handling and serverless functions

   Build settings:

   - Build command: `npm run build`
   - Publish directory: `dist`

3. **AWS S3 + CloudFront**

   - Host static files on S3
   - CloudFront for CDN delivery
   - More configuration required

   ```bash
   # Build and sync to S3
   npm run build
   aws s3 sync dist/ s3://your-bucket-name
   ```

4. **Docker Deployment**
   Create a Dockerfile:

   ```dockerfile
   FROM node:18-alpine as build
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build

   FROM nginx:alpine
   COPY --from=build /app/dist /usr/share/nginx/html
   EXPOSE 80
   CMD ["nginx", "-g", "daemon off;"]
   ```

### Deployment Checklist

- [ ] Update environment variables for production
- [ ] Test production build locally
- [ ] Check for console errors and warnings
- [ ] Verify API endpoints are correct
- [ ] Test on multiple devices and browsers
- [ ] Enable analytics and monitoring
- [ ] Set up error tracking (Sentry, LogRocket)
- [ ] Configure CDN and caching headers
- [ ] Set up SSL certificate
- [ ] Configure custom domain

### Continuous Deployment

Set up automated deployment:

1. **GitHub Actions**

   ```yaml
   name: Deploy
   on:
     push:
       branches: [main]
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         - uses: actions/setup-node@v2
         - run: npm install
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
   ```

2. **Vercel GitHub Integration**
   - Automatic deployments on push to main
   - Preview deployments for pull requests

## Performance Optimization

### Frontend Performance

1. **Code Splitting**

   ```javascript
   // Lazy load routes
   const StudentDashboard = lazy(() => import("./pages/Student/Dashboard"));
   ```

2. **Image Optimization**

   - Use modern formats (WebP, AVIF)
   - Implement lazy loading
   - Responsive images with srcset
   - Compress images before upload

3. **Bundle Optimization**

   - Analyze bundle with `vite-bundle-visualizer`
   - Remove unused dependencies
   - Use dynamic imports for large libraries

4. **Caching Strategy**
   - Cache API responses with React Query
   - Implement service worker for offline support
   - Use browser caching headers

### Runtime Performance

1. **React Performance**

   ```javascript
   // Memoize expensive computations
   const expensiveValue = useMemo(() => compute(data), [data]);

   // Memoize callback functions
   const handleClick = useCallback(() => {}, []);

   // Memoize components
   const MemoizedComponent = React.memo(Component);
   ```

2. **Virtual Scrolling**
   Use for long lists (1000+ items):

   ```javascript
   import { useVirtualizer } from "@tanstack/react-virtual";
   ```

3. **Debounce and Throttle**
   ```javascript
   // Debounce search input
   const debouncedSearch = useMemo(() => debounce(handleSearch, 300), []);
   ```

### Network Performance

- **HTTP/2**: Enable on server for multiplexing
- **Compression**: Enable Gzip/Brotli compression
- **CDN**: Serve static assets from CDN
- **Prefetching**: Prefetch critical resources
- **API Optimization**: Minimize payload size, use pagination

### Monitoring

Set up performance monitoring:

- **Lighthouse**: Regular performance audits
- **Web Vitals**: Track Core Web Vitals (LCP, FID, CLS)
- **Analytics**: Google Analytics or similar
- **Error Tracking**: Sentry for error monitoring
- **Performance Monitoring**: New Relic or DataDog

## Common Issues and Troubleshooting

### Development Issues

1. **Port Already in Use**

   ```bash
   # Find process using port 5173
   lsof -ti:5173

   # Kill the process
   kill -9 $(lsof -ti:5173)

   # Or use different port
   npm run dev -- --port 3000
   ```

2. **Node Version Mismatch**

   ```bash
   # Check current version
   node --version

   # Install and use nvm
   nvm install 18
   nvm use 18
   ```

3. **Module Not Found Errors**

   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

4. **Hot Reload Not Working**
   - Check if file watching limit is reached (Linux)
   ```bash
   # Increase watch limit
   echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf
   sudo sysctl -p
   ```

### Build Issues

1. **Build Failures**

   ```bash
   # Clear build cache
   rm -rf dist .vite

   # Rebuild
   npm run build
   ```

2. **Memory Issues During Build**

   ```bash
   # Increase Node memory limit
   NODE_OPTIONS=--max-old-space-size=4096 npm run build
   ```

3. **Import Resolution Issues**
   - Check `vite.config.js` path aliases
   - Verify `jsconfig.json` paths match

### Runtime Issues

1. **API Connection Errors**

   - Verify `VITE_API_BASE_URL` in `.env`
   - Check CORS settings on backend
   - Verify network requests in DevTools

2. **Authentication Issues**

   - Clear localStorage/sessionStorage
   - Check token expiration
   - Verify token format and signature

3. **Routing Issues**

   - Check route definitions in `routes.jsx`
   - Verify route guards and permissions
   - Check for typos in navigation paths

4. **State Not Updating**
   - Check Redux DevTools for state changes
   - Verify action dispatches
   - Check for mutation of state (use immutable updates)

### Performance Issues

1. **Slow Initial Load**

   - Enable code splitting
   - Optimize images
   - Reduce bundle size
   - Use lazy loading

2. **Slow Rerenders**

   - Use React DevTools Profiler
   - Add memoization where needed
   - Check for unnecessary rerenders

3. **Memory Leaks**
   - Clean up useEffect subscriptions
   - Cancel pending requests on unmount
   - Remove event listeners

### Browser Compatibility

1. **Modern Browser Features**

   - Use appropriate polyfills
   - Check browser support for features
   - Test on target browsers

2. **CSS Issues**
   - Use PostCSS autoprefixer
   - Test across different browsers
   - Avoid browser-specific features

### Getting Help

- Check browser console for errors
- Review network tab for API issues
- Use React DevTools for component inspection
- Check Redux DevTools for state debugging
- Search existing GitHub issues
- Create new issue with reproduction steps

## Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started

1. **Fork the Repository**

   - Click the "Fork" button on GitHub
   - Clone your fork locally

   ```bash
   git clone https://github.com/your-username/target-academy-frontend.git
   ```

2. **Create a Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make Your Changes**

   - Follow the coding guidelines
   - Write clean, documented code
   - Add tests for new features

4. **Commit Your Changes**

   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **Push to Your Fork**

   ```bash
   git push origin feature/your-feature-name
   ```

6. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Select your branch
   - Fill in the PR template
   - Request review

### Contribution Guidelines

1. **Code Quality**

   - Follow existing code style
   - Run linter before committing
   - Ensure all tests pass
   - Add comments for complex logic

2. **Commit Messages**

   - Use conventional commit format
   - Be clear and descriptive
   - Reference issues when applicable

3. **Pull Requests**

   - Keep PRs focused and small
   - Update documentation if needed
   - Add screenshots for UI changes
   - Respond to review feedback promptly

4. **Bug Reports**

   - Use issue templates
   - Provide reproduction steps
   - Include system information
   - Attach screenshots if applicable

5. **Feature Requests**
   - Describe the problem and solution
   - Explain use cases
   - Discuss implementation approach

### Code Review Process

1. Maintainers will review your PR
2. Address any requested changes
3. Once approved, your PR will be merged
4. Your contribution will be credited

### Community

- Be respectful and inclusive
- Help other contributors
- Share knowledge and best practices
- Participate in discussions

## License

This project is licensed under the terms specified in the LICENSE file. Please review the license before using or contributing to this project.

### License Summary

- Review LICENSE file for complete terms
- Ensure compliance with open source dependencies
- Contact maintainers for licensing questions

## Additional Resources

### Documentation

- **React Documentation**: [react.dev](https://react.dev/)
- **Vite Documentation**: [vitejs.dev](https://vitejs.dev/)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com/)
- **Redux Toolkit**: [redux-toolkit.js.org](https://redux-toolkit.js.org/)
- **React Router**: [reactrouter.com](https://reactrouter.com/)
- **React Hook Form**: [react-hook-form.com](https://react-hook-form.com/)
- **Zod**: [zod.dev](https://zod.dev/)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com/)
- **Radix UI**: [radix-ui.com](https://radix-ui.com/)

### Learning Resources

- React patterns and best practices
- Performance optimization techniques
- Accessibility guidelines (WCAG)
- Modern JavaScript features

### Support

For questions, issues, or support:

- Create an issue on GitHub
- Contact the development team
- Check existing documentation
- Review closed issues for solutions

### Acknowledgments

- Built with modern web technologies
- Thanks to all contributors
- Inspired by best practices in web development
- Community feedback and support

---

**Last Updated**: December 25, 2025

For the most up-to-date information, please refer to the project repository and documentation.
