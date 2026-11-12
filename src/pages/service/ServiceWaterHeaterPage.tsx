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
    title: "Needs & Site Assessment",
    description:
      "We look at how much hot water you use each day, the number of users and your rooftop or terrace space — then recommend the right capacity and type of system.",
  },
  {
    num: "02",
    title: "Supply & Installation",
    description:
      "Installation with approved, reputed brands — proper mounting, plumbing and connections to your existing water line, with safe workmanship and minimal disruption.",
  },
  {
    num: "03",
    title: "Service & AMC",
    description:
      "Periodic tube and tank checks, descaling where needed and breakdown support — the same statewide service network that backs our solar installations.",
  },
];

const FAQS: ServiceFaq[] = [
  {
    question: "Will it still give hot water on cloudy or rainy days?",
    answer:
      "Output is lower when there's less sunlight. Many systems can include an electric backup heating element for extended cloudy or monsoon spells, so you still get hot water when you need it.",
  },
  {
    question: "What capacity do I need?",
    answer:
      "It depends on your daily hot-water usage and the number of users. As a rough guide, a small family often starts around 100–200 litres, while hostels, hospitals and commercial kitchens need larger systems. We'll help you size it correctly.",
  },
];

export const ServiceWaterHeaterPage: React.FC = () => {
  return (
    <>
      <SeoHead
        title="Solar Water Heaters"
        description="Energy-efficient solar water heaters in Kerala. Save electricity on domestic, resort, and hospital water heating."
        keywords={getServiceKeywords("water-heater")}
        canonicalPath="/service-water-heater"
      />

      <ServiceLayout
        serviceId="water-heater"
        title="Solar Water Heaters"
        heroText="Heat water with free sunlight instead of electricity or gas. We supply and install evacuated-tube and flat-plate solar water heaters for homes, apartments, hostels, hospitals and commercial kitchens — sized to your daily hot-water needs and backed by the same service-first support as our solar power systems."
        steps={STEPS}
        faqs={FAQS}
      >
        <h3>Types We Supply</h3>
        <ul>
          <li>
            <strong>Evacuated Tube Collector (ETC):</strong> vacuum glass tubes
            that perform well even in cooler weather — a popular, cost-effective
            choice for homes.
          </li>
          <li>
            <strong>Flat Plate Collector (FPC):</strong> robust metal-based
            collectors suited to hard-water areas and larger or commercial
            requirements.
          </li>
          <li>
            <strong>Pressurised &amp; non-pressurised models,</strong> with
            capacities typically from 100 litres for homes up to larger systems
            for institutions and commercial use.
          </li>
        </ul>

        <h3>Where It Fits</h3>
        <p>
          Solar water heaters suit homes, apartments and villas as well as
          hostels, hospitals, hotels, resorts and commercial kitchens — anywhere
          with a steady daily need for hot water and reasonable rooftop access.
        </p>

        <h3>Honest Expectations</h3>
        <p>
          Hot-water output depends on sunlight, season, usage pattern and water
          quality — so we give realistic guidance, not guaranteed figures. Many
          systems can include an electric backup heater for extended cloudy
          spells, so you're never left without hot water. Final make, model and
          capacity are always as per your approved Natural Grid quotation.
        </p>
      </ServiceLayout>
    </>
  );
};
