'use client'

import { QueryClientProvider } from '@tanstack/react-query'

import { ToastProvider } from '@/app/providers/toaster'
import { Provider } from '@/components/ui/provider'
import { queryClient } from '@/lib/react-query'

export function Providers({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastProvider />
      <Provider>{children}</Provider>
    </QueryClientProvider>
  )
}
