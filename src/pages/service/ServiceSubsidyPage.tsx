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
    title: "Eligibility Check",
    description:
      "We help you understand the current Government / MNRE scheme in force, your eligibility and the approved components required — with clear, verified information only.",
  },
  {
    num: "02",
    title: "Documentation & Application",
    description:
      "We assist with the correct application and complete documentation — KSEB bill, registered phone number, identity documents, site photographs and bank details where required.",
  },
  {
    num: "03",
    title: "KSEB Coordination & Approval",
    description:
      "Net-metering application, utility coordination and follow-up through verification and approval by the utility and authorities — handled on your behalf.",
  },
];

const FAQS: ServiceFaq[] = [
  {
    question: "Is the subsidy guaranteed?",
    answer:
      "No. Whether you receive a subsidy — and how much — depends on the current Government / MNRE scheme, your eligibility, use of approved components, correct documentation, and verification and approval by the authorities. We recommend being cautious of anyone who guarantees it.",
  },
  {
    question: "What documents will I need?",
    answer:
      "Usually your latest KSEB bill and the phone number registered with KSEB, an identity document where required, site photographs, and bank details if applying for subsidy. We'll guide you through the exact list — and never ask for passwords or OTPs.",
  },
];

export const ServiceSubsidyPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Solar Subsidy & Net Metering"
        description="Assistance with PM Surya Ghar solar subsidies and KSEB net metering in Kerala. Transparent process and documentation support."
        canonicalPath="/service-subsidy"
      />

      <ServiceLayout
        title="Solar Subsidy & Net Metering"
        heroText="Eligible residential rooftop solar customers may receive a central-government subsidy under the applicable MNRE scheme, credited directly to the customer's bank account after approval. We assist with the complete process."
        steps={STEPS}
        faqs={FAQS}
      >
        <h3>Subsidy Is Never Automatic</h3>
        <p>
          Whether you receive a subsidy — and how much — depends on several
          factors. We recommend being cautious of anyone who guarantees it.
          Subsidy depends on:
        </p>
        <ul>
          <li>The current Government / MNRE scheme in force.</li>
          <li>Customer eligibility.</li>
          <li>Use of approved components.</li>
          <li>Correct application and documentation.</li>
          <li>Verification and approval by the utility and authorities.</li>
        </ul>

        <h3>How Net Metering Works</h3>
        <p>
          Net metering allows your solar system to export surplus electricity to
          the grid and import when needed, with billing as per KSEB's applicable
          rules. We handle the coordination and paperwork with KSEB on your
          behalf, from application to commissioning.
        </p>

        <h3>Documents You'll Usually Need</h3>
        <ul>
          <li>Your latest KSEB bill and the phone number registered with KSEB.</li>
          <li>An identity document, where required.</li>
          <li>Site photographs.</li>
          <li>Bank details, if applying for subsidy.</li>
        </ul>
        <p>
          We'll guide you through the exact list. We will never ask for your
          passwords or OTPs — and always make payments directly to Natural Grid
          LLP, relying only on official Natural Grid quotations for pricing and
          commitments.
        </p>
      </ServiceLayout>
    </>
  );
};
