import React from "react";
import { MinimalBackdrop } from "@/components/common/MinimalBackdrop";

export type ServiceVisualId =
  | "installation"
  | "battery-backup"
  | "amc"
  | "subsidy"
  | "water-heater";

interface ServiceBackdropIllustrationsProps {
  serviceId?: ServiceVisualId;
}

/**
 * Service detail pages backdrop delegating to the unified MinimalBackdrop.
 */
export const ServiceBackdropIllustrations: React.FC<
  ServiceBackdropIllustrationsProps
> = () => {
  return <MinimalBackdrop />;
};
