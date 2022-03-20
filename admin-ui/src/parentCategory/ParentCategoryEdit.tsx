import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const ParentCategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="banner" source="banner" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <TextInput label="thumb" source="thumb" />
      </SimpleForm>
    </Edit>
  );
};
