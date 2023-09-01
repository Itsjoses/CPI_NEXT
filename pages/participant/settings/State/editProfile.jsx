import { PrimaryColor } from "@/components/global/globalComponent";
import {
  InputField,
  SelectField,
  SettingFormLayout,
} from "@/components/local/participant/settings/formComponent";
import React from "react";

export default function EditProfile() {
  return (
    <SettingFormLayout label={"Edit Profile"}>
      <div className="form-control w-full">
        <InputField label={"Name"} placeholdervalue={"Jose"} type={"type"} />
        <SelectField
          label={"Gender"}
          firstValue={"Male"}
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
        <SelectField
          label={"Gender"}
          firstValue={"12"}
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
        <SelectField
          label={"Last Education"}
          firstValue={"SD"}
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
      </div>
    </SettingFormLayout>
  );
}
