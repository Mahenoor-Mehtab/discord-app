import { createRouteHandler} from "uploadthing/next";

import {ourFileRouter} from './core';

// export const {Get , POST} = createNextRouteHandler({   router: ourFileRouter,})

export const GET = createRouteHandler({ router: ourFileRouter });
export const POST = createRouteHandler({ router: ourFileRouter });