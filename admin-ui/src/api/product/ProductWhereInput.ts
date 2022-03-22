import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatFilter } from "../../util/FloatFilter";

export type ProductWhereInput = {
  categories?: StringNullableFilter;
  discount?: FloatNullableFilter;
  id?: StringFilter;
  name?: StringFilter;
  price?: FloatFilter;
};
