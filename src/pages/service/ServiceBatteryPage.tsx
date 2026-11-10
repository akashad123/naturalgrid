import React from "react";
import {
  ServiceLayout,
  ServiceStep,
  ServiceFaq,
} from "@/components/service/ServiceLayout";
import { SeoHead } from "@/components/common/SeoHead";

const STEPS: ServiceStep[] = [
  {
    num: "01",
    title: "Load & Backup Assessment",
    description:
      "We assess which loads you need running during outages, for how long, and your site's grid reliability — so the battery capacity fits your actual needs.",
  },
  {
    num: "02",
    title: "Hybrid or On/Off-Grid Design",
    description:
      "Hybrid systems combine solar, grid and battery backup for uninterrupted power; off-grid systems provide independent, battery-based supply where the grid is unreliable or absent; On-grid systems combine solar and grid power to reduce electricity costs by exporting excess energy to the utility network through net metering.",
  },
  {
    num: "03",
    title: "Installation & Support",
    description:
      "Quality installation with approved materials, followed by long-term support — including AMC plans that cover batteries, inverters and protection systems.",
  },
];

const FAQS: ServiceFaq[] = [
  {
    question: "Will my solar work during a power cut?",
    answer:
      "Standard on-grid systems shut down automatically during grid failure for safety reasons (anti-islanding). If backup power matters to you, we'll design a hybrid or off-grid configuration with the right battery capacity for your essential loads.",
  },
  {
    question: "Can you add batteries to my existing system?",
    answer:
      "Yes, where technically feasible — we offer battery additions and upgrades to existing solar installations.",
  },
];

export const ServiceBatteryPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Battery Backup & Hybrid Systems"
        description="Hybrid solar power systems and energy storage in Kerala. Keep critical appliances running during grid power cuts."
        canonicalPath="/service-battery-backup"
      />

      <ServiceLayout
        title="Battery Backup & Grid Systems"
        heroText="Standard on-grid solar systems shut down during grid failure for safety (anti-islanding). If you need power during outages, a hybrid or off-grid system with batteries is required — and that's exactly what we design and install."
        steps={STEPS}
        faqs={FAQS}
      >
        <h3>What We Offer</h3>
        <ul>
          <li>
            Hybrid solar systems — solar, grid and battery backup combined for
            uninterrupted power.
          </li>
          <li>
            Off-grid solar systems — independent, battery-based systems for
            locations without reliable grid supply.
          </li>
          <li>
            On-grid solar systems — A standard on-grid solar system
            automatically shuts down during a power outage for safety reasons
            and does not provide backup power.
          </li>
          <li>
            Battery backup and UPS inverters — reliable backup power solutions
            for homes, farms and institutions.
          </li>
          <li>
            Battery additions and upgrades to existing solar installations,
            where technically feasible.
          </li>
        </ul>

        <h3>Design &amp; Installation</h3>
        <ul>
          <li>
            Battery capacity is sized to your actual backup needs — essential
            loads, backup duration and site conditions.
          </li>
          <li>
            We use approved, reputed brands and ISI-compliant materials; final
            make and model depend on technical design, availability and the
            approved quotation.
          </li>
          <li>
            Installation includes wiring, earthing and protection-system checks
            with safe workmanship.
          </li>
        </ul>

        <h3>Looking Ahead</h3>
        <p>
          Your energy journey doesn't end with installation. Natural Grid is
          expanding into battery storage systems, EV charging solutions, and
          smart clean-energy technologies to support the future of sustainable
          living. With dependable AMC services and a strong service network
          across Kerala, we ensure your solar investment continues to perform at
          its best for the long term.
        </p>
      </ServiceLayout>
    </>
  );
};
