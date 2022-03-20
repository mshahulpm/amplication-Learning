/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { CategoryUpdateManyWithoutParentCategoriesInput } from "./CategoryUpdateManyWithoutParentCategoriesInput";
import { Type } from "class-transformer";
@InputType()
class ParentCategoryUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  banner?: string;

  @ApiProperty({
    required: false,
    type: () => CategoryUpdateManyWithoutParentCategoriesInput,
  })
  @ValidateNested()
  @Type(() => CategoryUpdateManyWithoutParentCategoriesInput)
  @IsOptional()
  @Field(() => CategoryUpdateManyWithoutParentCategoriesInput, {
    nullable: true,
  })
  childrens?: CategoryUpdateManyWithoutParentCategoriesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  thumb?: string;
}
export { ParentCategoryUpdateInput };