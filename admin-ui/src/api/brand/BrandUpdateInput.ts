import { ProductUpdateManyWithoutBrandsInput } from "./ProductUpdateManyWithoutBrandsInput";

export type BrandUpdateInput = {
  banner?: string;
  description?: string;
  name?: string;
  products?: ProductUpdateManyWithoutBrandsInput;
  slug?: string;
  thumb?: string | null;
};
