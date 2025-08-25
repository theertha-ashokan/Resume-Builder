import BASEURL from"./baseUrl"
import commonAPI from "./commonAPI"

//add resume API -POST(http request for add)-CALLED BY STEPS COMPONENT
  export const  addResumeAPI = (resume)=>{
    return commonAPI("POST",`${BASEURL}/all-resumes`,resume)
  }

//edit resume API -PUT
//add hstory API- POST
export const addDownloadHistoryAPI = (resume)=>{
 return commonAPI("POST",`${BASEURL}/history`,resume)
}

//get history API - GET
//delete history API - DELETE