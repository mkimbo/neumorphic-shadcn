'use client'

import { ReactNode } from 'react'
import { Sidebar } from './Sidebar'
import { TopNav } from './TopNav'
import { useDashboard } from './DashboardProvider'

interface DashboardShellProps {
  children: ReactNode
}

export function DashboardShell({ children }: DashboardShellProps) {
  const { menuState, isMobile } = useDashboard()

  const getMarginLeft = () => {
    if (isMobile) return '0'
    if (menuState === 'collapsed') return '4rem'
    return '16rem'
  }

  return (
    <div className="flex h-screen bg-background">
      <Sidebar />

      <div
        className="flex flex-1 flex-col transition-all duration-300 ease-in-out"
        style={{ marginLeft: getMarginLeft() }}
      >
        <header
          className="fixed top-0 right-0 z-40 h-16 border-b border-border bg-card/80 backdrop-blur-sm transition-all duration-300 ease-in-out shadow-[2px_2px_6px_rgba(0,0,0,0.08),-2px_-2px_6px_rgba(255,255,255,0.4),inset_1px_1px_3px_rgba(255,255,255,0.3),inset_-1px_-1px_3px_rgba(0,0,0,0.08)] dark:shadow-[2px_2px_6px_rgba(0,0,0,0.3),-2px_-2px_6px_rgba(255,255,255,0.05),inset_1px_1px_3px_rgba(255,255,255,0.06),inset_-1px_-1px_3px_rgba(0,0,0,0.25)]"
          style={{
            left: getMarginLeft(),
          }}
        >
          <TopNav />
        </header>

        <main className="mt-16 flex-1 overflow-y-auto p-4 sm:p-6">{children}</main>
      </div>
    </div>
  )
}
