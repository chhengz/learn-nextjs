// This route handler returns the current time
// caching works on production only
// use npm run build && npm run start to test  

export const dynamic = 'force-static';

// use revalidate to update caching
export const revalidate = 10; // update caching in 10 seconds

export async function GET() {
  return new Response(
    JSON.stringify({ currentTime: new Date().toLocaleTimeString() })
  );
}
