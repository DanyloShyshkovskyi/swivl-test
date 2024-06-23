import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AxiosResponse } from 'axios'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // or we can use Infinity
      retry: 0,
      refetchOnWindowFocus: false,
      select: (data: unknown) => (data as AxiosResponse).data,
    },
  },
})

export const withQuery = (component: () => ReactNode) => () => (
  <QueryClientProvider client={queryClient} contextSharing>
    {component()}
  </QueryClientProvider>
)
