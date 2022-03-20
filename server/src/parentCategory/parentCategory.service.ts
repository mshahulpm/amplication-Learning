import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ParentCategoryServiceBase } from "./base/parentCategory.service.base";

@Injectable()
export class ParentCategoryService extends ParentCategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
