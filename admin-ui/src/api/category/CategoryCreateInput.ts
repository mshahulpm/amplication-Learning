import { ParentCategoryCreateNestedManyWithoutCategoriesInput } from "./ParentCategoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  banner: string;
  description: string;
  name: string;
  parent?: ParentCategoryCreateNestedManyWithoutCategoriesInput;
  slug: string;
  thumb: string;
};
