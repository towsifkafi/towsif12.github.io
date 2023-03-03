import { error } from '@sveltejs/kit';
 
/** @type {import('./$types').RequestHandler} */

export function GET({ url }) {
  console.log(url.pathname)

  return new Response(String(url.pathname))
}