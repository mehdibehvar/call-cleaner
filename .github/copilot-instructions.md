# GitHub Copilot Instructions for call-cleaner

## Project Overview
This is a full-stack Next.js application with:
- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Express.js, MongoDB, JWT authentication
- **Styling**: Tailwind CSS with SCSS support
- **State Management**: Zustand
- **Package Manager**: pnpm

## Code Style & Conventions

### TypeScript
- Always use strict TypeScript
- Use explicit type annotations for function parameters and returns
- Prefer `interface` over `type` for object definitions
- Use `React.FC` or functional components with proper typing

### React & Next.js
- Use functional components with hooks
- Mark client-side components with `"use client"`
- Use Next.js App Router (not Pages Router)
- Follow Next.js folder structure conventions
- Use dynamic imports for code splitting when appropriate

### Tailwind CSS
- Use Tailwind utility classes for styling
- Follow mobile-first responsive design approach
- Use breakpoints: `sm:`, `md:`, `lg:`, `xl:`, `2xl:`
- Avoid inline styles; use Tailwind classes instead
- Use `cn()` utility from helpers for conditional classes

### File Structure
- Components in `src/modules/` organized by feature
- Services in `src/_lib/_services/` for API calls
- Types in `src/types/`
- Utilities in `src/_lib/utils/`
- Store logic in `src/_lib/stores/`

### Naming Conventions
- **Components**: PascalCase (e.g., `UserProfile.tsx`)
- **Files**: kebab-case (e.g., `user-profile.tsx`)
- **Functions/Variables**: camelCase
- **Constants**: UPPER_SNAKE_CASE
- **Interfaces/Types**: PascalCase

## Backend Guidelines

### Express & Node.js
- Use TypeScript for all backend code
- Implement proper error handling with try-catch
- Use middleware for cross-cutting concerns
- Validate input with Joi schemas
- Use Winston for logging
- Structure routes by feature

### Database (MongoDB)
- Use Mongoose for schema definition
- Define clear schemas with proper typing
- Use indexes for frequently queried fields
- Implement proper validation at model level

### Authentication
- Use JWT for token-based auth
- Hash passwords with bcrypt
- Implement refresh token rotation
- Validate tokens on protected routes

## Best Practices

### Code Quality
- Write clean, readable code with meaningful variable names
- Add JSDoc comments for complex functions
- Keep functions focused and small (single responsibility)
- DRY principle: avoid code duplication
- Use environment variables for configuration

### Performance
- Use lazy loading for images
- Implement pagination for large datasets
- Cache frequently accessed data
- Optimize bundle size
- Use Next.js Image optimization

### Security
- Never commit sensitive data (.env files)
- Sanitize user inputs
- Use HTTPS in production
- Implement CORS properly
- Validate data on both client and server

### Testing
- Write unit tests for utilities and services
- Use Jest for testing
- Test important user flows
- Aim for meaningful coverage, not 100%

## Git & Commit Messages
- Use conventional commits: `feat:`, `fix:`, `docs:`, `refactor:`, `test:`, `chore:`
- Keep commits focused and atomic
- Write clear, descriptive commit messages
- Reference issues when applicable

## Development Workflow

### Scripts
- `pnpm dev` - Start Next.js dev server
- `pnpm start-server` - Start Express backend with nodemon
- `pnpm dev:full` - Run both frontend and backend concurrently
- `pnpm build` - Build for production
- `pnpm lint` - Run ESLint
- `pnpm test` - Run Jest tests

### Environment Variables
- Create `.env.local` for local development
- Use `src/_lib/utils/env.ts` to access environment variables
- Never expose sensitive data to the client

## Common Patterns

### State Management
```typescript
// Use Zustand for global state
import { create } from 'zustand';

const useStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
```

### API Calls
- Use `http-client.ts` utility for API requests
- Handle errors properly with `onError.ts` utility
- Use TypeScript DTOs for type safety

### Component Structure
- Separate presentational and container components
- Use props for configuration
- Keep components reusable and composable
- Use proper TypeScript prop types

## When Unsure
- Check existing similar components or services
- Follow the established patterns in the codebase
- Maintain consistency with the project style
- Ask for clarification before making assumptions

---
**Last Updated**: May 2026
