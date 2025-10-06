// MongoDB initialization script
// This script runs when the MongoDB container starts for the first time

print('🍃 Initializing BOOM Stack MongoDB database...');

// Switch to the boom-stack-demo database
db = db.getSiblingDB('boom-stack-demo');

// Create a user for the application
db.createUser({
  user: 'boomstack',
  pwd: 'boomstackpass',
  roles: [
    {
      role: 'readWrite',
      db: 'boom-stack-demo'
    }
  ]
});

// Create the tasks collection with some sample data
db.createCollection('tasks');

// Insert sample tasks
db.tasks.insertMany([
  {
    title: 'Welcome to BOOM Stack!',
    description: 'This is a sample task created during MongoDB initialization. Feel free to edit or delete it.',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Explore HTMX Features',
    description: 'Try adding, editing, and deleting tasks to see HTMX in action with real-time updates.',
    completed: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    title: 'Test Alpine.js Reactivity',
    description: 'Notice how the form validation and counter work with Alpine.js reactive components.',
    completed: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
]);

// Create indexes for better performance
db.tasks.createIndex({ "createdAt": -1 });
db.tasks.createIndex({ "completed": 1 });

print('✅ BOOM Stack database initialized successfully!');
print('📊 Sample tasks created');
print('🔐 Application user created: boomstack');
print('🚀 Ready to start your BOOM Stack application!');
