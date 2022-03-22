import { ProductCreateNestedManyWithoutBrandsInput } from "./ProductCreateNestedManyWithoutBrandsInput";

export type BrandCreateInput = {
  banner: string;
  description: string;
  name: string;
  products?: ProductCreateNestedManyWithoutBrandsInput;
  slug: string;
  thumb?: string | null;
};
