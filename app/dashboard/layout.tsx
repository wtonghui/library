"use client";
import React from "react";
import { AppSidebar } from "@/components/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen bg-surface">
      <SidebarProvider>
        <AppSidebar />
        {/* Sidebar */}

        <SidebarInset>
          <header className="flex h-14 shrink-0 items-center gap-2">
            <div className="flex flex-1 items-center gap-2 px-3">
              <SidebarTrigger />
            </div>
            <div className="ml-auto px-3"></div>
          </header>
          <div className="flex flex-1 flex-col gap-4 px-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
};

export default Layout;
