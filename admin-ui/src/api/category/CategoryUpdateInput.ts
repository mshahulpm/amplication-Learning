import { ParentCategoryUpdateManyWithoutCategoriesInput } from "./ParentCategoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  banner?: string;
  description?: string;
  name?: string;
  parent?: ParentCategoryUpdateManyWithoutCategoriesInput;
  slug?: string;
  thumb?: string;
};
