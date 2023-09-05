import {
  BigBtn,
  PrimaryColor,
  ThridColor,
} from "@/components/global/globalComponent";
import {
  SettingFormLayout,
  SettingInputField,
  SettingSelectField,
} from "@/components/local/participant/settings/formComponent";
import { userContext } from "@/context/userComponent";
import React, { useContext, useEffect, useState } from "react";
import SettingLayout, { currentUserContext } from "..";
import { occupation, occupations } from "@/globalValue/selectFormValue";
import { restApi } from "@/api/apiTemplate";
import Cookies from "universal-cookie";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { GlobalForm, GlobalInputForm } from "@/components/global/globalFromComponent";

export default function EditProfile() {
  // data
  const [gender, setGender] = useState();
  const [name, setName] = useState();
  const [occupation, setOccupation] = useState();
  const [education, setEducation] = useState();
  // end data

  const [userData, setUserData] = useState(null); // Initialize userDatas as a state variable
  const [educationData, setEducationData] = useState(null); // Initialize userDatas as a state variable
  const [occupationData, setOccupationData] = useState(null); // Initialize userDatas as a state variable
  const [isLoading, setIsLoading] = useState(true);
  const route = useRouter();
  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await restApi(
          "/auth/user",
          "GET",
          null,
          true,
          true,
          new Cookies().get("Authorization")
        );

        const occupationPromis = await restApi(
          "/auth/user/getOccupation",
          "GET",
          null,
          true,
          true,
          new Cookies().get("Authorization")
        );

        const educationPromis = await restApi(
          "/auth/user/getEducation",
          "GET",
          null,
          true,
          true,
          new Cookies().get("Authorization")
        );
        console.log(userData.data.user);
        setOccupationData(occupationPromis.data.data);
        setEducationData(educationPromis.data.data);
        setUserData(userData.data.user);
        setName(userData.data.user.name)
        setOccupation(userData.data.user.occupation_id)
        setEducation(userData.data.user.education_id)
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUserData();
  }, []);

  async function HandleUpdate() {
    console.log(occupation);
    console.log(education);
    const result = await restApi(
      "/auth/user/update",
      "POST",
      {
        name: name,
        occupation: parseInt(occupation) ,
        education: parseInt(education) ,
      },
      true,
      true,
      new Cookies().get("Authorization")
    ).then((response) => {
      console.log(response);
      if (response.success) {
        toast.success(response.data.message);
        route.push("/participant/");
      } else {
        toast.error(response.data.message);
      }
    });
  }

  return (
    <SettingLayout>
      <SettingFormLayout label={"Edit Profile"}>
      {isLoading ? (
        <></>
      ) : (
        <div className="form-control w-full flex gap-4">
          <GlobalInputForm label={"Name"} displayData={userData.name} setState={setName} type={"text"} placeholdervalue={"Name"}></GlobalInputForm>
          <GlobalForm
            state={gender}
            setState={setEducation}
            label={"Education"}
            option={educationData
              .map((e) => {
                if (e.id == userData.id) {
                  return (
                    <option value={e.id} key={e.id}>
                      {e.name}
                    </option>
                  );
                }
              })
              .concat(
                educationData.map((e) => {
                  if (e.id != userData.id) {
                    return (
                      <option value={e.id} key={e.id}>
                        {e.name}
                      </option>
                    );
                  }
                })
              )}
          />
          <GlobalForm
            state={gender}
            setState={setOccupation}
            label={"Occupation"}
            option={occupationData
              .map((e) => {
                if (e.id == userData.id) {
                  return (
                    <option value={e.id} key={e.id}>
                      {e.name}
                    </option>
                  );
                }
              })
              .concat(
                occupationData.map((e) => {
                  if (e.id != userData.id) {
                    return (
                      <option value={e.id} key={e.id}>
                        {e.name}
                      </option>
                    );
                  }
                })
              )}
          />
          <BigBtn
            title={"Update"}
            className="my-4"
            setFunction={HandleUpdate}
          ></BigBtn>
        </div>
      )}
    </SettingFormLayout>
    </SettingLayout>
    
  );
}
