/**
 * Structured, verified local SEO data model for all 14 districts of Kerala.
 * Powers the dynamic, scalable district landing pages under /solar-installation/:districtSlug.
 */

export interface DistrictProject {
  title: string;
  location: string;
  capacity?: string;
  type: string;
  imageSrc: string;
  imageAlt: string;
  description: string;
}

export interface DistrictFaq {
  question: string;
  answer: string;
}

export interface DistrictData {
  id: string;
  slug: string;
  name: string;
  malayalamName: string;
  region: "North Kerala" | "Central Kerala" | "South Kerala";
  title: string;
  metaDescription: string;
  keywords: string;
  heroHeadline: string;
  heroSubtext: string;
  overview: string[];
  majorTowns: string[];
  ksebCircles: string[];
  solarProfile: {
    avgSunHours: string;
    annualGenerationPerKw: string;
    roofSuitability: string;
    monsoonEngineering: string;
  };
  featuredProjects: DistrictProject[];
  faqs: DistrictFaq[];
  nearbyDistricts: string[];
}

export const KERALA_DISTRICTS: DistrictData[] = [
  {
    id: "thrissur",
    slug: "thrissur",
    name: "Thrissur",
    malayalamName: "തൃശ്ശൂർ",
    region: "Central Kerala",
    title: "Solar Installation in Thrissur | Rooftop Solar & AMC",
    metaDescription:
      "Expert solar panel installation in Thrissur by Natural Grid LLP. On-grid rooftop solar, KSEB net metering, subsidy support, and dedicated AMC across Thrissur district.",
    keywords:
      "solar installation Thrissur, solar company in Thrissur, rooftop solar Thrissur, solar panel price Thrissur, KSEB solar net metering Thrissur, solar AMC Thrissur",
    heroHeadline: "Engineered Rooftop Solar Installation in Thrissur",
    heroSubtext:
      "Save up to 90% on KSEB bills with high-efficiency rooftop solar systems engineered for homes, commercial complexes, and institutions across Thrissur district.",
    overview: [
      "Thrissur, the cultural capital and a thriving commercial hub of Kerala, experiences robust year-round solar irradiance averaging 4.8 to 5.2 kWh/m² daily. From independent homes in suburban Chalakkudy and Guruvayur to industrial units in Kunnamkulam and textile enterprises in Irinjalakuda, electricity consumption in Thrissur has escalated significantly.",
      "Natural Grid LLP provides end-to-end solar solutions across Thrissur district. We engineer robust on-grid, off-grid, and hybrid solar power plants using Tier-1 monocrystalline PERC and TOPCon panels paired with smart inverters. Our engineering accounts for Central Kerala's intense monsoon showers and wind loads through customized hot-dip galvanized (HDG) and anodized aluminum mounting frames.",
      "Our team directly oversees the complete liaison with Thrissur KSEB Electrical Circles (Thrissur East, Thrissur West, and Irinjalakuda), securing swift bi-directional net-meter clearances and ensuring full eligibility for Central Government PM Surya Ghar Muft Bijli Yojana subsidies.",
    ],
    majorTowns: [
      "Thrissur City",
      "Chalakkudy",
      "Kunnamkulam",
      "Guruvayur",
      "Kodungallur",
      "Wadakkanchery",
      "Irinjalakuda",
      "Pariyaram",
      "Chavakkad",
      "Ollur",
      "Mannuthy",
    ],
    ksebCircles: [
      "Thrissur East Electrical Circle",
      "Thrissur West Electrical Circle",
      "Irinjalakuda Electrical Circle",
    ],
    solarProfile: {
      avgSunHours: "4.8 – 5.2 kWh/m²/day",
      annualGenerationPerKw: "1,400 – 1,550 units/year",
      roofSuitability:
        "Elevated superstructures on traditional Kerala tiled roofs, flat concrete terraces, and commercial metal trapezoidal sheets.",
      monsoonEngineering:
        "Structural wind resistance certified up to 150 km/h with stainless steel SS304/SS316 fasteners and dual-stage earthing protection.",
    },
    featuredProjects: [
      {
        title: "Pariyaram Elevated Rooftop Solar Plant",
        location: "Pariyaram, Thrissur",
        capacity: "Residential On-Grid",
        type: "On-Grid with Net Metering",
        imageSrc: "/images/pariyaram-rooftop-solar-800.webp",
        imageAlt:
          "Rooftop solar panels on elevated steel frame installation at Pariyaram, Thrissur",
        description:
          "High-capacity rooftop array installed on an elevated structural steel frame, preserving terrace usability while generating clean electricity with KSEB net-metering integration.",
      },
      {
        title: "Residential Solar & Net Metering",
        location: "Chalakkudy, Thrissur",
        type: "Residential Rooftop",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Residential rooftop solar system installation in Thrissur",
        description:
          "High-efficiency monocrystalline solar panels fitted on residential concrete slab, bringing bi-monthly KSEB electricity bills to minimum tariff.",
      },
    ],
    faqs: [
      {
        question: "How does KSEB net metering work in Thrissur district?",
        answer:
          "When your solar plant generates more electricity than your home consumes during daytime, the surplus power feeds back into the KSEB grid. A bi-directional net meter records import and export units. At billing, export units are offset against import units, drastically reducing your bi-monthly bill.",
      },
      {
        question: "What subsidy is available for solar installations in Thrissur?",
        answer:
          "Under PM Surya Ghar Muft Bijli Yojana, residential installations in Thrissur receive up to ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and above. Natural Grid manages the national portal registration and subsidy liaison directly.",
      },
      {
        question: "Can solar panels be installed on traditional tiled roofs in Thrissur?",
        answer:
          "Yes. We design customized elevated hot-dip galvanized mounting structures that anchor securely to load-bearing columns without damaging roof tiles or causing water leakages during monsoons.",
      },
      {
        question: "How fast is your breakdown and AMC response in Thrissur?",
        answer:
          "Our central Kerala technical dispatch team provides a 24–48 hour on-site visit target for breakdown repairs, preventive inspections, and cleaning services across Thrissur district.",
      },
    ],
    nearbyDistricts: ["palakkad", "malappuram", "ernakulam"],
  },
  {
    id: "wayanad",
    slug: "wayanad",
    name: "Wayanad",
    malayalamName: "വയനാട്",
    region: "North Kerala",
    title: "Solar Installation in Wayanad | Headquarters & Service Team",
    metaDescription:
      "Natural Grid LLP headquarters in Sulthan Bathery, Wayanad. Complete solar installation, hybrid battery backup, and AMC across Kalpetta, Mananthavady, and Bathery.",
    keywords:
      "solar company Wayanad, solar installation Sulthan Bathery, solar panel Wayanad, solar battery backup Wayanad, solar AMC Wayanad, Kisan Service Society solar",
    heroHeadline: "Home-Grown Solar Excellence in Wayanad",
    heroSubtext:
      "Headquartered in Sulthan Bathery, Natural Grid LLP provides service-first solar energy, hybrid battery storage, and proactive maintenance throughout Wayanad.",
    overview: [
      "Wayanad's picturesque highland terrain presents distinct energy dynamics: frequent power interruptions during monsoon downpours, high resort and agricultural demand, and clean sun-drenched hill slopes during clear months. Headquartered at Anugraha Complex in Sulthan Bathery, Natural Grid LLP was founded to solve post-commissioning service challenges in this region.",
      "Our close partnership with local communities and field collaboration with the Kisan Service Society (KSS) enables rural and urban homes, coffee/tea plantation estates, homestays, and institutions across Kalpetta, Mananthavady, and Bathery to switch to dependable solar power.",
      "Because grid power cuts are common during gusty winds and heavy monsoons, we specialize in high-uptime hybrid solar systems pairing high-cycle lithium/tubular battery banks with Tier-1 inverters, ensuring critical loads continue running without outage.",
    ],
    majorTowns: [
      "Sulthan Bathery",
      "Kalpetta",
      "Mananthavady",
      "Meenangadi",
      "Ambalavayal",
      "Vythiri",
      "Panamaram",
      "Pulpally",
      "Meppadi",
    ],
    ksebCircles: ["Kalpetta Electrical Circle", "Mananthavady Electrical Circle"],
    solarProfile: {
      avgSunHours: "4.5 – 5.0 kWh/m²/day",
      annualGenerationPerKw: "1,350 – 1,480 units/year",
      roofSuitability:
        "High-slope GI truss roofs, RCC terraces, and resort villa roofs engineered for high-altitude mist and humidity.",
      monsoonEngineering:
        "Specialized corrosion-resistant coatings, lightning arrestors, and surge protection devices (SPDs) adapted for Western Ghat thunderstorms.",
    },
    featuredProjects: [
      {
        title: "Sulthan Bathery Commercial & Residential Installations",
        location: "Sulthan Bathery, Wayanad",
        capacity: "Headquarters Field Showcases",
        type: "On-Grid & Hybrid Solar",
        imageSrc: "/images/solar-team-800.webp",
        imageAlt: "Natural Grid technicians working on a solar installation in Wayanad",
        description:
          "Turnkey installations engineered by our Wayanad technical crew featuring custom mounting arrays, smart inverter telemetry, and KSEB net-metering integration.",
      },
      {
        title: "Plantation Homestay Hybrid Solar Array",
        location: "Kalpetta, Wayanad",
        type: "Hybrid Solar with Battery Backup",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Hybrid solar panels installed on a residential homestay in Wayanad",
        description:
          "Zero-downtime hybrid solar installation providing seamless power transition during grid outages while slashing bi-monthly KSEB expenses.",
      },
    ],
    faqs: [
      {
        question: "Where is Natural Grid's office located in Wayanad?",
        answer:
          "Our registered headquarters is located at Anugraha Complex, Near KSFE, Sulthan Bathery, Wayanad, Kerala - 673592. You can visit us directly or call +91 90726 34443.",
      },
      {
        question: "How do hybrid solar systems help with Wayanad power cuts?",
        answer:
          "Hybrid systems supply solar electricity to your property during the day, charge a dedicated battery bank, and automatically supply power within milliseconds when the KSEB grid fails.",
      },
      {
        question: "Do solar panels generate power during Wayanad rainy season?",
        answer:
          "Yes. Modern monocrystalline PERC and TOPCon panels absorb diffuse sunlight on overcast and misty days, continuing to produce between 25% and 40% of their rated capacity.",
      },
      {
        question: "How does Natural Grid handle after-sales service in Wayanad?",
        answer:
          "Since our headquarters and dedicated field technicians are based in Sulthan Bathery, we provide prompt local service dispatch within 24 hours across Kalpetta, Mananthavady, and surrounding areas.",
      },
    ],
    nearbyDistricts: ["kozhikode", "kannur", "malappuram"],
  },
  {
    id: "ernakulam",
    slug: "ernakulam",
    name: "Ernakulam",
    malayalamName: "എറണാകുളം",
    region: "Central Kerala",
    title: "Solar Installation in Ernakulam & Kochi | Rooftop Solar Company",
    metaDescription:
      "Premium rooftop solar installation across Kochi and Ernakulam. On-grid net metering, commercial solar, and AMC maintenance for residences, apartments, and enterprises.",
    keywords:
      "solar installation Ernakulam, solar company Kochi, rooftop solar Kochi, solar panels Ernakulam, commercial solar Kochi, solar AMC Ernakulam",
    heroHeadline: "Leading Rooftop Solar Engineering in Ernakulam & Kochi",
    heroSubtext:
      "Clean solar electricity for Kochi's villas, apartments, commercial institutions, and industrial parks. Slash commercial and domestic KSEB tariffs permanently.",
    overview: [
      "Ernakulam is Kerala's commercial locomotive, characterized by dense urban living in Kochi, burgeoning IT corridors in Kakkanad, and prominent manufacturing zones in Aluva and Angamaly. The district's rapid industrialization and heavy air conditioning demand place properties in high KSEB tariff slabs.",
      "Natural Grid delivers turnkey solar power plants across Ernakulam district. We provide precision site evaluations, multi-angle shadow simulations, structural load calculations, and premium Tier-1 components that guarantee clean, steady generation for decades.",
      "From residential rooftop arrays in Edappally, Tripunithura, and Kadavanthra to large commercial power plants in Kalamassery and Perumbavoor, we manage end-to-end KSEB net-meter approvals with Ernakulam Central and Perumbavoor Electrical Circles.",
    ],
    majorTowns: [
      "Kochi",
      "Kakkanad",
      "Aluva",
      "Angamaly",
      "Perumbavoor",
      "Muvattupuzha",
      "Tripunithura",
      "Kalamassery",
      "Kothamangalam",
      "North Paravur",
      "Piravom",
    ],
    ksebCircles: [
      "Ernakulam Electrical Circle",
      "Perumbavoor Electrical Circle",
      "Aluva Electrical Circle",
    ],
    solarProfile: {
      avgSunHours: "4.9 – 5.3 kWh/m²/day",
      annualGenerationPerKw: "1,420 – 1,560 units/year",
      roofSuitability:
        "High-rise concrete terraces, residential villa slabs, and industrial pre-engineered building (PEB) roofs.",
      monsoonEngineering:
        "Corrosion-resistant anodized aluminum mounting designed for coastal salinity and high humidity.",
    },
    featuredProjects: [
      {
        title: "Commercial Rooftop Solar Array",
        location: "Kakkanad, Ernakulam",
        capacity: "Commercial On-Grid",
        type: "Commercial Solar Power Plant",
        imageSrc: "/images/solar-team-800.webp",
        imageAlt: "Commercial solar rooftop installation in Kakkanad, Ernakulam",
        description:
          "Grid-tied commercial rooftop installation engineered with online cloud generation telemetry, significantly lowering operational electricity expenses.",
      },
      {
        title: "Residential Villa Net-Metered Solar",
        location: "Tripunithura, Ernakulam",
        type: "Residential Rooftop",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Residential rooftop solar system in Kochi, Ernakulam",
        description:
          "Sleek rooftop solar array installed with bi-directional KSEB net-metering, generating surplus power credited on monthly utility bills.",
      },
    ],
    faqs: [
      {
        question: "Can solar be installed on residential apartments in Kochi?",
        answer:
          "Yes. Residents associations (RWA) can install centralized solar plants on the common terrace to power common-area lighting, lifts, and water pumps under KSEB net metering.",
      },
      {
        question: "How much can a 3 kW solar plant save in Ernakulam?",
        answer:
          "A 3 kW on-grid solar plant generates approximately 360–400 units monthly, offsetting up to ₹3,000–₹3,500 on high-slab domestic KSEB bills and saving over ₹40,000 annually.",
      },
      {
        question: "Do coastal conditions in Ernakulam corrode solar structures?",
        answer:
          "We use marine-grade anodized aluminum and hot-dip galvanized steel certified for coastal environments, combined with SS304/SS316 fasteners that resist saline air corrosion.",
      },
      {
        question: "What is the typical installation timeline in Ernakulam?",
        answer:
          "Physical rooftop installation takes 2 to 4 days. KSEB inspection, bi-directional net-meter installation, and final commissioning typically conclude within 2 to 3 weeks.",
      },
    ],
    nearbyDistricts: ["thrissur", "alappuzha", "kottayam", "idukki"],
  },
  {
    id: "kozhikode",
    slug: "kozhikode",
    name: "Kozhikode",
    malayalamName: "കോഴിക്കോട്",
    region: "North Kerala",
    title: "Solar Installation in Kozhikode | Solar Company in Calicut",
    metaDescription:
      "Reliable solar panel installation in Kozhikode (Calicut) by Natural Grid LLP. On-grid rooftop systems, hybrid battery storage, and proactive AMC maintenance.",
    keywords:
      "solar installation Kozhikode, solar company in Calicut, rooftop solar Kozhikode, solar panel price Calicut, KSEB net metering Kozhikode, solar AMC Kozhikode",
    heroHeadline: "Trusted Solar Energy Engineering in Kozhikode",
    heroSubtext:
      "High-output rooftop solar systems engineered for Calicut residences, institutions, and healthcare centers. Turnkey KSEB net metering and subsidy support.",
    overview: [
      "Kozhikode (Calicut), the historic trading and educational epicenter of Malabar, enjoys high solar irradiance coupled with strong commercial growth. Rising power tariffs for domestic homes and commercial establishments across Mavoor Road, Feroke, Vadakara, and Koyilandy make solar the smartest long-term investment.",
      "Natural Grid delivers precision-engineered rooftop solar solutions throughout Kozhikode district. Our certified technicians assess your rooftop orientation, roof structural integrity, and local tree shadows to design high-yielding on-grid or hybrid power plants.",
      "We coordinate the entire administrative liaison with Kozhikode KSEB Electrical Circles (Kozhikode City and Vadakara), ensuring timely inspection, bi-directional net-meter swap, and prompt subsidy release under the PM Surya Ghar scheme.",
    ],
    majorTowns: [
      "Kozhikode City",
      "Vadakara",
      "Koyilandy",
      "Feroke",
      "Ramanattukara",
      "Balussery",
      "Koduvally",
      "Thamarassery",
      "Mukkam",
      "Kunnamangalam",
    ],
    ksebCircles: ["Kozhikode Electrical Circle", "Vadakara Electrical Circle"],
    solarProfile: {
      avgSunHours: "4.8 – 5.2 kWh/m²/day",
      annualGenerationPerKw: "1,400 – 1,520 units/year",
      roofSuitability:
        "RCC terraces, elevated truss roof canopies, and sloping tiled surfaces with non-penetrating clamps.",
      monsoonEngineering:
        "Engineered for coastal sea-breeze resistance, featuring IP66 inverters and dual-stage lightning surge protection.",
    },
    featuredProjects: [
      {
        title: "Residential Rooftop Solar System",
        location: "Kozhikode City",
        type: "On-Grid with Net Metering",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Rooftop solar panel installation in Kozhikode city",
        description:
          "Turnkey on-grid rooftop installation reducing household bimonthly KSEB energy bills while exporting excess generation back into the Calicut grid.",
      },
      {
        title: "Commercial Solar Power Installation",
        location: "Feroke, Kozhikode",
        type: "Commercial Rooftop Solar",
        imageSrc: "/images/solar-team-800.webp",
        imageAlt: "Commercial solar installation in Feroke, Kozhikode",
        description:
          "Robust solar rooftop plant deployed for an institutional facility, delivering clean renewable power and predictable annual operational savings.",
      },
    ],
    faqs: [
      {
        question: "How do I apply for solar subsidy in Kozhikode?",
        answer:
          "Natural Grid handles your entire registration on the PM Surya Ghar national portal, uploads roof specifications, coordinates KSEB approvals, and tracks subsidy credit directly to your bank account.",
      },
      {
        question: "Can I install solar panels on an elevated roof frame in Calicut?",
        answer:
          "Yes. Elevated structures allow you to continue utilizing your rooftop for laundry, drying, or recreational activities while generating clean solar power overhead.",
      },
      {
        question: "Does Natural Grid provide solar maintenance in Vadakara and Koyilandy?",
        answer:
          "Yes. Our North Kerala service technicians cover all regions of Kozhikode district, including Vadakara, Koyilandy, Thamarassery, and Feroke.",
      },
    ],
    nearbyDistricts: ["malappuram", "wayanad", "kannur"],
  },
  {
    id: "palakkad",
    slug: "palakkad",
    name: "Palakkad",
    malayalamName: "പാലക്കാട്",
    region: "Central Kerala",
    title: "Solar Installation in Palakkad | High Yield Rooftop Solar",
    metaDescription:
      "Maximize Kerala's highest solar yield with Natural Grid LLP in Palakkad. Turnkey on-grid rooftop solar, industrial arrays, and agricultural pump systems.",
    keywords:
      "solar installation Palakkad, solar company in Palakkad, rooftop solar Palakkad, solar panel price Palakkad, industrial solar Palakkad, KSEB net metering Palakkad",
    heroHeadline: "Harness Kerala’s Richest Solar Yield in Palakkad",
    heroSubtext:
      "Palakkad's abundant sunshine delivers the highest solar generation per kilowatt in Kerala. Maximize your clean energy ROI with precision engineering.",
    overview: [
      "Known as the gateway of Kerala and celebrated for its expansive sunshine, Palakkad registers the highest ambient temperatures and solar radiation levels in the state, averaging 5.2 to 5.6 kWh/m² daily. This geographic advantage yields significantly higher kilowatt-hour generation per panel than other districts.",
      "Natural Grid delivers specialized solar installations across Palakkad, Ottapalam, Chittur, and Mannarkkad. We optimize panel tilt angles and ventilation to counter thermal efficiency loss during hot summer months, utilizing high-temperature-coefficient Tier-1 panels.",
      "From manufacturing hubs in Kanjikode Industrial Area to agricultural estates and domestic residences, we provide turnkey engineering, KSEB net-metering approvals with Palakkad and Shornur Electrical Circles, and reliable AMC upkeep.",
    ],
    majorTowns: [
      "Palakkad Town",
      "Ottapalam",
      "Shornur",
      "Chittur",
      "Mannarkkad",
      "Alathur",
      "Pattambi",
      "Kanjikode",
      "Cherpulassery",
    ],
    ksebCircles: ["Palakkad Electrical Circle", "Shornur Electrical Circle"],
    solarProfile: {
      avgSunHours: "5.2 – 5.6 kWh/m²/day",
      annualGenerationPerKw: "1,550 – 1,700 units/year",
      roofSuitability:
        "Concrete terraces with rear-panel heat ventilation, expansive agro-shed roofs, and industrial sheds.",
      monsoonEngineering:
        "Wind-shear resistant structural bracing designed for the gusty Palakkad Gap winds.",
    },
    featuredProjects: [
      {
        title: "High-Capacity Rooftop Solar System",
        location: "Kanjikode, Palakkad",
        type: "Industrial Solar Plant",
        imageSrc: "/images/ground-mounted-array-800.webp",
        imageAlt: "High-capacity solar array in Kanjikode, Palakkad",
        description:
          "Engineered solar array designed to withstand high winds while generating maximum annual kilowatt-hours in Palakkad's sunny climate.",
      },
      {
        title: "Residential Solar & Net Metering",
        location: "Ottapalam, Palakkad",
        type: "Residential Rooftop Solar",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Residential rooftop solar system in Ottapalam, Palakkad",
        description:
          "High-yield residential solar installation producing over 420 units per month, completely eliminating domestic electricity charges.",
      },
    ],
    faqs: [
      {
        question: "Why do solar panels generate more electricity in Palakkad?",
        answer:
          "Palakkad receives fewer overcast days and higher solar irradiation due to its geographical location near the Palakkad Gap, resulting in 10%–15% more annual electricity generation compared to southern coastal areas.",
      },
      {
        question: "How do you protect panels from Palakkad's strong winds?",
        answer:
          "We use aerodynamic deflector framing, extra structural cross-bracings, and heavy-duty concrete foundation anchors certified for Palakkad Gap wind velocities.",
      },
      {
        question: "Can commercial facilities in Kanjikode benefit from solar net metering?",
        answer:
          "Yes. Commercial and LT industrial consumers can offset expensive commercial electricity rates under KSEB net metering or gross metering frameworks.",
      },
    ],
    nearbyDistricts: ["thrissur", "malappuram"],
  },
  {
    id: "malappuram",
    slug: "malappuram",
    name: "Malappuram",
    malayalamName: "മലപ്പുറം",
    region: "North Kerala",
    title: "Solar Installation in Malappuram | Rooftop Solar & Subsidy",
    metaDescription:
      "Turnkey solar panel installation in Malappuram, Manjeri, Tirur, and Perinthalmanna. Get KSEB net metering and PM Surya Ghar subsidy with Natural Grid LLP.",
    keywords:
      "solar installation Malappuram, solar company in Malappuram, rooftop solar Manjeri, solar panels Tirur, KSEB net metering Malappuram, solar AMC Malappuram",
    heroHeadline: "Dependable Rooftop Solar Systems in Malappuram",
    heroSubtext:
      "Join hundreds of Kerala homes and businesses saving thousands on electricity bills with precision-engineered rooftop solar from Natural Grid LLP.",
    overview: [
      "Malappuram is one of Kerala's most populous and rapidly developing districts, distinguished by spacious independent homes, prominent commercial trade, and growing eco-consciousness. Areas such as Manjeri, Perinthalmanna, Tirur, and Kottakkal have seen an unprecedented rise in domestic rooftop solar adoption.",
      "Natural Grid delivers customized rooftop solar engineering across Malappuram district. Whether your residence features a flat concrete terrace, an elevated metal canopy, or traditional sloping tiles, we design systems that maximize solar yield while blending with the home's aesthetics.",
      "Our team liaises directly with Malappuram, Tirur, and Nilambur KSEB Electrical Circles to streamline net-meter replacements, load feasibility audits, and prompt subsidy disbursement under PM Surya Ghar Muft Bijli Yojana.",
    ],
    majorTowns: [
      "Malappuram Town",
      "Manjeri",
      "Tirur",
      "Perinthalmanna",
      "Kottakkal",
      "Ponnani",
      "Nilambur",
      "Kondotty",
      "Parappanangadi",
      "Edappal",
    ],
    ksebCircles: [
      "Malappuram Electrical Circle",
      "Tirur Electrical Circle",
      "Nilambur Electrical Circle",
    ],
    solarProfile: {
      avgSunHours: "4.8 – 5.2 kWh/m²/day",
      annualGenerationPerKw: "1,400 – 1,520 units/year",
      roofSuitability:
        "Large villa concrete roofs, elevated steel patio structures, and commercial showroom rooftops.",
      monsoonEngineering:
        "Heavy-duty wind bracing and anti-corrosive fasteners engineered for Malabar seasonal monsoon squalls.",
    },
    featuredProjects: [
      {
        title: "Villa Rooftop Solar Installation",
        location: "Manjeri, Malappuram",
        type: "On-Grid with Net Metering",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Rooftop solar installation on a villa in Manjeri, Malappuram",
        description:
          "Custom-engineered on-grid solar plant installed on residential terrace, offsetting heavy air conditioning electricity expenses under KSEB net metering.",
      },
      {
        title: "Commercial Solar Power Plant",
        location: "Perinthalmanna, Malappuram",
        type: "Commercial Solar Rooftop",
        imageSrc: "/images/solar-team-800.webp",
        imageAlt: "Commercial solar rooftop installation in Perinthalmanna, Malappuram",
        description:
          "High-yield solar power installation for a healthcare commercial facility, providing steady clean power and reliable daily generation.",
      },
    ],
    faqs: [
      {
        question: "How much space is needed for a 3 kW solar plant in Malappuram?",
        answer:
          "A modern 3 kW solar plant requires approximately 200 to 250 square feet of shadow-free rooftop space. High-efficiency TOPCon panels allow higher wattage in smaller spaces.",
      },
      {
        question: "Can I run air conditioners on solar power in Malappuram?",
        answer:
          "Yes. An on-grid solar system feeds electricity directly into your property's distribution board, powering heavy appliances like air conditioners and water pumps seamlessly during daytime.",
      },
      {
        question: "Does Natural Grid provide solar maintenance across Malappuram?",
        answer:
          "Yes. We offer scheduled preventive AMC maintenance, panel washing, and electrical inspections across Malappuram, Manjeri, Tirur, and Perinthalmanna.",
      },
    ],
    nearbyDistricts: ["kozhikode", "palakkad", "thrissur", "wayanad"],
  },
  {
    id: "kannur",
    slug: "kannur",
    name: "Kannur",
    malayalamName: "കണ്ണൂർ",
    region: "North Kerala",
    title: "Solar Installation in Kannur | Coastal Engineered Rooftop Solar",
    metaDescription:
      "High-durability solar panel installation in Kannur, Thalassery, and Payyanur by Natural Grid LLP. Corrosion-resistant on-grid solar and KSEB net metering.",
    keywords:
      "solar installation Kannur, solar company in Kannur, rooftop solar Thalassery, solar panels Payyanur, KSEB net metering Kannur, solar AMC Kannur",
    heroHeadline: "Coastal-Resistant Rooftop Solar Systems in Kannur",
    heroSubtext:
      "Engineered with marine-grade structural components to withstand coastal salinity and heavy monsoons across Kannur, Thalassery, and Payyanur.",
    overview: [
      "Kannur's long coastal stretch and vibrant inland hubs like Thalassery, Payyanur, and Taliparamba demand specialized solar engineering. Coastal saline air accelerates galvanic corrosion on substandard mounting frames, making material selection paramount for long-term solar plant reliability.",
      "Natural Grid LLP engineers rooftop solar systems built specifically for Kannur's atmospheric conditions. We use certified anodized aluminum and marine-grade hot-dip galvanized mounting structures with SS304/SS316 hardware, completely eliminating rust and structural fatigue.",
      "We handle complete liaison with Kannur and Sreekandapuram KSEB Electrical Circles, managing everything from initial feasibility approval to final bi-directional net-meter commissioning and central PM Surya Ghar subsidy disbursement.",
    ],
    majorTowns: [
      "Kannur City",
      "Thalassery",
      "Payyanur",
      "Taliparamba",
      "Mattannur",
      "Iritty",
      "Koothuparamba",
      "Chakkarakkal",
      "Panoor",
    ],
    ksebCircles: ["Kannur Electrical Circle", "Sreekandapuram Electrical Circle"],
    solarProfile: {
      avgSunHours: "4.8 – 5.1 kWh/m²/day",
      annualGenerationPerKw: "1,380 – 1,500 units/year",
      roofSuitability:
        "Coastal concrete terraces, sloping tiled roofs with corrosion-proof clamps, and commercial factory sheds.",
      monsoonEngineering:
        "Marine-grade anodized aluminum (6063-T6) frames and stainless steel fasteners resistant to coastal sea spray.",
    },
    featuredProjects: [
      {
        title: "Coastal Residential Rooftop Solar",
        location: "Thalassery, Kannur",
        type: "On-Grid with Net Metering",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Rooftop solar installation in Thalassery, Kannur",
        description:
          "Corrosion-resistant solar installation engineered for coastal conditions, delivering clean power and dramatic reductions in bi-monthly KSEB charges.",
      },
      {
        title: "Commercial Institution Solar Plant",
        location: "Payyanur, Kannur",
        type: "Commercial Solar Power",
        imageSrc: "/images/solar-team-800.webp",
        imageAlt: "Commercial solar installation in Payyanur, Kannur",
        description:
          "Turnkey commercial solar array deployed for an educational institution, providing high daytime power output with zero recurring fuel costs.",
      },
    ],
    faqs: [
      {
        question: "How do you prevent salt-air corrosion on solar panels in Kannur?",
        answer:
          "We use PID-resistant Tier-1 solar modules with salt-mist corrosion certification (IEC 61701), combined with anodized aluminum mounting frames and SS304/SS316 stainless fasteners.",
      },
      {
        question: "What is the KSEB net-metering procedure in Kannur?",
        answer:
          "We submit the application on the KSEB Soura portal, conduct site inspection with section engineers, install approved protective switchgear, and replace your existing meter with a bi-directional net meter.",
      },
      {
        question: "Does Natural Grid service inland areas like Iritty and Taliparamba?",
        answer:
          "Yes. Our North Kerala technical teams cover all municipalities and grama panchayats across Kannur district.",
      },
    ],
    nearbyDistricts: ["kasaragod", "kozhikode", "wayanad"],
  },
  {
    id: "kasaragod",
    slug: "kasaragod",
    name: "Kasaragod",
    malayalamName: "കാസർഗോഡ്",
    region: "North Kerala",
    title: "Solar Installation in Kasaragod | Rooftop Solar & KSEB Net Metering",
    metaDescription:
      "Dependable solar panel installation across Kasaragod, Kanhangad, and Nileshwar. Natural Grid LLP provides on-grid solar, hybrid systems, and prompt AMC support.",
    keywords:
      "solar installation Kasaragod, solar company Kasaragod, rooftop solar Kanhangad, solar panels Nileshwar, KSEB net metering Kasaragod, solar subsidy Kasaragod",
    heroHeadline: "Clean Renewable Solar Energy in Kasaragod",
    heroSubtext:
      "Expert solar engineering for Kasaragod homes, plantations, and commercial facilities. Built for coastal resilience and backed by lifetime AMC care.",
    overview: [
      "Kasaragod, the northern gateway of Kerala, benefits from abundant sunshine and expansive residential and agricultural properties. From coastal towns like Kanhangad and Nileshwar to interior plantation hubs like Uppala and Cheruvathur, solar adoption offers significant electricity savings.",
      "Natural Grid delivers turnkey solar solutions throughout Kasaragod district. Our systems are built with marine-grade materials to prevent corrosion from Arabian Sea breezes, backed by rigorous earthing and surge protection to protect valuable electronics.",
      "We manage complete administrative liaison with Kasaragod KSEB Electrical Circle, securing prompt feasibility clearances, net-meter replacements, and PM Surya Ghar central subsidies for residential owners.",
    ],
    majorTowns: [
      "Kasaragod Town",
      "Kanhangad",
      "Nileshwar",
      "Uppala",
      "Cheruvathur",
      "Manjeshwar",
      "Kumbla",
      "Trikaripur",
    ],
    ksebCircles: ["Kasaragod Electrical Circle"],
    solarProfile: {
      avgSunHours: "4.8 – 5.2 kWh/m²/day",
      annualGenerationPerKw: "1,400 – 1,520 units/year",
      roofSuitability:
        "Concrete flat slabs, tiled verandas with custom elevated steel framing, and agricultural sheds.",
      monsoonEngineering:
        "Heavy-duty structural anchoring designed for coastal squalls and intense seasonal monsoon rainfall.",
    },
    featuredProjects: [
      {
        title: "Residential Solar & Net Metering",
        location: "Kanhangad, Kasaragod",
        type: "On-Grid with Net Metering",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Residential rooftop solar system in Kanhangad, Kasaragod",
        description:
          "Turnkey rooftop solar plant providing clean green electricity and eliminating expensive bi-monthly domestic KSEB electricity bills.",
      },
    ],
    faqs: [
      {
        question: "Can I install solar panels for my arecanut plantation in Kasaragod?",
        answer:
          "Yes. We design customized solar pump and hybrid power systems that power irrigation pumps, processing machinery, and estate bungalows independently.",
      },
      {
        question: "How long does solar installation take in Kasaragod?",
        answer:
          "Rooftop physical erection takes 2–3 days. KSEB grid synchronization and net-meter commissioning usually complete within 2–3 weeks.",
      },
    ],
    nearbyDistricts: ["kannur"],
  },
  {
    id: "kottayam",
    slug: "kottayam",
    name: "Kottayam",
    malayalamName: "കോട്ടയം",
    region: "Central Kerala",
    title: "Solar Installation in Kottayam | Rooftop Solar Company",
    metaDescription:
      "Expert solar panel installation in Kottayam, Changanassery, and Pala. Natural Grid LLP provides on-grid rooftop solar, KSEB net metering, and subsidy liaison.",
    keywords:
      "solar installation Kottayam, solar company in Kottayam, rooftop solar Changanassery, solar panels Pala, KSEB net metering Kottayam, solar subsidy Kottayam",
    heroHeadline: "Precision Rooftop Solar Installation in Kottayam",
    heroSubtext:
      "Save on domestic and commercial electricity costs with high-efficiency rooftop solar installations tailored for Kottayam's residences, hospitals, and educational hubs.",
    overview: [
      "Kottayam, recognized for its high literacy, extensive rubber estates, and premier healthcare and educational institutions, has emerged as a frontrunner in rooftop solar adoption. Properties across Changanassery, Pala, Ettumanoor, and Kanjirappally experience substantial daytime electricity consumption from cooling and lighting.",
      "Natural Grid delivers custom solar engineering across Kottayam district. We engineer robust on-grid and hybrid systems that fit harmoniously on architectural villas, traditional tiled rooftops, and institutional complexes.",
      "Our team liaises directly with Kottayam and Pala KSEB Electrical Circles, ensuring seamless net-meter approvals, rapid bi-directional meter installation, and complete documentation assistance for PM Surya Ghar subsidies.",
    ],
    majorTowns: [
      "Kottayam Town",
      "Changanassery",
      "Pala",
      "Ettumanoor",
      "Kanjirappally",
      "Vaikom",
      "Erattupetta",
      "Pambady",
    ],
    ksebCircles: ["Kottayam Electrical Circle", "Pala Electrical Circle"],
    solarProfile: {
      avgSunHours: "4.7 – 5.1 kWh/m²/day",
      annualGenerationPerKw: "1,380 – 1,500 units/year",
      roofSuitability:
        "Traditional sloping tile roofs with specialized clamp brackets, concrete terraces, and commercial sheds.",
      monsoonEngineering:
        "Certified wind loading engineering with high-grade anti-corrosive fasteners and dual-stage surge protection.",
    },
    featuredProjects: [
      {
        title: "Villa Rooftop Solar Installation",
        location: "Pala, Kottayam",
        type: "Residential On-Grid Solar",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Rooftop solar panel installation on a villa in Pala, Kottayam",
        description:
          "Custom-engineered on-grid solar plant installed on residential sloping roof, offsetting heavy domestic KSEB energy charges.",
      },
    ],
    faqs: [
      {
        question: "Can solar panels be installed without drilling through roof tiles in Kottayam?",
        answer:
          "Yes. We use specialized non-penetrating rafter hooks and tile clamps that preserve the integrity of your roof tiles while providing strong structural anchorage.",
      },
      {
        question: "What is the warranty on solar installations in Kottayam?",
        answer:
          "Our solar modules come with a 25-year performance warranty, smart inverters carry a 5 to 10-year manufacturer warranty, and Natural Grid provides comprehensive installation warranties.",
      },
    ],
    nearbyDistricts: ["idukki", "ernakulam", "alappuzha", "pathanamthitta"],
  },
  {
    id: "alappuzha",
    slug: "alappuzha",
    name: "Alappuzha",
    malayalamName: "ആലപ്പുഴ",
    region: "Central Kerala",
    title: "Solar Installation in Alappuzha | Coastal & Backwater Solar",
    metaDescription:
      "Specialized corrosion-resistant solar panel installation in Alappuzha, Cherthala, and Kayamkulam. Marine-grade on-grid solar and KSEB net metering.",
    keywords:
      "solar installation Alappuzha, solar company in Alappuzha, rooftop solar Cherthala, solar panels Kayamkulam, KSEB net metering Alappuzha, solar AMC Alappuzha",
    heroHeadline: "Marine-Grade Rooftop Solar Systems in Alappuzha",
    heroSubtext:
      "Engineered for coastal humidity and saline atmospheres across Alappuzha, Cherthala, and Kayamkulam. Backed by dedicated lifetime maintenance.",
    overview: [
      "Alappuzha, renowned for its coastal beauty, backwaters, and thriving tourism and coir sectors, demands specialized solar design. The high humidity and coastal salt-spray can degrade standard hardware if not engineered with anti-corrosive materials.",
      "Natural Grid delivers marine-grade rooftop solar systems across Alappuzha district. From resorts and homestays along the backwaters to homes and commercial facilities in Cherthala, Kayamkulam, and Mavelikkara, we install high-efficiency panels that deliver reliable power under humid conditions.",
      "We manage the entire liaison with Alappuzha and Harippad KSEB Electrical Circles, ensuring swift net-metering approvals, zero bureaucratic delays, and direct PM Surya Ghar subsidy processing.",
    ],
    majorTowns: [
      "Alappuzha Town",
      "Cherthala",
      "Kayamkulam",
      "Mavelikkara",
      "Chengannur",
      "Harippad",
      "Ambalapuzha",
      "Aroor",
    ],
    ksebCircles: ["Alappuzha Electrical Circle", "Harippad Electrical Circle"],
    solarProfile: {
      avgSunHours: "4.8 – 5.2 kWh/m²/day",
      annualGenerationPerKw: "1,400 – 1,520 units/year",
      roofSuitability:
        "Resort villa roofs, coastal concrete terraces, and commercial seafood/coir industrial sheds.",
      monsoonEngineering:
        "Marine-grade anodized aluminum (6063-T6) and SS316 fasteners designed to withstand saline air and coastal winds.",
    },
    featuredProjects: [
      {
        title: "Coastal Resort Solar Installation",
        location: "Alappuzha Backwaters",
        type: "Commercial On-Grid Solar",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Rooftop solar array installed on a resort in Alappuzha",
        description:
          "Marine-grade solar power installation providing sustainable clean energy for hospitality operations with KSEB net-metering integration.",
      },
    ],
    faqs: [
      {
        question: "How do solar panels perform in Alappuzha's coastal environment?",
        answer:
          "We deploy salt-mist certified Tier-1 panels and marine-grade mounting structures that resist humidity and salt-spray, ensuring uninterrupted 25-year performance.",
      },
      {
        question: "Can houseboats or homestays in Alappuzha install solar power?",
        answer:
          "Yes. We engineer customized hybrid and off-grid solar solutions for waterfront homestays and commercial properties with battery storage.",
      },
    ],
    nearbyDistricts: ["ernakulam", "kottayam", "pathanamthitta", "kollam"],
  },
  {
    id: "idukki",
    slug: "idukki",
    name: "Idukki",
    malayalamName: "ഇടുക്കി",
    region: "Central Kerala",
    title: "Solar Installation in Idukki | High-Altitude & Hybrid Solar",
    metaDescription:
      "Specialized high-altitude solar installation across Thodupuzha, Munnar, and Kattappana. Hybrid battery backup and off-grid solar by Natural Grid LLP.",
    keywords:
      "solar installation Idukki, solar company in Thodupuzha, solar panels Munnar, solar battery backup Kattappana, off grid solar Idukki, solar AMC Idukki",
    heroHeadline: "High-Altitude Solar & Battery Storage in Idukki",
    heroSubtext:
      "Dependable solar energy and hybrid battery backup engineered for Idukki's plantation estates, resorts, and homes prone to grid power interruptions.",
    overview: [
      "Idukki's rugged mountain terrain, home to Kerala's major hydroelectric reservoirs, experiences frequent transmission line disruptions during severe monsoons and high winds. Commercial tea and cardamom plantations, resorts in Munnar, and homes in Thodupuzha and Kattappana require resilient energy independence.",
      "Natural Grid specializes in high-altitude solar engineering across Idukki district. We design heavy-duty hybrid solar plants with advanced lithium-iron-phosphate (LiFePO4) or tubular battery backup that keep critical loads energized during prolonged grid blackouts.",
      "We manage KSEB net-metering and PM Surya Ghar subsidy coordination with Thodupuzha and Kattappana Electrical Circles, ensuring smooth approvals and reliable ongoing AMC service.",
    ],
    majorTowns: [
      "Thodupuzha",
      "Kattappana",
      "Munnar",
      "Nedumkandam",
      "Adimali",
      "Kumily",
      "Peerumade",
      "Vandiperiyar",
    ],
    ksebCircles: ["Thodupuzha Electrical Circle", "Kattappana Electrical Circle"],
    solarProfile: {
      avgSunHours: "4.5 – 5.0 kWh/m²/day",
      annualGenerationPerKw: "1,320 – 1,460 units/year",
      roofSuitability:
        "High-angle GI truss sheets, plantation bungalow roofs, and concrete terraces.",
      monsoonEngineering:
        "Specialized lightning arrestors, heavy-duty earthing, and wind-braced structural steel designed for mountain weather.",
    },
    featuredProjects: [
      {
        title: "Plantation Bungalow Hybrid Solar System",
        location: "Kattappana, Idukki",
        type: "Hybrid Solar with Battery Backup",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Hybrid solar installation on a plantation bungalow in Idukki",
        description:
          "Zero-blackout hybrid solar installation delivering round-the-clock power during heavy mountain storm outages with KSEB net metering.",
      },
    ],
    faqs: [
      {
        question: "How do solar panels perform in Munnar and high-altitude areas of Idukki?",
        answer:
          "Cooler ambient temperatures in high altitudes actually increase solar panel efficiency, partially offsetting misty days. Modern modules generate substantial power even under diffuse cloud cover.",
      },
      {
        question: "What lightning protection is included for Idukki solar installations?",
        answer:
          "We install class-leading lightning arrestors (ESE/conventional) and dedicated chemical-compound earthing pits with Type 2 Surge Protection Devices (SPDs) to protect your inverter and household appliances.",
      },
    ],
    nearbyDistricts: ["ernakulam", "kottayam", "pathanamthitta"],
  },
  {
    id: "kollam",
    slug: "kollam",
    name: "Kollam",
    malayalamName: "കൊല്ലം",
    region: "South Kerala",
    title: "Solar Installation in Kollam | Rooftop Solar & KSEB Net Metering",
    metaDescription:
      "Premium solar panel installation across Kollam, Karunagappally, and Kottarakkara. Save on electricity bills with on-grid rooftop solar and PM Surya Ghar subsidy.",
    keywords:
      "solar installation Kollam, solar company in Kollam, rooftop solar Karunagappally, solar panels Kottarakkara, KSEB net metering Kollam, solar AMC Kollam",
    heroHeadline: "Reliable Rooftop Solar Energy Systems in Kollam",
    heroSubtext:
      "Turnkey solar engineering for Kollam homes, cashew processing factories, and commercial enterprises. High ROI and prompt KSEB net-metering approvals.",
    overview: [
      "Kollam, a historic port and major industrial trade center in South Kerala, combines high coastal sunlight with intensive domestic and commercial power consumption. From cashew and seafood processing plants to residential residences across Karunagappally, Kottarakkara, and Punalur, rooftop solar offers guaranteed financial returns.",
      "Natural Grid delivers customized rooftop solar solutions throughout Kollam district. We engineer robust on-grid arrays utilizing Tier-1 monocrystalline modules and smart inverters, customized to each property's structural and electrical requirements.",
      "Our team liaises directly with Kollam and Kottarakkara KSEB Electrical Circles, securing quick feasibility sanctions, bi-directional net-meter installation, and timely PM Surya Ghar subsidy disbursement.",
    ],
    majorTowns: [
      "Kollam City",
      "Karunagappally",
      "Kottarakkara",
      "Punalur",
      "Paravur",
      "Chathannoor",
      "Kundara",
      "Anchal",
    ],
    ksebCircles: ["Kollam Electrical Circle", "Kottarakkara Electrical Circle"],
    solarProfile: {
      avgSunHours: "4.9 – 5.3 kWh/m²/day",
      annualGenerationPerKw: "1,420 – 1,540 units/year",
      roofSuitability:
        "Concrete flat slabs, commercial factory PEB roofs, and elevated residential terrace canopies.",
      monsoonEngineering:
        "Marine-resistant anodized aluminum mounting frames with SS304 hardware engineered for coastal and inland stability.",
    },
    featuredProjects: [
      {
        title: "Residential Rooftop Solar System",
        location: "Kollam City",
        type: "On-Grid with Net Metering",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Residential rooftop solar system installation in Kollam",
        description:
          "High-efficiency rooftop solar plant delivering significant monthly savings on domestic electricity charges with KSEB net metering.",
      },
    ],
    faqs: [
      {
        question: "Can commercial factories in Kollam install solar under net metering?",
        answer:
          "Yes. Commercial and industrial establishments can install rooftop solar to offset high tariff rates during daytime production hours.",
      },
      {
        question: "How long does it take to get KSEB net-meter approval in Kollam?",
        answer:
          "Application approval and net-meter installation typically conclude within 2 to 3 weeks following our structured documentation process.",
      },
    ],
    nearbyDistricts: ["thiruvananthapuram", "pathanamthitta", "alappuzha"],
  },
  {
    id: "thiruvananthapuram",
    slug: "thiruvananthapuram",
    name: "Thiruvananthapuram",
    malayalamName: "തിരുവനന്തപുരം",
    region: "South Kerala",
    title: "Solar Installation in Thiruvananthapuram | Solar Company in Trivandrum",
    metaDescription:
      "Expert solar panel installation in Thiruvananthapuram (Trivandrum), Technopark, Neyyattinkara, and Attingal. On-grid rooftop solar and PM Surya Ghar subsidy.",
    keywords:
      "solar installation Thiruvananthapuram, solar company in Trivandrum, rooftop solar Technopark, solar panels Neyyattinkara, KSEB net metering Trivandrum, solar AMC Trivandrum",
    heroHeadline: "Leading Rooftop Solar Engineering in Thiruvananthapuram",
    heroSubtext:
      "Capital-city solar power engineering for homes, IT professionals, government institutions, and commercial establishments across Trivandrum district.",
    overview: [
      "Thiruvananthapuram, Kerala's administrative capital and vibrant tech corridor centered around Technopark and Kazhakkoottam, experiences consistently high solar radiation averaging 5.0 to 5.4 kWh/m² daily. Urban residents and institutions face rising electricity charges driven by heavy electronics, cooling, and electric vehicle adoption.",
      "Natural Grid delivers precision rooftop solar engineering across Thiruvananthapuram district. From modern villas in Kowdiar, Sasthamangalam, and Kazhakkoottam to suburban homes in Neyyattinkara, Attingal, and Nedumangad, our systems are built with Tier-1 components for maximum yield.",
      "We manage the complete liaison with Thiruvananthapuram Urban and Rural KSEB Electrical Circles, streamlining the PM Surya Ghar national portal process and bi-directional net-meter integration.",
    ],
    majorTowns: [
      "Thiruvananthapuram City",
      "Kazhakkoottam",
      "Neyyattinkara",
      "Attingal",
      "Nedumangad",
      "Kowdiar",
      "Varkala",
      "Balaramapuram",
      "Sreekaryam",
    ],
    ksebCircles: [
      "Thiruvananthapuram Urban Electrical Circle",
      "Thiruvananthapuram Rural Electrical Circle",
      "Kattakkada Electrical Circle",
    ],
    solarProfile: {
      avgSunHours: "5.0 – 5.4 kWh/m²/day",
      annualGenerationPerKw: "1,450 – 1,580 units/year",
      roofSuitability:
        "High-density urban concrete terraces, elevated roof gazebos, and institutional flat roofs.",
      monsoonEngineering:
        "Coastal wind-resistant structural engineering with dual-stage earthing and surge protection devices.",
    },
    featuredProjects: [
      {
        title: "Residential Solar & Net Metering",
        location: "Kazhakkoottam, Thiruvananthapuram",
        type: "On-Grid with Net Metering",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Rooftop solar panel installation in Kazhakkoottam, Trivandrum",
        description:
          "High-efficiency on-grid solar installation for an IT professional's residence, reducing bi-monthly KSEB electricity bills to minimal fixed charges.",
      },
    ],
    faqs: [
      {
        question: "Can EV owners in Trivandrum charge electric cars on solar power?",
        answer:
          "Yes. Solar energy generated during the day can directly charge your electric vehicle or be exported to KSEB through net metering to offset evening charging units.",
      },
      {
        question: "How do I claim the ₹78,000 PM Surya Ghar subsidy in Trivandrum?",
        answer:
          "Natural Grid submits your application on the PM Surya Ghar portal, arranges the KSEB feasibility inspection, installs approved components, and assists with net-meter commissioning for direct subsidy transfer.",
      },
    ],
    nearbyDistricts: ["kollam"],
  },
  {
    id: "pathanamthitta",
    slug: "pathanamthitta",
    name: "Pathanamthitta",
    malayalamName: "പത്തനംതിട്ട",
    region: "South Kerala",
    title: "Solar Installation in Pathanamthitta | Rooftop Solar Company",
    metaDescription:
      "Reliable solar panel installation in Pathanamthitta, Thiruvalla, and Adoor. On-grid rooftop solar, hybrid battery backup, and KSEB net-metering approvals.",
    keywords:
      "solar installation Pathanamthitta, solar company in Thiruvalla, solar panels Adoor, rooftop solar Ranni, KSEB net metering Pathanamthitta, solar subsidy Pathanamthitta",
    heroHeadline: "Dependable Rooftop Solar Systems in Pathanamthitta",
    heroSubtext:
      "Turnkey solar engineering for NRI villas, agricultural estates, and commercial establishments across Pathanamthitta, Thiruvalla, and Adoor.",
    overview: [
      "Pathanamthitta, recognized for its NRI households, expansive residential villas, and lush green topography across Thiruvalla, Adoor, and Ranni, represents an ideal territory for rooftop solar. Large residential spaces with substantial baseline electricity needs benefit immensely from self-generating clean energy.",
      "Natural Grid delivers tailored solar installations across Pathanamthitta district. We design systems that protect the architectural character of NRI residences while delivering peak electrical output and robust storm protection.",
      "We manage complete coordination with Pathanamthitta KSEB Electrical Circle, securing timely net-metering integration, bi-directional meter setup, and PM Surya Ghar subsidy credit.",
    ],
    majorTowns: [
      "Pathanamthitta Town",
      "Thiruvalla",
      "Adoor",
      "Ranni",
      "Konni",
      "Pandalam",
      "Kozhencherry",
      "Mallappally",
    ],
    ksebCircles: ["Pathanamthitta Electrical Circle"],
    solarProfile: {
      avgSunHours: "4.8 – 5.2 kWh/m²/day",
      annualGenerationPerKw: "1,400 – 1,520 units/year",
      roofSuitability:
        "Large concrete terrace slabs, elevated truss patio roofs, and sloping tiled surfaces.",
      monsoonEngineering:
        "Heavy-duty HDG steel and aluminum frames engineered to withstand seasonal South-West monsoon storms.",
    },
    featuredProjects: [
      {
        title: "Residential Rooftop Solar System",
        location: "Thiruvalla, Pathanamthitta",
        type: "On-Grid with Net Metering",
        imageSrc: "/images/rooftop-solar-800.webp",
        imageAlt: "Rooftop solar installation on a villa in Thiruvalla, Pathanamthitta",
        description:
          "Premium on-grid rooftop solar array installed on a modern residence, bringing bi-monthly electricity bills to minimum tariff.",
      },
    ],
    faqs: [
      {
        question: "Can NRI homeowners in Thiruvalla manage solar plants remotely?",
        answer:
          "Yes. Our inverters come equipped with Wi-Fi cloud telemetry, allowing homeowners anywhere in the world to monitor daily solar generation and savings via smartphone apps.",
      },
      {
        question: "Does Natural Grid offer AMC cleaning for vacant homes in Pathanamthitta?",
        answer:
          "Yes. We offer structured Annual Maintenance Contracts (AMC) that include scheduled panel washing, diagnostic checks, and preventive upkeep even when owners are abroad.",
      },
    ],
    nearbyDistricts: ["kottayam", "alappuzha", "kollam", "idukki"],
  },
];

/**
 * Lookup helper to retrieve district data by slug.
 */
export function getDistrictBySlug(slug: string): DistrictData | undefined {
  return KERALA_DISTRICTS.find(
    (d) => d.slug.toLowerCase() === slug.toLowerCase()
  );
}

/**
 * Retrieves all district slugs for routing and sitemap generation.
 */
export function getAllDistrictSlugs(): string[] {
  return KERALA_DISTRICTS.map((d) => d.slug);
}
