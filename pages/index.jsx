import { csrfToken, restApi } from "@/api/apiTemplate";
import { HandleLogin } from "@/api/authController";
import {
  BallBounce,
  BtnCustom,
  FontColorComponent,
  SecondaryColor,
  ThridColor,
} from "@/components/global/globalComponent";
import { InputField } from "@/components/local/logregComponent";
import { userContext } from "@/context/userComponent";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import Cookies from "universal-cookie";
export default function Index() {
  const [email, useEmail] = useState("");
  const [password, usePassword] = useState("");
  const { user, setUser } = useContext(userContext);
  const cookies = new Cookies();
  const route = useRouter();
  async function login() {
    const apiLoading = csrfToken().then(() => {
      restApi(
        "/auth/login",
        "POST",
        { email: email, password: password },
        true,
        false,
        null
      )
        .then(async (response) => {
          cookies.set("Authorization", response.data.token);
          return restApi(
            "/auth/user",
            "GET",
            null,
            false,
            true,
            response.data.token
          );
        })
        .then((response) => {
          if (response.success) {
            // Handle success
            console.log("data user: " + response.data.user);
            setUser(response.data.user);
            if (response.data.user.role == "Admin") route.push("/admin/");
            else if (response.data.user.role == "User")
              route.push("/participant/");
          } else {
            // Handle error
            console.error("API Error:", response.status, response.data);
            throw new Error("API Error");
          }
        })
        .catch((error) => {
          // Handle any errors from the chain
          console.error("Chained API Error:", error);
        });
    });

    toast.promise(apiLoading, {
      pending: {
        render() {
          return "Processing...";
        },
        icon: false,
      },
      success: {
        render({ data }) {
          // console.log(data);
          return `welcome, ${data.data.user.name}`;
        },
        // other options
        icon: "🟢",
      },
      error: {
        render({ data }) {
          // When the promise reject, data will contains the error
          console.log(data);
          return `Error: ${data.response.data.message}`;
        },
      },
    });
  }

  function data() {
    console.log(user);
  }

  return (
    <div className="flex w-screen h-screen">
      <BallBounce></BallBounce>
      <div className="w-full lg:w-1/2 h-full bg-white flex justify-center items-center bg-blue-200">
        <SecondaryColor className="w-[60%] p-8 gap-6 flex flex-col rounded-md">
          <FontColorComponent className="text-center text-3xl font-black">
            Let's Head Inside
          </FontColorComponent>
          <InputField
            state={useEmail}
            label={"Email"}
            placeholdervalue={"Email"}
            type={"email"}
          ></InputField>
          <InputField
            state={usePassword}
            label={"Password"}
            placeholdervalue={"Password"}
            type={"Password"}
          ></InputField>
          <FontColorComponent className="text-xs font-semibold ">
            <p className="text-purple-900">Don't have an account?</p>
          </FontColorComponent>
          <ThridColor className="rounded-md">
            <div
              className="p-2 flex justify-center text-white"
              onMouseDown={login}
            >
              Sign up
            </div>
          </ThridColor>
        </SecondaryColor>
      </div>
    </div>
  );
}
