// Dynamic example - accesses non-deterministic operations. During the build, prerendering stops when Math.random() is called, 
// deferring to request-time rendering:

export async function GET() {
  return Response.json({
    randomNumber: Math.random(),
  })
}