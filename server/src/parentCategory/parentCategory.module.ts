import { Module } from "@nestjs/common";
import { ParentCategoryModuleBase } from "./base/parentCategory.module.base";
import { ParentCategoryService } from "./parentCategory.service";
import { ParentCategoryController } from "./parentCategory.controller";
import { ParentCategoryResolver } from "./parentCategory.resolver";

@Module({
  imports: [ParentCategoryModuleBase],
  controllers: [ParentCategoryController],
  providers: [ParentCategoryService, ParentCategoryResolver],
  exports: [ParentCategoryService],
})
export class ParentCategoryModule {}
