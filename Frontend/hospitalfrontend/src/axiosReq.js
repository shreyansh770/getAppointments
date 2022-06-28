import axios from 'axios'


const API = axios.create({baseURL:'https://hospital-servers.herokuapp.com/'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }

    return req
})


export const userSignin = (userData)=>{  
    // console.log(userData);
    let user = API.post(`/auth/signIn`,{email:userData.email ,password:userData.password})
    
    return user
}

export const userSignup = (userInfo)=>{
    // console.log(userInfo);
    let regisUser = API.post(`/auth/signUp`,{email:userInfo.email,name:userInfo.name,phNo:userInfo.phn,password:userInfo.password,confirmPassword:userInfo.cpassword})
    return regisUser
}

export const getDocSpec=(specs)=>{
    let docWspec = API.post(`/docfun/getWspec`,{specs:specs})
    return docWspec
}

export const bookApp = (booking)=>{
    
    let bookingDetails = API.post(`/appFun/addApp`,booking)
    return bookingDetails;
}

export const getAllApp = ()=>{
    let appointments = API.post(`/appFun/getApp`)
    return appointments;
}


export const getAllDoc = ()=>{
    let allDoc = API.post(`/docfun/getAllDocs`)
    return allDoc
}

export const getAllPat = ()=>{
    let allPat = API.post(`/docfun/getAllPat`)
    return allPat
}

export const getAllApps = ()=>{
    let appointments = API.post(`/appFun/getApps`)
    return appointments;
}

export const addDoc=(docBody)=>{
   let addingDoc = API.post(`/docfun/add`,docBody)
   return addingDoc
}

export const remDoc =(remEmail)=>{
    let remDocObj = API.post(`/docfun/delDoc`,{email:remEmail})
    return remDocObj;
}


export const delApp = (appId)=>{
    let delAppoint = API.post(`/appFun/delApp`,{appId})
    return delAppoint
}

export const forgetPass = (email)=>{
    let fPass = API.post(`/auth/forgetPassword`,{email:email})
    return fPass
}

export const verifyEmail = (newPassBody)=>{
    let cPas = API.post(`/auth/changePass`,newPassBody)
    return cPas
}


export const reportUpload = (reportImg,name)=>{
    let res = API.post(`/upload/prescription`,{reportImg,name})
    return res;
}