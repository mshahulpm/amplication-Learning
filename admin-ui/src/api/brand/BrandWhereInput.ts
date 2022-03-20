import { StringFilter } from "../../util/StringFilter";
import { ProductListRelationFilter } from "../product/ProductListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BrandWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  products?: ProductListRelationFilter;
  slug?: StringFilter;
  thumb?: StringNullableFilter;
};
