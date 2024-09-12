import { createRouteHandler } from "uploadthing/next";
import { ourFileRouter } from "./core";

// Export the GET and POST routes
export const { GET, POST } = createRouteHandler({
  router: ourFileRouter,
});
