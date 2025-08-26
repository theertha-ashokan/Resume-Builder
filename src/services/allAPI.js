import BASEURL from"./baseUrl"
import commonAPI from "./commonAPI"

//add resume API -POST(http request for add)-CALLED BY STEPS COMPONENT
  export const  addResumeAPI = async(resume)=>{
    return await commonAPI("POST",`${BASEURL}/all-resumes`,resume)
  }

//edit resume API -PUT
//add hstory API- POST
export const addDownloadHistoryAPI = async (resume)=>{
 return await commonAPI("POST",`${BASEURL}/history`,resume)
}

//get history API - GET : called by component when its page open in browser (useEffect)
export const getHistoryAPI = async()=>{
  return await commonAPI("GET",`${BASEURL}/history`,{})
}
//delete history API - DELETE( delete called by history when delete btn is called)

export const deleteHistoryAPI = async(id)=>{
  return await commonAPI("DELETE",`${BASEURL}/history/${id}`,{})
}