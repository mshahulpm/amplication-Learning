import { BrandWhereUniqueInput } from "../brand/BrandWhereUniqueInput";

export type ProductUpdateInput = {
  brand?: BrandWhereUniqueInput;
  categories?: string | null;
  description?: string;
  name?: string;
};
