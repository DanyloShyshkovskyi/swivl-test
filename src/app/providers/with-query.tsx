import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'

import { AxiosResponse } from 'axios'
import { toast } from 'sonner'

import { errorTransformer } from 'shared/utils'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 2, // or we can use Infinity
      retry: 0,
      refetchOnWindowFocus: false,
      select: (data: unknown) => (data as AxiosResponse).data,
      onError: (error: unknown | Error) => toast(errorTransformer(error)),
    },
  },
})

export const withQuery = (component: () => ReactNode) => () => (
  <QueryClientProvider client={queryClient} contextSharing>
    {component()}
  </QueryClientProvider>
)
