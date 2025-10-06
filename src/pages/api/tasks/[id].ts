import type { APIRoute } from 'astro';
import { getTasksCollection } from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export const PUT: APIRoute = async ({ params, request }) => {
  try {
    const { id } = params;
    
    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: 'Invalid task ID' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    const body = await request.json();
    const collection = await getTasksCollection();
    
    const updateData = {
      ...body,
      updatedAt: new Date()
    };
    
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: updateData }
    );
    
    if (result.matchedCount === 0) {
      return new Response(JSON.stringify({ error: 'Task not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    const updatedTask = await collection.findOne({ _id: new ObjectId(id) });
    
    return new Response(JSON.stringify(updatedTask), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to update task' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

export const DELETE: APIRoute = async ({ params }) => {
  try {
    const { id } = params;
    
    if (!id || !ObjectId.isValid(id)) {
      return new Response(JSON.stringify({ error: 'Invalid task ID' }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    const collection = await getTasksCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return new Response(JSON.stringify({ error: 'Task not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    return new Response(JSON.stringify({ message: 'Task deleted successfully' }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to delete task' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
