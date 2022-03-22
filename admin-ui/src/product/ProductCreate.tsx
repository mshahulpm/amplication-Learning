import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BrandTitle } from "../brand/BrandTitle";

export const ProductCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="brand.id" reference="Brand" label="brand">
          <SelectInput optionText={BrandTitle} />
        </ReferenceInput>
        <TextInput label="categories" source="categories" />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discount" source="discount" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
      </SimpleForm>
    </Create>
  );
};
