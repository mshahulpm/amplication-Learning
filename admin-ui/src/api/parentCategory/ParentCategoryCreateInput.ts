import { CategoryCreateNestedManyWithoutParentCategoriesInput } from "./CategoryCreateNestedManyWithoutParentCategoriesInput";

export type ParentCategoryCreateInput = {
  banner: string;
  childrens?: CategoryCreateNestedManyWithoutParentCategoriesInput;
  description: string;
  name: string;
  thumb: string;
};
