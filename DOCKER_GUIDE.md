# 🐳 Docker Setup Guide for BOOM Stack

This guide will help you get the BOOM Stack demo running with Docker in just a few minutes!

## 📋 Prerequisites

- **Docker Desktop** installed and running
- **Node.js** (v18 or higher)
- **Git** for cloning the repository

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd boom-stack-demo

# Install Node.js dependencies
npm install

# Set up Docker environment
./docker-scripts.sh setup
```

### 2. Start MongoDB

```bash
# Start just MongoDB
./docker-scripts.sh start

# OR start MongoDB + Database Admin UI
./docker-scripts.sh start-all
```

### 3. Start the Application

```bash
# Start the Astro development server
npm run dev
```

### 4. Access Your Application

- **Main App**: http://localhost:3000
- **Database Admin** (if using start-all): http://localhost:8081

## 🔧 Docker Services

### MongoDB Container

- **Image**: mongo:7.0
- **Port**: 27017
- **Database**: boom-stack-demo
- **Username**: boomstack
- **Password**: boomstackpass

### Mongo Express (Optional)

- **Image**: mongo-express:1.0.0
- **Port**: 8081
- **Purpose**: Web-based MongoDB admin interface

## 📱 Testing the Setup

### 1. Check Docker Services

```bash
# Check if containers are running
./docker-scripts.sh status

# Should show something like:
# NAME                     COMMAND     SERVICE    STATUS    PORTS
# boom-stack-mongodb       ...         mongodb    Up        0.0.0.0:27017->27017/tcp
```

### 2. Test Database Connection

```bash
# View MongoDB logs
./docker-scripts.sh logs

# Look for successful initialization messages:
# ✅ BOOM Stack database initialized successfully!
# 📊 Sample tasks created
```

### 3. Test the Application

1. Open http://localhost:3000
2. You should see sample tasks already loaded
3. Try adding a new task
4. Try marking tasks as complete/incomplete
5. Try deleting tasks

## 🛠️ Troubleshooting

### Container Won't Start

```bash
# Check Docker is running
docker --version
docker-compose --version

# Check port availability
lsof -i :27017  # Should be empty if port is free

# Force restart
./docker-scripts.sh stop
./docker-scripts.sh start
```

### Database Connection Issues

```bash
# Check your .env file
cat .env

# Should contain:
# MONGODB_URI=mongodb://boomstack:boomstackpass@localhost:27017/boom-stack-demo?authSource=boom-stack-demo

# Test connection manually
docker exec boom-stack-mongodb mongosh "mongodb://boomstack:boomstackpass@localhost:27017/boom-stack-demo?authSource=boom-stack-demo"
```

### Application Errors

```bash
# Check Astro development server
npm run dev

# Look for MongoDB connection confirmation in the logs
```

## 🔄 Common Commands

### Daily Development

```bash
# Start development session
./docker-scripts.sh start
npm run dev

# When done
./docker-scripts.sh stop
```

### Database Management

```bash
# View database content via Mongo Express
./docker-scripts.sh start-all
# Then visit http://localhost:8081

# Reset database to initial state
./docker-scripts.sh reset
./docker-scripts.sh start
```

### Debugging

```bash
# View all container logs
./docker-scripts.sh logs

# Check container status
./docker-scripts.sh status

# Enter MongoDB container
docker exec -it boom-stack-mongodb bash
```

## 📊 Sample Data

The MongoDB container automatically creates sample tasks on first run:

1. **Welcome to BOOM Stack!** - Introduction task
2. **Explore HTMX Features** - Interactive demo task
3. **Test Alpine.js Reactivity** - Completed example task

You can reset to this initial state anytime with:

```bash
./docker-scripts.sh reset
./docker-scripts.sh start
```

## 🚀 Next Steps

Once everything is running:

1. **Explore the code** - Check out the project structure
2. **Modify components** - Try editing Astro components
3. **Add features** - Extend the task management functionality
4. **Learn the stack** - Study how HTMX and Alpine.js work together

## 💡 Tips

- Use `./docker-scripts.sh start-all` for development to access the database admin UI
- The MongoDB data persists between container restarts
- Use `./docker-scripts.sh reset` to start fresh with sample data
- Check logs if something isn't working: `./docker-scripts.sh logs`

Happy coding with the BOOM Stack! 🎉
