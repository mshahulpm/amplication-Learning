import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ParentCategoryService } from "./parentCategory.service";
import { ParentCategoryControllerBase } from "./base/parentCategory.controller.base";

@swagger.ApiTags("parentCategories")
@common.Controller("parentCategories")
export class ParentCategoryController extends ParentCategoryControllerBase {
  constructor(
    protected readonly service: ParentCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
