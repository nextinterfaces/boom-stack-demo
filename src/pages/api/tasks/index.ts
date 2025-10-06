import type { APIRoute } from 'astro';
import { getTasksCollection } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export const GET: APIRoute = async ({ request }) => {
  try {
    const collection = await getTasksCollection();
    const tasks = await collection.find({}).sort({ createdAt: -1 }).toArray();
    
    return new Response(JSON.stringify(tasks), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch tasks' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { title, description } = body;
    
    if (!title) {
      return new Response(JSON.stringify({ error: 'Title is required' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    const collection = await getTasksCollection();
    const newTask = {
      title,
      description: description || '',
      completed: false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    
    const result = await collection.insertOne(newTask);
    const insertedTask = await collection.findOne({ _id: result.insertedId });
    
    return new Response(JSON.stringify(insertedTask), {
      status: 201,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create task' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
