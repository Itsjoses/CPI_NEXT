import axios from "axios"

const pathLaravel = "http://localhost:8000"
const csrfPath = pathLaravel+"/sanctum/csrf-cookie"
const pathTemplate = pathLaravel+"/api"

export async function csrfToken(){
    await axios.get("http://localhost:8000/sanctum/csrf-cookie",{
        withCredentials: "include"
    }).then(response => {
        console.log(response);
    })
}


export async function restApi(path,method,body,useCredentials=false,useAuthorization=false,token=null){
    const url = pathTemplate+path
    console.log(body);
    const config = {
        method,
        url,
        headers: {},
        data: body
    };

    if (useCredentials) {
        config.withCredentials = true;
    }   

    if (useAuthorization) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    try {
        const result = await axios(config)
        return {
            raw: result,
            status: result.status,
            data: result.data,
            success: true
          }
    } catch (e) {
        return {
            raw: e,
            status: e.response.status,
            data: e.response.data.message,
            success: false
          }
    }
}

