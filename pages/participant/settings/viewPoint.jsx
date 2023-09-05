import React, { useEffect, useState } from 'react'
import SettingLayout from '.';
import { SettingFormLayout } from '@/components/local/participant/settings/formComponent';
import { useRouter } from 'next/router';
import { restApi } from '@/api/apiTemplate';
import Cookies from 'universal-cookie';
import LoadDataComponent from '@/components/global/loadDataComponent';
import { GlobalForm } from '@/components/global/globalFromComponent';

export default function ViewPoint() {

    const [insertData, setInsertData] = useState(null); // Initialize userDatas as a state variable
    const [viewPointData,setViewPointData] = useState(null)
    const vp = ["Efektif","Tidak Efektif"]
    const route = useRouter();
    useEffect(() => {
      async function fetchUserData() {
        try {
          const vpDataPromise = await restApi(
            "/auth/viewPointDetail/getViewPointDetail",
            "GET",
            null,
            true,
            true,
            new Cookies().get("Authorization")
          )
          const vpDatas = vpDataPromise.data.data
          const answersArray = []
          vpDatas.forEach(e => {
            answersArray.push(e.answer)
          })
          console.log(vpDatas);
          setInsertData(answersArray)
          setViewPointData(vpDataPromise.data.data)
        } catch (error) {
          console.error(error);
        }
      }
  
      fetchUserData();
    }, []);
    
  
  return (
    <SettingLayout>
        <SettingFormLayout label={"View Point"}>
            <LoadDataComponent data={viewPointData}>
                <>
                {/* <GlobalForm
              label={"Education"}
              option={viewPointData
                .map((e) => {
                  if (e.answer == insertData) {
                    return (
                      <option value={insertData} key={insertData}>
                        {insertData}
                      </option>
                    );
                  }
                })
                .concat(
                  vp.map((e) => {
                    if (insertData != insertData) {
                      return (
                        <option value={insertData} key={insertData}>
                          {insertData}
                        </option>
                      );
                    }
                  })
                )}
            /> */}
                </>
            </LoadDataComponent>
        {/* {isLoading ? (
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
        )} */}
      </SettingFormLayout>
      </SettingLayout>
  )
}
