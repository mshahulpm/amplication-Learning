import { SortOrder } from "../../util/SortOrder";

export type ProductOrderByInput = {
  brandId?: SortOrder;
  categories?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
