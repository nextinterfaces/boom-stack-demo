import type { APIRoute } from 'astro';
import { getTasksCollection } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export const GET: APIRoute = async ({ request }) => {
  try {
    const collection = await getTasksCollection();
    const tasks = await collection.find({}).sort({ createdAt: -1 }).toArray();
    
    const tasksHtml = tasks.map(task => `
      <div class="task-item bg-white rounded-lg shadow-md p-4 border-l-4 ${task.completed ? 'border-green-500 bg-green-50' : 'border-blue-500'} fade-in">
        <div class="flex items-center justify-between">
          <div class="flex-1">
            <h3 class="font-semibold text-gray-800 ${task.completed ? 'line-through text-gray-500' : ''}">${task.title}</h3>
            ${task.description ? `<p class="text-gray-600 text-sm mt-1">${task.description}</p>` : ''}
            <p class="text-xs text-gray-400 mt-2">
              Created: ${new Date(task.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div class="flex items-center space-x-2 ml-4">
            <button 
              hx-put="/api/tasks/${task._id}" 
              hx-headers='{"Content-Type": "application/json"}'
              hx-vals='{"completed": ${!task.completed}}'
              hx-target="#tasks-container"
              hx-get="/api/tasks/html"
              class="px-3 py-1 text-sm rounded ${task.completed ? 'bg-yellow-500 hover:bg-yellow-600 text-white' : 'bg-green-500 hover:bg-green-600 text-white'} transition-colors"
            >
              ${task.completed ? 'Undo' : 'Complete'}
            </button>
            <button 
              hx-delete="/api/tasks/${task._id}"
              hx-target="#tasks-container"
              hx-get="/api/tasks/html"
              hx-confirm="Are you sure you want to delete this task?"
              class="px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded transition-colors"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    `).join('');
    
    return new Response(tasksHtml, {
      status: 200,
      headers: {
        'Content-Type': 'text/html'
      }
    });
  } catch (error) {
    return new Response(`<div class="text-red-500 p-4">Error loading tasks</div>`, {
      status: 500,
      headers: {
        'Content-Type': 'text/html'
      }
    });
  }
};
