import { PrimaryColor } from "@/components/global/globalComponent";
import {
  InputField,
  SelectField,
  SettingFormLayout,
} from "@/components/local/participant/settings/formComponent";
import { userContext } from "@/context/userComponent";
import React, { useContext, useEffect, useState } from "react";

export default function EditProfile() {
  const { user, setUser } = useContext(userContext);
  const [currentUser, setCurrentUser] = useState(user);

  useEffect(() => {
    console.log(currentUser);
  });
  return (
    <SettingFormLayout label={"Edit Profile"}>
      <div className="form-control w-full">
        <InputField
          label={"Name"}
          type={"type"}
          stateValue={currentUser.name}
          state={setCurrentUser}
        />
        <SelectField
          label={"Gender"}
          stateValue={currentUser.gender}
          state={setCurrentUser}
          option={
            <>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </>
          }
        />
        <SelectField
          label={"Age Category"}
          option={
            <>
              <option>{"<18"}</option>
              <option>{"<18"}</option>
              <option>{"<18"}</option>
              <option>{"<18"}</option>
              <option>{"<18"}</option>
            </>
          }
        />
        <SelectField
          label={"Last Education"}
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
