import React from "react";
import {
  ServiceLayout,
  ServiceStep,
  ServiceFaq,
} from "@/components/service/ServiceLayout";
import { SeoHead } from "@/components/common/SeoHead";
import { getServiceKeywords } from "@/config/site";

const STEPS: ServiceStep[] = [
  {
    num: "01",
    title: "Free Solar Consultation",
    description:
      "We review your KSEB bill, site conditions and energy needs to understand what system size and type fits you — with honest, verified information from the start.",
  },
  {
    num: "02",
    title: "Design & Quotation",
    description:
      "A custom on-grid, off-grid or hybrid design using approved, ISI-compliant materials — documented in an official Natural Grid quotation that states your components and warranties.",
  },
  {
    num: "03",
    title: "Installation & KSEB Coordination",
    description:
      "Safe, quality installation followed by net-metering coordination, subsidy documentation for eligible customers and commissioning then continued care through AMC.",
  },
];

const FAQS: ServiceFaq[] = [
  {
    question: "Do you guarantee how much power the system will generate?",
    answer:
      "No. Generation depends on weather, solar radiation, shade, panel orientation, temperature, cleanliness and equipment condition — so we give realistic estimates, never guaranteed output figures.",
  },
  {
    question: "Do you handle KSEB and subsidy paperwork?",
    answer:
      "Yes. We handle KSEB net-metering applications and the complete documentation involved in going solar. Eligible residential customers get full subsidy-scheme documentation support — we assist with the process but never guarantee approval or amounts.",
  },
];

export const ServiceInstallationPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Solar Power Plant Installation"
        description="Rooftop solar installation in Kerala. On-grid, off-grid, and hybrid solar systems engineered for Kerala homes and commercial properties."
        keywords={getServiceKeywords("installation")}
        canonicalPath="/service-installation"
      />

      <ServiceLayout
        title="Solar Power Plant Installation"
        heroText="Natural Grid offers end-to-end solar installation — design, supply, installation and commissioning of rooftop and ground-mounted systems for homes, businesses and institutions, with complete KSEB coordination and documentation assistance."
        steps={STEPS}
        faqs={FAQS}
      >
        <h3>System Types We Install</h3>
        <ul>
          <li>
            <strong>On-Grid (grid-tied):</strong> connected to the KSEB grid
            with net metering — surplus power is exported and adjusted against
            your bill. The most common, cost-effective choice for homes and
            businesses with reliable grid supply.
          </li>
          <li>
            <strong>Off-Grid:</strong> independent, battery-based systems for
            locations without reliable grid supply — your solar and batteries run
            the loads directly.
          </li>
          <li>
            <strong>Hybrid:</strong> solar, grid and battery backup combined —
            net-metering savings plus backup power during outages.
          </li>
        </ul>

        <h3>Consultation &amp; Site Assessment</h3>
        <p>
          We begin with a consultation — on-site or over the phone — to
          understand your electricity usage, site conditions and goals. We
          review your latest KSEB bill, roof or land availability, shading and
          load requirements. Generation depends on weather, solar radiation,
          shade, panel orientation, temperature, cleanliness and equipment
          condition — so we give realistic estimates, never guaranteed output
          figures.
        </p>

        <h3>Custom System Design &amp; Quotation</h3>
        <ul>
          <li>
            Based on the assessment, we design an on-grid, off-grid or hybrid
            system tailored to your needs — for homes, businesses, institutions
            or industry.
          </li>
          <li>
            We work with approved, reputed brands and ISI-compliant materials;
            final make and model depend on technical design, availability and the
            approved quotation.
          </li>
          <li>
            Component warranties are stated clearly in your quotation document —
            final terms are always as per the signed quotation and manufacturer
            conditions.
          </li>
        </ul>

        <h3>Installation, KSEB Coordination &amp; Commissioning</h3>
        <ul>
          <li>
            Our team installs panels, inverters, protection systems and wiring
            with safe workmanship and minimal disruption.
          </li>
          <li>
            We handle KSEB net-metering applications and the complete
            documentation involved in going solar.
          </li>
          <li>
            Eligible residential customers get full subsidy-scheme documentation
            support — we assist with the process but never guarantee approval or
            amounts.
          </li>
          <li>
            The system is commissioned, tested and handed over with clear
            documentation.
          </li>
        </ul>

        <h3>After Commissioning: We Stay With You</h3>
        <p>
          A solar plant is only as good as the service behind it. Every Natural
          Grid installation can be backed by a structured AMC plan — scheduled
          cleaning, inspection, performance monitoring and breakdown assistance
          — coordinated by district-level teams across Kerala.
        </p>
      </ServiceLayout>
    </>
  );
};
