import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ParentCategoryResolverBase } from "./base/parentCategory.resolver.base";
import { ParentCategory } from "./base/ParentCategory";
import { ParentCategoryService } from "./parentCategory.service";

@graphql.Resolver(() => ParentCategory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ParentCategoryResolver extends ParentCategoryResolverBase {
  constructor(
    protected readonly service: ParentCategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
