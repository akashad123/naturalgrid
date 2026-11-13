import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { CalculatorPage } from "@/pages/CalculatorPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { ContactPage } from "@/pages/ContactPage";
import { ServiceInstallationPage } from "@/pages/service/ServiceInstallationPage";
import { ServiceBatteryPage } from "@/pages/service/ServiceBatteryPage";
import { ServiceAmcPage } from "@/pages/service/ServiceAmcPage";
import { ServiceSubsidyPage } from "@/pages/service/ServiceSubsidyPage";
import { ServiceWaterHeaterPage } from "@/pages/service/ServiceWaterHeaterPage";
import { DistrictPage } from "@/pages/district/DistrictPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="calculator" element={<CalculatorPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />

        {/* District-wise Local SEO routes (all 14 Kerala districts) */}
        <Route
          path="solar-installation/:districtSlug"
          element={<DistrictPage />}
        />
        <Route
          path="solar-installation"
          element={<Navigate to="/service-installation" replace />}
        />

        {/* Service routes */}
        <Route
          path="service-installation"
          element={<ServiceInstallationPage />}
        />
        <Route
          path="service-battery-backup"
          element={<ServiceBatteryPage />}
        />
        <Route path="service-amc" element={<ServiceAmcPage />} />
        <Route path="service-subsidy" element={<ServiceSubsidyPage />} />
        <Route
          path="service-water-heater"
          element={<ServiceWaterHeaterPage />}
        />

        {/* Legacy .html redirects to maintain seamless SEO backwards-compatibility */}
        <Route path="index.html" element={<Navigate to="/" replace />} />
        <Route path="about.html" element={<Navigate to="/about" replace />} />
        <Route
          path="calculator.html"
          element={<Navigate to="/calculator" replace />}
        />
        <Route
          path="gallery.html"
          element={<Navigate to="/gallery" replace />}
        />
        <Route
          path="contact.html"
          element={<Navigate to="/contact" replace />}
        />
        <Route
          path="service-installation.html"
          element={<Navigate to="/service-installation" replace />}
        />
        <Route
          path="service-battery-backup.html"
          element={<Navigate to="/service-battery-backup" replace />}
        />
        <Route
          path="service-amc.html"
          element={<Navigate to="/service-amc" replace />}
        />
        <Route
          path="service-subsidy.html"
          element={<Navigate to="/service-subsidy" replace />}
        />
        <Route
          path="service-water-heater.html"
          element={<Navigate to="/service-water-heater" replace />}
        />
        <Route path="404.html" element={<Navigate to="/404" replace />} />
        <Route path="404" element={<NotFoundPage />} />

        {/* Catch-all */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
