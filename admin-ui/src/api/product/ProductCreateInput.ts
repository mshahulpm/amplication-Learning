import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";

export type ProductCreateInput = {
  brand: BrandWhereUniqueInput;
  categories?: string | null;
  description: string;
  discount?: number | null;
  name: string;
  price: number;
};
