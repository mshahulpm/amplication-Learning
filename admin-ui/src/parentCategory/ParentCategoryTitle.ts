import { ParentCategory as TParentCategory } from "../api/parentCategory/ParentCategory";

export const PARENTCATEGORY_TITLE_FIELD = "name";

export const ParentCategoryTitle = (record: TParentCategory): string => {
  return record.name || record.id;
};
