import { createRouteHandler} from "uploadthing/next";

import { ourFileRouter } from "./core";

export const {GET , POST} = createRouteHandler({ router: ourFileRouter });

// export const GET = createRouteHandler({ router: ourFileRouter });
// export const POST = createRouteHandler({ router: ourFileRouter });

//  from this page we move to uploadthing components