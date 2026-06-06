// pages/api/proxy.ts
//This is common when you need to hide sensitive information
// like API keys from the client-side or
//  when you need to make requests to an API that doesn't support CORS.
import type { NextApiRequest, NextApiResponse } from "next";

// Define the external API endpoint you want to proxy to
const EXTERNAL_API_URL =
  process.env.EXTERNAL_API_URL || "https://api.example.com"; // Replace with your actual API URL

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  // Extract the path from the incoming request, excluding '/api/proxy'
  // const path = req.url?.replace("/api/proxy", "");
  // console.log(EXTERNAL_API_URL);
  // if (!path) {
  //   return res.status(400).json({ message: 'Path is required' });
  // }

  // Construct the full URL for the external API
  // const apiUrl = `${EXTERNAL_API_URL}${path}`;

  // try {
  //   // Forward the request to the external API
  //   const response = await fetch(apiUrl, {
  //     method: req.method, // Use the same HTTP method as the incoming request
  //     headers: {
  //       // Forward any headers from the incoming request, you might want to selectively forward or add some
  //       'Content-Type': req.headers['content-type'] || 'application/json',
  //       'Authorization': `Bearer ${process.env.EXTERNAL_API_KEY}`, // Example: Add an authorization header
  //       ...Object.keys(req.headers).reduce((acc, key) => {
  //         // Avoid forwarding specific headers like host, nextjs specific headers etc.
  //         if (!['host', 'connection', 'transfer-encoding', 'content-length', 'cookie', 'next-action'].includes(key.toLowerCase())) {
  //           acc[key] = req.headers[key];
  //         }
  //         return acc;
  //       }, {} as Record<string, string | string[] | undefined>),
  //     },
  //     body: req.body ? JSON.stringify(req.body) : undefined, // Forward the request body if it exists
  //     // You might need to configure cache options depending on your needs
  //     // cache: 'no-store'
  //   });

  //   // Handle potential errors from the external API
  //   if (!response.ok) {
  //     console.error(`External API error: ${response.status} ${response.statusText}`);
  //     return res.status(response.status).json({ message: 'Error from external API', details: await response.text() });
  //   }

  //   // Parse the response from the external API
  //   const responseData = await response.json(); // Or response.text() if it's not JSON

  //   // Forward the response back to the client
  //   res.status(response.status).json(responseData);

  // } catch (error) {
  //   console.error('Proxy error:', error);
  //   res.status(500).json({ message: 'Internal server error during proxy request' });
  // }
}
