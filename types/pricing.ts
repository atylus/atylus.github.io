export type FeatureListItem = string;

export type PricingSec3TopPlan = {
  id: string;
  cardClassName: string;
  badge?: string;
  title: string;
  subtitle: string;
  features: FeatureListItem[];
  priceLabel: string;
  priceSuffix?: string;
  buttonClassName: string;
};

export type PricingStyle1Plan = {
  id: string;
  cardClassName: string;
  title: string;
  subtitle: string;
  features: FeatureListItem[];
  priceLabel: string;
  priceSuffix?: string;
  buttonClassName: string;
};

export type PricingSec2Plan = {
  id: string;
  cardClassName: string;
  badge?: string;
  title: string;
  subtitle: string;
  features: FeatureListItem[];
  priceLabel: string;
  priceSuffix?: string;
  buttonClassName: string;
};

export type PricingSec3BottomPlan = {
  id: string;
  cardClassName: string;
  badge?: string;
  title: string;
  subtitle: string;
  features: FeatureListItem[];
  priceLabel: string;
  priceSuffix?: string;
  buttonClassName: string;
  gradientSrc: string;
  gradientWidth: number;
  gradientHeight: number;
};
