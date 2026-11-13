import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ScrollProgress } from "@/components/common/ScrollProgress";
import { GoogleAnalytics } from "@/components/common/GoogleAnalytics";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";
import { FloatingActions } from "./FloatingActions";

export const Layout: React.FC = () => {
  const location = useLocation();
  useScrollReveal(location.pathname);
  useSmoothScroll(location.pathname);

  return (
    <div className="site-wrapper flex flex-col min-h-screen">
      <GoogleAnalytics />
      <ScrollProgress />
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  );
};
