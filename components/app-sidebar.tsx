import * as React from "react";
import {
  Share2 as Hub,
  Library,
  MessageSquare,
  LayoutDashboard,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutDashboard,
      isActive: true,
    },
    {
      title: "Chat",
      url: "/dashboard/chat",
      icon: MessageSquare,
    },
    {
      title: "Library",
      url: "/dashboard/library",
      icon: Library,
    },
    {
      title: "Sources",
      url: "#",
      icon: Hub,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  console.log(pathname, "====");
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <LayoutDashboard className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-medium">Editorial AI</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu
            onChange={(e) => {
              console.log(e, "====");
            }}
          >
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton
                  //   className="flex items-center gap-3 w-full px-4 py-3 transition-all duration-200 ease-in-out font-headline text-sm font-semibold tracking-tight rounded-lg bg-surface-container-highest/50 text-primary border-l-4 border-primary"
                  asChild
                  isActive={item.url === pathname}
                  className="[--sidebar-accent-foreground:#4441cc] [--primary:#4441cc] border-0 data-active:border-l-4 data-active:border-primary data-active:bg-sidebar-accent data-active:hover:bg-sidebar-accent hover:bg-transparent"
                >
                  <Link
                    className="h-[44px] bg-transparent py-3 px-4 justify-start"
                    href={item.url}
                  >
                    {/* <Button
                      variant="ghost"
                      className="h-[44px] bg-transparent py-3 px-4 justify-start"
                    > */}
                    <item.icon className="size-5" />
                    <span>{item.title}</span>
                    {/* </Button> */}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
