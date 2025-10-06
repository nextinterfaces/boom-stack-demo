# 🎯 BOOM Stack Demo

> **🚀 Ready to run?** If you already have `docker-compose up -d` running and Bun installed, jump to the [Quick Commands](#-quick-commands-for-your-current-setup) section!

A comprehensive demonstration of the **BOOM Stack** - a modern web development stack combining:

- **🥖 Bun** - Fast JavaScript runtime, bundler, and package manager  
- **🚀 Astro** - Modern web framework for building fast, content-focused websites
- **🍃 MongoDB** - Document-oriented NoSQL database
- **⚡ HTMX** - Access AJAX, Server-Sent Events, and WebSockets directly in HTML
- **🏔️ Alpine.js** - Lightweight framework for composing behavior in HTML

## 🏃‍♂️ TL;DR - Run It Now!

If you have Docker containers running (`docker-compose up -d` done):

```bash
# 1. Create environment file
echo 'MONGODB_URI=mongodb://boomstack:boomstackpass@localhost:27017/boom-stack-demo?authSource=boom-stack-demo' > .env

# 2. Install dependencies  
bun install

# 3. Start the app
bun run dev

# 4. Open http://localhost:3000
```

Done! You should see the demo with sample tasks. 🎉

## ✨ Features

This demo showcases a complete task management application featuring:

- **Interactive Task Management** - Create, read, update, and delete tasks
- **Real-time Updates** - HTMX-powered dynamic content updates without page refreshes
- **Reactive UI Components** - Alpine.js for client-side interactivity and state management
- **Modern Styling** - Responsive design with Tailwind CSS
- **API-First Architecture** - RESTful API endpoints built with Astro
- **Database Integration** - MongoDB for persistent data storage
- **Server-Side Rendering** - Fast initial page loads with Astro
- **Progressive Enhancement** - Works with JavaScript disabled

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher) OR **Bun** runtime
- **Docker & Docker Compose** (for MongoDB)
- **Git** for cloning

### 🏃‍♂️ Running the Demo (You're Here!)

Since you already have Docker running, here are the simple steps:

1. **Verify your setup**
   ```bash
   # Check Docker containers are running
   docker-compose ps
   
   # You should see:
   # - boom-stack-mongodb (port 27017)
   # - boom-stack-mongo-express (port 8081)
   ```

2. **Install dependencies** (if not done already)
   ```bash
   # Using Bun (recommended)
   bun install
   
   # Or using npm
   npm install
   ```

3. **Start the application**
   ```bash
   # Using Bun
   bun run dev
   
   # Or using npm
   npm run dev
   ```

4. **Access your application**
   - **Main App**: http://localhost:3000
   - **Database Admin**: http://localhost:8081 (username: admin, password: password)

That's it! 🎉 You should see the BOOM Stack demo with sample tasks already loaded.

### ⚡ Quick Commands for Your Current Setup

Since you have Docker running and Bun ready:

```bash
# Create environment file (if not exists)
echo 'MONGODB_URI=mongodb://boomstack:boomstackpass@localhost:27017/boom-stack-demo?authSource=boom-stack-demo' > .env

# Install dependencies
bun install

# Start the app
bun run dev
```

### 🧪 Testing the Demo

Once running, try these features:

1. **Add a task** - Use the form to create new tasks
2. **Mark complete** - Click the "Complete" button on tasks  
3. **Delete tasks** - Click the "Delete" button
4. **Alpine.js demo** - Try the counter in the sidebar
5. **Database admin** - Visit http://localhost:8081 to see your data
6. **HTMX magic** - Notice no page refreshes during interactions!

### 🔧 Complete Setup (Fresh Installation)

If you're starting from scratch:


2. **Start MongoDB with Docker**
   # Option B: Direct docker-compose
   docker-compose up -d


3. **Create environment file**
   ```bash
   echo 'MONGODB_URI=mongodb://boomstack:boomstackpass@localhost:27017/boom-stack-demo?authSource=boom-stack-demo' > .env
   ```

4. **Run the application**
   ```bash
   bun run dev  # or npm run dev
   ```


## 🏗️ Project Structure

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
├── docker-scripts.sh        # Helper script for Docker commands
├── .env.docker             # Docker environment template
├── tailwind.config.mjs      # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## 🛠️ Technology Deep Dive

### Bun Runtime
- **Ultra-fast** JavaScript runtime and package manager
- **Native TypeScript** support without additional configuration
- **Built-in bundler** for optimized production builds
- **Drop-in replacement** for Node.js with better performance

### Astro Framework
- **Zero JavaScript** by default for optimal performance
- **Component Islands** architecture for selective hydration
- **Server-Side Rendering** for fast initial page loads
- **API Routes** for building full-stack applications

### MongoDB Database
- **Document-based** storage for flexible data modeling
- **CRUD Operations** with the official MongoDB Node.js driver
- **Connection pooling** for optimal performance
- **Async/await** support for modern JavaScript patterns

### HTMX Integration
- **Declarative AJAX** calls directly in HTML attributes
- **Partial page updates** without writing JavaScript
- **Progressive enhancement** that works without JS
- **Server-driven UI** for simplified state management

### Alpine.js Reactivity
- **Declarative** reactive data binding
- **Component state** management without complex frameworks
- **Event handling** and DOM manipulation
- **Small footprint** (15kb minified) with big capabilities

## 🔧 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/api/tasks` | Fetch all tasks (JSON) |
| `POST` | `/api/tasks` | Create a new task |
| `PUT` | `/api/tasks/:id` | Update a specific task |
| `DELETE` | `/api/tasks/:id` | Delete a specific task |
| `GET` | `/api/tasks/html` | Fetch tasks as HTML (for HTMX) |

## 🎨 Key Features Demonstrated

### 1. HTMX Dynamic Updates
- **No-JavaScript AJAX** - Update content without page refreshes
- **Progressive enhancement** - Works even with JavaScript disabled
- **Declarative syntax** - AJAX calls defined in HTML attributes
- **Optimistic updates** - Immediate UI feedback

### 2. Alpine.js Reactivity
- **Form validation** with real-time feedback
- **State management** for UI components
- **Event handling** for user interactions
- **Conditional rendering** based on component state

### 3. MongoDB Integration
- **Connection pooling** for optimal database performance
- **Error handling** with proper HTTP status codes
- **Data validation** and sanitization
- **Async operations** with proper error handling

### 4. Modern CSS with Tailwind
- **Responsive design** that works on all devices
- **Component-based styling** with utility classes
- **Custom animations** and transitions
- **Accessible UI** following best practices

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Environment Variables for Production

Make sure to set the following environment variables:

- `MONGODB_URI` - Your MongoDB connection string
- `NODE_ENV=production` - Enables production optimizations

### Docker Production Deployment

For production deployment with Docker:

```bash
# Build and start services
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d

# Or use Docker secrets for sensitive data
docker-compose -f docker-compose.yml -f docker-compose.secrets.yml up -d
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Bun team** for creating an incredibly fast JavaScript runtime
- **Astro team** for revolutionizing web development with their island architecture
- **MongoDB** for providing a flexible and powerful database solution
- **HTMX** for bringing back the simplicity of server-driven web applications
- **Alpine.js** for making JavaScript reactivity accessible and lightweight
- **Tailwind CSS** for enabling rapid UI development

---

**Happy coding with the BOOM Stack!** 🎉
