import { revalidateTag } from 'next/cache';

export async function POST(request) {
  try {
    const url = new URL(request.url);
    const secretToken = url.searchParams.get('secret');

    // Use an environment variable for the secret token
    if (secretToken !== process.env.REVALIDATE_SECRET) {
      return new Response(JSON.stringify({ error: 'Invalid secret token' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Revalidate the 'cms' tag
    revalidateTag('cms');
    console.log('Revalidated cms tag');

    return new Response(JSON.stringify({ revalidated: true, now: Date.now() }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error revalidating:', error);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
