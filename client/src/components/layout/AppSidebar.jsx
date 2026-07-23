import { Link, useLocation } from "react-router-dom"
import {
  Award,
  Bell,
  BookOpen,
  ChartLine,
  Gamepad2,
  Settings,
  Trophy,
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MOCK_USER } from "@/data/dashboardMock"

const NAV_ITEMS = [
  { label: "Simulations", icon: Gamepad2, to: "/simulations" },
  { label: "My Progress", icon: ChartLine, to: "/dashboard" },
  { label: "Leaderboard", icon: Trophy, comingSoon: true },
  { label: "Achievements", icon: Award, comingSoon: true },
  { label: "Resources", icon: BookOpen, comingSoon: true },
  { label: "Notifications", icon: Bell, comingSoon: true },
  { label: "Settings", icon: Settings, comingSoon: true },
]

export default function AppSidebar() {
  const { pathname } = useLocation()

  return (
    <Sidebar>
      <SidebarHeader className="px-5 pb-2 pt-5">
        <Link to="/" className="flex items-center gap-2.5">
          <img
            src={import.meta.env.BASE_URL + "logo.png"}
            alt="SimManCee logo"
            className="h-8 w-8 rounded-md object-contain"
          />
          <span className="text-base font-bold tracking-tight text-gradient-accent">
            SimManCee
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup className="px-3 pt-6">
          <SidebarGroupContent>
            <SidebarMenu className="gap-2.5">
              {NAV_ITEMS.map((item) =>
                item.comingSoon ? (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      aria-disabled="true"
                      className="h-auto cursor-default px-3 py-2.5 text-sidebar-foreground/40 hover:bg-transparent hover:text-sidebar-foreground/40"
                      title="Coming soon"
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                    <SidebarMenuBadge className="right-3 top-1/2 -translate-y-1/2 rounded-full bg-sidebar-accent px-1.5 text-[10px] font-medium uppercase tracking-wide text-sidebar-foreground/50 peer-data-[size=default]/menu-button:top-1/2">
                      soon
                    </SidebarMenuBadge>
                  </SidebarMenuItem>
                ) : (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname.startsWith(item.to)}
                      className="h-auto px-3 py-2.5"
                    >
                      <Link to={item.to}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 rounded-lg bg-sidebar-accent/60 px-3 py-3">
          <Avatar className="h-9 w-9">
            <AvatarFallback className="bg-primary text-xs font-semibold text-primary-foreground">
              {MOCK_USER.avatarInitials}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0">
            <p className="truncate text-sm font-medium">{MOCK_USER.name}</p>
            <p className="truncate text-xs text-sidebar-foreground/60">
              {MOCK_USER.levelLabel}
            </p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
