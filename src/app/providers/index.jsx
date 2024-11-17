'use client'

import { QueryClientProvider } from '@tanstack/react-query'

import { Provider } from '@/components/ui/provider'
import { queryClient } from '@/lib/react-query'

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider>{children}</Provider>
    </QueryClientProvider>
  )
}
