export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: string;
  image: string;
  specs: ProductSpec[];
  features: string[];
  brochureUrl?: string;
}

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Industry {
  name: string;
  slug: string;
  icon: any;
  desc: string;
  image: string;
}
