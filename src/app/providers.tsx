'use client'

// import { SessionProvider } from 'next-auth/react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'
import ContactModal from '@/components/modal/ContactModal'
import { useModalStore } from '@/store/modalStore'
import useBodyScrollLock from '@/hooks/useBodyScrollLock'

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        refetchOnWindowFocus: false,
      },
    },
  }))

  const isOpen = useModalStore((state) => state.isOpen)
  useBodyScrollLock(isOpen)
  
  return (
    // <SessionProvider>
      <QueryClientProvider client={queryClient}>
        {children}
        <ContactModal />
      </QueryClientProvider>
    // </SessionProvider>
  )
}