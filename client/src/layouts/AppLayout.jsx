import { Outlet } from "react-router-dom"
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import AppSidebar from "@/components/layout/AppSidebar"

export default function AppLayout() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="h-svh overflow-y-auto">
        <header className="sticky top-0 z-40 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur">
          <SidebarTrigger aria-label="Toggle sidebar" />
          <span className="text-sm font-semibold tracking-tight text-gradient-accent">
            SimManCee
          </span>
        </header>
        <div className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
