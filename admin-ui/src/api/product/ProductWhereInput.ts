import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ProductWhereInput = {
  categories?: StringNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
};
