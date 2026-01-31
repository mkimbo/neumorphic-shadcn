'use client'

import { useGlobalDialogStore, GlobalDialogVariant } from '@/components/ui/global-dialog/store'
import { ReactNode } from 'react'

export function useGlobalDialog() {
  const { open, close, isOpen } = useGlobalDialogStore()

  return {
    open: (
      view: ReactNode,
      options?: { variant?: GlobalDialogVariant; className?: string; maxWidth?: string },
    ) => {
      open(view, options)
    },
    close,
    isOpen,
  }
}
