import { headers } from 'next/headers'
// Runtime data example - accesses request-specific data.
//  Prerendering terminates when runtime APIs like headers() 
// are called: 
export async function GET() {
  const headersList = await headers()
  const userAgent = headersList.get('user-agent')
 
  return Response.json({ userAgent })
}