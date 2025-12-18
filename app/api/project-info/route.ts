// Static example - doesn't access dynamic or runtime data,
//  so it will be prerendered at build time:

export async function GET() {
  return Response.json({
    projectName: 'Next.js',
  })
}