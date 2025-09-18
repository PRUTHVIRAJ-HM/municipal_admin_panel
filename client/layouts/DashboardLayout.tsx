import { Outlet, Link, useLocation } from "react-router-dom";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuBadge,
  SidebarSeparator,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Bell,
  LayoutDashboard,
  BarChart2,
  Settings,
  Sparkles,
  MapPin,
  KanbanSquare,
  Route,
  History,
  MessageSquare,
} from "lucide-react";

function NavItem({
  to,
  icon: Icon,
  label,
  badge,
}: {
  to: string;
  icon: React.ElementType;
  label: string;
  badge?: string;
}) {
  const location = useLocation();
  const isActive = location.pathname === to;
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive} tooltip={label}>
        <Link to={to} className="flex items-center gap-2">
          <Icon className="shrink-0" />
          <span>{label}</span>
        </Link>
      </SidebarMenuButton>
      {badge ? <SidebarMenuBadge>{badge}</SidebarMenuBadge> : null}
    </SidebarMenuItem>
  );
}

export default function DashboardLayout() {
  return (
    <SidebarProvider>
      <Sidebar collapsible="icon" variant="sidebar">
        <SidebarHeader>
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/90 text-primary-foreground shadow">
              <Sparkles className="h-4 w-4" />
            </div>
            <span className="text-base font-extrabold tracking-tight">
              Didasco
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarMenu>
              <NavItem to="/" icon={LayoutDashboard} label="Overview" />
              <NavItem to="/map" icon={MapPin} label="Map" />
              <NavItem to="/reports" icon={BarChart2} label="Reports" />
              <NavItem to="/tasks" icon={KanbanSquare} label="Tasks" />
              <NavItem to="/routing" icon={Route} label="Routing" />
              <NavItem to="/audit" icon={History} label="Audit" />
              <NavItem to="/comms" icon={MessageSquare} label="Comms" />
              <NavItem to="/settings" icon={Settings} label="Settings" />
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarSeparator />
        <SidebarFooter>
          <div className="px-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Didasco
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="sticky top-0 z-10 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
          <div className="flex h-14 items-center gap-3 px-4">
            <SidebarTrigger />
            <div className="flex-1 max-w-xl">
              <Input
                placeholder="Search from courses..."
                className="h-9 rounded-full"
              />
            </div>
            <Button variant="ghost" size="icon" aria-label="notifications">
              <Bell className="h-5 w-5" />
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/64?img=65" alt="user" />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <div className="px-4 py-6">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
