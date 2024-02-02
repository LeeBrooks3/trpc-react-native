import { createHTTPServer } from '@trpc/server/adapters/standalone';

import { appRouter } from './server/app';

createHTTPServer({
    router: appRouter,
    createContext() {
        return {};
    },
}).listen(3000);
