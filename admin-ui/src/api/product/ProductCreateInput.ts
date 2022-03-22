import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";

export type ProductCreateInput = {
  brand: BrandWhereUniqueInput;
  categories?: string | null;
  description: string;
  name: string;
};
