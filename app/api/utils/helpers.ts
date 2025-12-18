import { cacheLife } from "next/cache"

export async function getProducts() {
  'use cache'
  // cacheLife({ stale: 300 }) // Cache for 5 minutes
  cacheLife({ revalidate: 300 }) // Cache for 5 minutes
    // Simulate a database call
    return await Promise.resolve([
      { id: 1, name: 'Product 1' },
      { id: 2, name: 'Product 2' },
      { id: 3, name: 'Product 3' }, { id: 4, name: 'Product 55' },
    ])  
}

// Good to know: use cache cannot be used directly inside a Route Handler body;
//  extract it to a helper function. Cached responses revalidate according to cacheLife 
// when a new request arrives.