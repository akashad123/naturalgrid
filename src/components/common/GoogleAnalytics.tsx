import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GA_MEASUREMENT_ID, trackPageView } from "@/utils/analytics";

/**
 * GoogleAnalytics Component
 * Injects gtag.js script and sends page_view events on client-side route transitions.
 * Does not render anything visible or disrupt SSR builds.
 */
export const GoogleAnalytics: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;

    // Check if script already injected
    const scriptId = "ga4-gtag-script";
    if (!document.getElementById(scriptId)) {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer!.push(arguments);
      };
      window.gtag("js", new Date());
      window.gtag("config", GA_MEASUREMENT_ID, {
        send_page_view: false, // We control pageviews manually below
      });

      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);
    }
  }, []);

  // Track page view on route changes
  useEffect(() => {
    if (typeof window === "undefined" || !GA_MEASUREMENT_ID) return;
    const url = location.pathname + location.search;
    trackPageView(url, document.title);
  }, [location.pathname, location.search]);

  return null;
};
