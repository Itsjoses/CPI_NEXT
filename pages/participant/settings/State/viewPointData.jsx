import { SelectField, SettingFormLayout } from "@/components/local/participant/settings/formComponent";
import React from "react";

export default function ViewPointData() {
  return (
    <SettingFormLayout label={"Viewpoints Data"}>
      <SelectField
        label={"Occupation"}
        firstValue={"Choose Last Occupation"}
        option={
          <>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
          </>
        }
      />
    </SettingFormLayout>
  );
}
