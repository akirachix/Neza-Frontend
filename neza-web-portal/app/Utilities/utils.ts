
export const getStageTracking= async()=>{
    const url ='/api/get-organizations'
    try{
        const response = await fetch(url)
        const result = await response.json();
        return result;
    }
    catch(error:any){
        return error.message
    }
}

// export const postLogOut= async()=>{
//     const url ='/api/post-logout'
//     try{
//         const response = await fetch(url)
//         const result = await response.json();
//         return result;
//     }
//     catch(error:any){
//         return error.message
//     }
// }
