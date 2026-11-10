/**
 * Centralized site configuration and content definitions for Natural Grid LLP.
 * All brand information, contacts, navigation links, services, and district coverage are defined here.
 */

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroTagline: string;
  leadParagraph: string;
  icon: string;
  metaDescription: string;
  keywords: string;
}

export const siteConfig = {
  name: "Natural Grid LLP",
  shortName: "Natural Grid",
  legalName: "Natural Grid LLP",
  tagline: "Future with renewable",
  domain: "naturalgrid.in",
  url: import.meta.env.VITE_SITE_URL || "https://naturalgrid.in",
  phoneDisplay: "+91 90726 34443",
  phoneRaw: "+919072634443",
  email: "info@naturalgrid.in",
  web3FormsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "a533d11b-b9ce-41ea-afcd-da00eb8806f2",
  address: {
    line1: "Anugraha Complex, Near KSFE",
    locality: "Sulthan Bathery, Wayanad",
    region: "Kerala",
    postalCode: "673592",
    country: "India",
    countryCode: "IN",
    coordinates: {
      latitude: 11.664152,
      longitude: 76.221272,
    },
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.575685324508!2d76.2558!3d11.6625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6063b4f971555%3A0xbcf03a726ea9e102!2sSulthan%20Bathery%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },
  socials: {
    facebook: "https://www.facebook.com/profile.php?id=61584992191296",
    instagram: "https://www.instagram.com/natural_grid/",
    linkedin: "https://www.linkedin.com/company/naturalgrid-llp/",
    youtube: "https://www.youtube.com/@NaturalGrid",
  },
  metrics: [
    { label: "Districts Covered", value: 14, suffix: "", caption: "Technicians stationed across all Kerala districts" },
    { label: "Years in Solar", value: 8, suffix: "+", caption: "Combined engineering and rooftop expertise" },
    { label: "KSEB Compliance", value: 100, suffix: "%", caption: "Grid safety standards and official approvals" },
  ],
  districts: [
    "Thiruvananthapuram",
    "Kollam",
    "Pathanamthitta",
    "Alappuzha",
    "Kottayam",
    "Idukki",
    "Ernakulam",
    "Thrissur",
    "Palakkad",
    "Malappuram",
    "Kozhikode",
    "Wayanad",
    "Kannur",
    "Kasaragod",
  ],
  services: [
    {
      id: "installation",
      slug: "service-installation",
      title: "Rooftop Solar Installation",
      shortDescription: "Engineered on-grid and off-grid rooftop solar systems for residences and commercial buildings.",
      heroTagline: "Engineered solar rooftops designed to withstand Kerala monsoons and maximize lifetime yield.",
      leadParagraph: "Complete turn-key rooftop solar power systems engineered with high-efficiency monocrystalline panels and Tier-1 smart inverters, built to provide 25+ years of dependable green power.",
      icon: "solar-panel",
      metaDescription: "Residential and commercial rooftop solar installation in Kerala with MNRE-approved components and KSEB net-metering support.",
      keywords: "rooftop solar Kerala, solar installation Wayanad, on grid solar system, solar panels for home",
    },
    {
      id: "amc",
      slug: "service-amc",
      title: "Solar Maintenance & AMC",
      shortDescription: "Preventive maintenance, panel cleaning, inverter diagnostics, and quick breakdown repair.",
      heroTagline: "Keep your solar plant operating at peak efficiency all year round with our dedicated service team.",
      leadParagraph: "Solar plants degrade and lose up to 30% generation when dust, bird droppings, or loose DC wiring go unaddressed. Our AMC plans provide scheduled cleaning, thermographic inspections, and prompt fault repairs.",
      icon: "wrench",
      metaDescription: "Annual maintenance contracts (AMC) and repair services for solar plants across all 14 districts in Kerala.",
      keywords: "solar AMC Kerala, solar panel cleaning Kerala, solar inverter repair, solar maintenance",
    },
    {
      id: "battery-backup",
      slug: "service-battery-backup",
      title: "Battery Backup & Hybrid Systems",
      shortDescription: "Reliable hybrid solar systems with lithium and tubular battery storage for uninterrupted power.",
      heroTagline: "Stay fully powered during grid outages with intelligent hybrid solar energy storage.",
      leadParagraph: "Kerala's power grid can face load shedding and severe storm outages. Our hybrid solar systems combine grid-tied savings with battery backup to ensure critical loads run without a single flicker.",
      icon: "battery-charging",
      metaDescription: "Hybrid solar power systems with battery backup in Kerala. Continuous clean electricity during power cuts.",
      keywords: "hybrid solar Kerala, solar battery storage, solar inverter with battery, power backup Kerala",
    },
    {
      id: "subsidy",
      slug: "service-subsidy",
      title: "PM Surya Ghar Subsidy Assistance",
      shortDescription: "End-to-end liaison for national rooftop solar subsidies and KSEB net-metering approvals.",
      heroTagline: "Claim up to ₹78,000 in Central Government subsidies under PM Surya Ghar Muft Bijli Yojana.",
      leadParagraph: "We manage the entire national portal registration, feasibility approval, bi-directional net meter installation with KSEB, and direct subsidy credit to your bank account.",
      icon: "shield-check",
      metaDescription: "Get official PM Surya Ghar solar subsidy up to ₹78,000 in Kerala. Seamless registration and KSEB net meter clearance.",
      keywords: "PM Surya Ghar Kerala, solar subsidy Kerala, KSEB solar net metering, solar subsidy application",
    },
    {
      id: "water-heater",
      slug: "service-water-heater",
      title: "Solar Water Heaters",
      shortDescription: "Pressurized and non-pressurized solar thermal water heating for residential and commercial use.",
      heroTagline: "Zero-electricity hot water for homes, resorts, hospitals, and commercial facilities.",
      leadParagraph: "Harness solar thermal energy to eliminate geyser electricity costs. High-absorption evacuated glass tubes (ETC) and stainless steel inner tanks deliver boiling hot water even on overcast days.",
      icon: "flame",
      metaDescription: "Energy-efficient solar water heaters in Kerala. Pressurized and non-pressurized systems with high thermal retention.",
      keywords: "solar water heater Kerala, solar geyser, commercial solar water heating, ETC solar water heater",
    },
  ] as ServiceItem[],
};
