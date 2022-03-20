import { ParentCategory } from "../parentCategory/ParentCategory";

export type Category = {
  banner: string;
  createdAt: Date;
  description: string;
  id: string;
  name: string;
  parent?: Array<ParentCategory>;
  slug: string;
  thumb: string;
  updatedAt: Date;
};
