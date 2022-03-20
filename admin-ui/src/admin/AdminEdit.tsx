import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  BooleanInput,
} from "react-admin";

export const AdminEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
        <BooleanInput label="superAdmin" source="superAdmin" />
      </SimpleForm>
    </Edit>
  );
};
