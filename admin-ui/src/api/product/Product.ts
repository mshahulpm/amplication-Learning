import { Brand } from "../brand/Brand";

export type Product = {
  brand?: Brand;
  categories: string | null;
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  updatedAt: Date;
};
