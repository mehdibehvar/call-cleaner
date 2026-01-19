_lib (short for "library")

Purpose: Place general-purpose utility functions or helpers that can be used across your project.

Examples of what goes here:

formatDate.ts – formatting dates.

generateSlug.ts – slugify strings.

logger.ts – logging wrapper.

fetchWrapper.ts – a generic fetch utility.

Characteristics:

Functions here are usually pure or stateless.

They don’t depend on a specific domain like User or Company.

Can be imported anywhere (pages, server actions, components).