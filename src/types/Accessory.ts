interface Specs {
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  memory: string;
  camera: string;
  zoom: string;
  cell: string;
}

interface About {
  header: string;
  description: string;
}

export interface FullAccessory {
  slug: string;
  name: string;
  price: number;
  discountPrice: number;
  color: string;
  year: number;
  specs: Specs;
  about: About[];
  image: string;
  additionalImages: string[];
}

export interface Accessory {
  slug: string;
  name: string;
  price: number;
  discountPrice: number;
  year: number;
  screen: string;
  memory: string;
  ram: string;
  image: string;
}
