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
import { ParentCategoryWhereInput } from "./ParentCategoryWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ParentCategoryListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ParentCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => ParentCategoryWhereInput)
  @IsOptional()
  @Field(() => ParentCategoryWhereInput, {
    nullable: true,
  })
  every?: ParentCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParentCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => ParentCategoryWhereInput)
  @IsOptional()
  @Field(() => ParentCategoryWhereInput, {
    nullable: true,
  })
  some?: ParentCategoryWhereInput;

  @ApiProperty({
    required: false,
    type: () => ParentCategoryWhereInput,
  })
  @ValidateNested()
  @Type(() => ParentCategoryWhereInput)
  @IsOptional()
  @Field(() => ParentCategoryWhereInput, {
    nullable: true,
  })
  none?: ParentCategoryWhereInput;
}
export { ParentCategoryListRelationFilter };
