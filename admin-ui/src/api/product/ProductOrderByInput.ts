import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brandId?: SortOrder;
  categories?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  discount?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  updatedAt?: SortOrder;
};
