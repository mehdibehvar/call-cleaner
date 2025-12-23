// Cached example - accesses dynamic data (database query)
// but caches it with use cache, allowing it to be included
// in the prerendered response:

import { getCompenies } from "../utils/helpers";

export async function GET() {
  const compenies = await getCompenies();
  return Response.json(compenies);
}
