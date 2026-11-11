import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { TopBar } from "./TopBar";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingActions } from "./FloatingActions";

export const Layout: React.FC = () => {
  const location = useLocation();
  useScrollReveal(location.pathname);
  useSmoothScroll(location.pathname);
  const isHome = location.pathname === "/" || location.pathname === "/index.html";

  return (
    <div className="site-wrapper flex flex-col min-h-screen">
      <ScrollProgress />
      {!isHome && <TopBar />}
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
};
