# Call Cleaner

## Getting Started

### Quick Start with Docker Compose (Recommended)

```bash
docker-compose up --build
```

This starts the entire full-stack application with one command:
- **Frontend**: http://localhost:3000 (Next.js)
- **Backend API**: http://localhost:5000 (Express)
- **Database**: MongoDB on port 27017

### Local Development Setup

If you prefer to run locally without Docker:

1. Clone the repo
   ```bash
   git clone <repo-url>
   cd call-cleaner
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Start MongoDB (ensure MongoDB is installed and running)
   ```bash
   mongod
   ```

4. In a new terminal, run the full-stack application
   ```bash
   pnpm dev:full
   ```

   Or run frontend and backend separately:
   ```bash
   # Terminal 1: Backend
   pnpm start-server
   
   # Terminal 2: Frontend
   pnpm dev
   ```

5. Open http://localhost:3000 in your browser

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Express.js, Node.js 22
- **Database**: MongoDB 6.0
- **State Management**: Zustand
- **Package Manager**: pnpm

## Useful Commands

- `docker-compose down` - Stop all services
- `docker-compose logs backend` - View backend logs
- `docker-compose logs frontend` - View frontend logs
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests
