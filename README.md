# BOOM Stack Demo

- **Bun** - Fast runtime + package manager + native TypeScript support
- **Astro** - SSR framework with zero JS by default  
- **MongoDB** - Document database
- **HTMX** - Access AJAX, Server-Sent Events, and WebSockets directly in HTML
- **Alpine.js** - Reactive components composing behavior in HTML

## Quick Start

```bash
# 1. Start Docker services
docker-compose up -d

# 2. Create environment file
echo 'MONGODB_URI=mongodb://boomstack:boomstackpass@localhost:27017/boom-stack-demo?authSource=boom-stack-demo' > .env

# 3. Install and run
bun install && bun run dev

# 4. Open http://localhost:3000
```

## Features

Task management demo showcasing HTMX, Alpine.js, MongoDB, Astro, and Tailwind working together.

## Project Structure

```
boom-stack-demo/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── TaskForm.astro   # Task creation form with Alpine.js
│   │   └── TechStackInfo.astro # Interactive tech stack showcase
│   ├── layouts/
│   │   └── Layout.astro     # Base HTML layout with HTMX & Alpine
│   ├── lib/
│   │   └── mongodb.ts       # MongoDB connection and utilities
│   ├── pages/
│   │   ├── api/tasks/       # API endpoints for task CRUD operations
│   │   │   ├── index.ts     # GET/POST /api/tasks
│   │   │   ├── [id].ts      # PUT/DELETE /api/tasks/:id
│   │   │   └── html.ts      # GET /api/tasks/html (HTMX endpoint)
│   │   └── index.astro      # Main demo page
├── mongodb-init/            # MongoDB initialization scripts
│   └── init-db.js          # Database setup with sample data
├── astro.config.mjs         # Astro configuration
├── docker-compose.yml       # Docker services configuration
├── tailwind.config.mjs      # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```


## API

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET/POST` | `/api/tasks` | List/Create tasks |
| `PUT/DELETE` | `/api/tasks/:id` | Update/Delete task |
| `GET` | `/api/tasks/html` | HTMX endpoint |

## Production

```bash
# Build
bun run build

# Preview  
bun run preview
```

Set `MONGODB_URI` environment variable for production.