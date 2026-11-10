import React from "react";
import { Outlet } from "react-router-dom";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { TopBar } from "./TopBar";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingActions } from "./FloatingActions";

export const Layout: React.FC = () => {
  return (
    <div className="site-wrapper flex flex-col min-h-screen">
      <ScrollProgress />
      <TopBar />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
};
