import axios from 'axios'


const API = axios.create({baseURL:'http://localhost:8080'})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('user')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('user')).token}`
    }

    return req
})


export const userSignin = (userData)=>{  
    let user = API.post(`/auth/signIn`,{email:userData.email ,password:userData.password})
    return user
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