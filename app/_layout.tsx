import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

import { trpc } from '../client/trpc';
import {Slot} from "expo-router";

export default function AppLayout() {
    const [queryClient] = useState(() => new QueryClient());
    const [trpcClient] = useState(() =>
        trpc.createClient({
            links: [
                httpBatchLink({
                    url: 'http://localhost:3000',
                }),
            ],
        }),
    );

    return (
        <trpc.Provider client={trpcClient} queryClient={queryClient}>
            <QueryClientProvider client={queryClient}>
                <StatusBar style="auto" />
                <Slot />
            </QueryClientProvider>
        </trpc.Provider>
    );
}
