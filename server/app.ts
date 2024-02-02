import { publicProcedure, router } from './trpc';

export const appRouter = router({
    greeting: publicProcedure.query(() => 'hello tRPC v10!'),
    action: publicProcedure.mutation(() => 'hello tRPC v10!'),
});

export type AppRouter = typeof appRouter;
