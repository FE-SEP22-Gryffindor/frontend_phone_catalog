// interface Specs {
//   screen: string;
//   resolution: string;
//   processor: string;
//   ram: string;
//   memory: string;
//   camera: string;
//   zoom: string;
//   cell: string;
// }

interface Abouts {
  header: string;
  description: string;
}

export interface FullPhone {
  slug: string;
  name: string;
  price: number;
  discountPrice: number;
  color: string;
  year: number;
  screen: string;
  resolution: string;
  processor: string;
  ram: string;
  memory: string;
  camera: string;
  zoom: string;
  cell: string;
  image: string;
  additionalImages: string[];
  abouts: Abouts[];
}

export interface Phone {
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
