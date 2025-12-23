import { cacheLife } from "next/cache";

export async function getCompenies() {
  "use cache";
  // cacheLife({ stale: 300 }) // Cache for 5 minutes
  cacheLife({ revalidate: 300 }); // Cache for 5 minutes
  // Simulate a database call
  return await Promise.resolve([
    {
      name: "Product 1",
      email: "Product 1",
      phone: "Product 1",
      short_description: "Product 1",
      long_description: "Product 1",
      image: "Product 1",
      rating: "Product 1",
      id: "Product 1",
    },
    {
      name: "Product 2",
      email: "Product 2",
      phone: "Product 2",
      short_description: "Product 2",
      long_description: "Product 2",
      image: "Product 2",
      rating: "Product 2",
      id: "Product 2",
    },
    {
      name: "Product 3",
      email: "Product 3",
      phone: "Product 3",
      short_description: "Product 3",
      long_description: "Product 3",
      image: "Product 3",
      rating: "Product 3",
      id: "Product 3",
    },
  ]);
}

// Good to know: use cache cannot be used directly inside a Route Handler body;
//  extract it to a helper function. Cached responses revalidate according to cacheLife
// when a new request arrives.
