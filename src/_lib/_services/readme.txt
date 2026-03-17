_services or _data in some cases

Purpose: Encapsulate business logic or API interactions.

Examples of what goes here:

userService.ts – functions to fetch or manipulate user data.

companyService.ts – functions to fetch or update company info via API or database.

Characteristics:

Often calls _lib helpers.

Acts as a layer between your data sources and the components.

May handle caching, data transformation, or error handling.