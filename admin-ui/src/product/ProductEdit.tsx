import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  NumberInput,
} from "react-admin";

import { BrandTitle } from "../brand/BrandTitle";

export const ProductEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
