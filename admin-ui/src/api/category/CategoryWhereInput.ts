import { StringFilter } from "../../util/StringFilter";

export type CategoryWhereInput = {
  description?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  slug?: StringFilter;
};
