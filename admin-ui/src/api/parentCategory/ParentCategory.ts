import { Category } from "../category/Category";

export type ParentCategory = {
  banner: string;
  childrens?: Array<Category>;
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  thumb: string;
  updatedAt: Date;
};
