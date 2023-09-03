import { userContext } from "@/context/userComponent"
import { useRouter } from "next/router"
import { useContext } from "react"
import Cookies from "universal-cookie"

const { default: axios } = require("axios")
const { csrfToken, restApi } = require("./apiTemplate")

export async function HandleLogin({email,pass,object}) {

    const emailValue = email
    const passwordValue = pass
    const cookies = new Cookies()
    const route = useRouter()
    
    csrfToken()
    restApi("/auth/login","POST", {email: emailValue,password:passwordValue}, true,false,null).then((response) =>{
      cookies.set("Authorization",response.data.token)
      return restApi("/auth/user","GET",null, false, true, response.data.token)
    })
    .then((response) => {
      if (response.success) { 
        // Handle success
        console.log("User data:", response.data.user.role);
        object.setUser(response.data.user)
        if(response.data.user.role == "Admin") route.push("/admin/");
        else if(response.data.user.role == "User") route.push("/participant/")
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

    // toast.promise(
    //     loginPromise,
    //     {
    //       pending: {
    //         render(){
    //           return "Processing..."
    //         },
    //         icon: false,
    //       },
    //       success: {
    //         render({data}){
    //             // console.log(data);
    //           return `welcome, ${data.data.user.name}`
    //         },
    //         // other options
    //         icon: "🟢",
    //       },
    //       error: {
    //         render({data}){
    //           // When the promise reject, data will contains the error
    //           console.log(data);
    //           return `Error: ${data.response.data.message}`
    //         }
    //       }
    //     }
    // )


}