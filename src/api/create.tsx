/******************************** Import libs ************************************/
import { viewDataByApi } from "../api/action";
import { URL_CONSTANTS } from "../api/urls";



  const getUserById = (dataId:any) => {
    return viewDataByApi(URL_CONSTANTS.users, dataId);
  };
export {
    getUserById
  };
