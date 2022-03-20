import { CategoryUpdateManyWithoutParentCategoriesInput } from "./CategoryUpdateManyWithoutParentCategoriesInput";

export type ParentCategoryUpdateInput = {
  banner?: string;
  childrens?: CategoryUpdateManyWithoutParentCategoriesInput;
  description?: string;
  name?: string;
  thumb?: string;
};
