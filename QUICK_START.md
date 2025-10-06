# 🚀 BOOM Stack - Quick Start

## For Users with Docker Already Running

If you've already run `docker-compose up -d`, you're almost there!

### Step 1: Create Environment File
```bash
echo 'MONGODB_URI=mongodb://boomstack:boomstackpass@localhost:27017/boom-stack-demo?authSource=boom-stack-demo' > .env
```

### Step 2: Install Dependencies
```bash
# Using Bun (recommended)
bun install

# Or using npm
npm install
```

### Step 3: Start the Application
```bash
# Using Bun
bun run dev

# Or using npm  
npm run dev
```

### Step 4: Open Your Browser
- **Main App**: http://localhost:3000
- **Database Admin**: http://localhost:8081

## What You'll See

✅ **Sample tasks** already loaded from MongoDB initialization  
✅ **Interactive forms** powered by Alpine.js  
✅ **Real-time updates** using HTMX (no page refreshes!)  
✅ **Modern UI** with Tailwind CSS  
✅ **Full-stack functionality** with Astro API routes  

## Quick Test

1. **Add a new task** using the form
2. **Mark tasks complete/incomplete** with the buttons
3. **Delete tasks** to see HTMX in action
4. **Try the Alpine.js counter** in the sidebar
5. **Check the database** at http://localhost:8081

## Troubleshooting

**Port 3000 in use?**
```bash
bun run dev --port 3001
```

**Database connection issues?**
```bash
docker-compose restart mongodb
```

**Missing environment file?**
```bash
echo 'MONGODB_URI=mongodb://boomstack:boomstackpass@localhost:27017/boom-stack-demo?authSource=boom-stack-demo' > .env
```

---

That's it! You're now running the full BOOM Stack. Explore the code to see how all the technologies work together! 🎉
