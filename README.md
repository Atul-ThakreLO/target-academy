# Target Academy of Science

## Overview
This is a modern frontend of Target academy of science

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (version 16.0 or higher)
- npm (version 7.0 or higher) or yarn
- Git

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Quick Start

### Installation
Clone the repository and install dependencies:

```bash
# Clone the project
git clone [your-repository-url]
cd [project-name]

# Install dependencies
npm install
# or
yarn
```

### Development
start the development server

```bash 
npm run dev
# or
yarn dev
```

### Building for production
Create a Production build

```bash
npm run build
# or
yarn build
```

### Preview
Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Available Scripts
-"dev": "vite",
-"build": "vite build",
-"lint": "eslint .",
-"preview": "vite preview"

## Best Practices
- Keep components small and focused
- Use absolute imports with `@` alias
- Follow the project's ESLint and Prettier configurations
- Write tests for critical functionality
- Use TypeScript for better type safety (if configured)

## Common Issues & Solutions
1. **Port Already in Use**
   ```bash
   kill -9 $(lsof -ti:5173)
   ```

2. **Node Version Mismatch**
   - Use nvm to switch to the correct Node version
   - Check `.nvmrc` file for the required version

3. **Build Failures**
   - Clear the cache: `npm run clean`
   - Remove node_modules and reinstall
