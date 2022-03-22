import { Brand } from "../brand/Brand";

export type Product = {
  brand?: Brand;
  categories: string | null;
  createdAt: Date;
  description: string;
  discount: number | null;
  id: string;
  name: string;
  price: number;
  updatedAt: Date;
};
