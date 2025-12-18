// Cached example - accesses dynamic data (database query) 
// but caches it with use cache, allowing it to be included 
// in the prerendered response:

import { getProducts } from '../utils/helpers';
 
export async function GET() {
  const products = await getProducts();
  console.log("Fetched products:", products);
  return Response.json(products )
}
 
