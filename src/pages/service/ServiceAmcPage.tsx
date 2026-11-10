import React from "react";
import {
  ServiceLayout,
  ServiceStep,
  ServiceFaq,
} from "@/components/service/ServiceLayout";
import { SeoHead } from "@/components/common/SeoHead";
import { siteConfig } from "@/config/site";

const STEPS: ServiceStep[] = [
  {
    num: "01",
    title: "Scheduled Inspection",
    description:
      "Periodic technical inspections protect generation, extend equipment life and catch small issues before they become expensive ones.",
  },
  {
    num: "02",
    title: "Monitoring & Diagnosis",
    description:
      "Generation analysis, performance reporting, low-generation diagnosis and inverter-error support — so your plant keeps generating at its best, year after year.",
  },
  {
    num: "03",
    title: "Breakdown Assistance",
    description:
      "Rapid response for unexpected system faults, spare-parts replacement coordination and warranty support with manufacturers where applicable.",
  },
];

const FAQS: ServiceFaq[] = [
  {
    question: "Can you service a system installed by someone else?",
    answer:
      "Yes. We provide AMC, repair and troubleshooting for solar plants regardless of who installed them — low generation, inverter errors, wiring concerns and more.",
  },
  {
    question: "How quickly do you respond to service requests?",
    answer:
      "We aim to acknowledge every service request within 24 hours. Visits are scheduled within 24–48 hours where practical, depending on location, urgency and technician availability.",
  },
];

export const ServiceAmcPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Annual Maintenance Contracts (AMC)"
        description="Comprehensive solar plant AMC and maintenance services in Kerala. Regular panel cleaning, inverter diagnostics, and quick breakdown repair."
        canonicalPath="/service-amc"
      />

      <ServiceLayout
        title="Annual Maintenance Contracts (AMC)"
        heroText="Most solar problems don't appear on day one. Dust build-up, wiring wear, inverter faults, loose connections and monsoon-related issues gradually reduce generation — often without the owner noticing. Our Annual Maintenance Contracts are designed to protect your investment."
        steps={STEPS}
        faqs={FAQS}
      >
        <h3>What AMC Covers</h3>
        <ul>
          <li>Periodic technical inspection of solar panels, inverters and mounting structures.</li>
          <li>Inverter diagnostics, fault troubleshooting and error-code clearance.</li>
          <li>Wiring, earthing and lightning-protection checks.</li>
          <li>Monitoring support and performance reporting.</li>
          <li>Breakdown assistance and preventive maintenance.</li>
          <li>
            Spare-parts replacement coordination and warranty coordination with manufacturers, where applicable.
          </li>
        </ul>

        <h3>Installed by Someone Else? No Problem.</h3>
        <p>
          Many of our AMC customers came to us after their original installer stopped responding. We provide AMC, repair and troubleshooting for solar plants regardless of who installed them — low generation, inverter errors, wiring concerns and more.
        </p>

        <h3>Our Service Commitment</h3>
        <ul>
          <li>We aim to acknowledge every service request within 24 hours.</li>
          <li>
            Visits are scheduled within 24–48 hours where practical, depending on location, urgency and technician availability.
          </li>
          <li>
            District-level technical teams are being built across all 14 districts of Kerala, coordinated from our Wayanad headquarters.
          </li>
        </ul>

        <h3>Get Your AMC Quote</h3>
        <p>
          AMC packages are customised to your system size, location and requirements. Contact us for the current package details and pricing — call{" "}
          <a href={`tel:${siteConfig.phoneRaw}`}>{siteConfig.phoneDisplay}</a> or email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </ServiceLayout>
    </>
  );
};
