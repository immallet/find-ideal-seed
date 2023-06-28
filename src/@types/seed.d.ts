import type { Country } from "./country";
import type { Tag } from "./tag";

export interface Seed {
  id: number;
  country: Country;
  name: string;
  bankName: string;
  coverImage: string;
  images: string[];
  tags: Tag[];
}
