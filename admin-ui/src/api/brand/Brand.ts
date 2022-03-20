import { Product } from "../product/Product";

export type Brand = {
  banner: string;
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  products?: Array<Product>;
  slug: string;
  thumb: string | null;
  updatedAt: Date;
};
