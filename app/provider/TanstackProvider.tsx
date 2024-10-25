"use client"
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            staleTime: 60 * 60 * 1000,
            refetchOnWindowFocus: false,
        },
    }
});

export default function TanstackProvider({
    children,
    dehydratedState,
}: Readonly<{
    children: React.ReactNode;
    dehydratedState: unknown;
}>) {
    return (
        <QueryClientProvider client={queryClient}>
            <HydrationBoundary state={dehydratedState}>
                {children}
            </HydrationBoundary>
            <ReactQueryDevtools />
        </QueryClientProvider>

    );
}