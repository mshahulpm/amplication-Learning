import { ParentCategoryWhereInput } from "./ParentCategoryWhereInput";
import { ParentCategoryOrderByInput } from "./ParentCategoryOrderByInput";

export type ParentCategoryFindManyArgs = {
  where?: ParentCategoryWhereInput;
  orderBy?: Array<ParentCategoryOrderByInput>;
  skip?: number;
  take?: number;
};
