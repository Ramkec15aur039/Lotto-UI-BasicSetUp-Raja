/******************************** Import Api ************************************/
import {  hostConfig } from "../config/index";
// import { postpostTokensDataData } from "./create";

const token = localStorage.getItem("token");


/******************************** Response Handler ************************************/
const responseStatusHandler = (response:any) => {

  switch (response.status) {
    case 400:
      return response
    case 401:
       return false
    case 402:
      return { error: "Payment Required" }
    case 403:
      return { error: "Forbidden" }
    case 404:
      return { error: "Not Found" }
    case 405:
      return { error: "Method Not Allowed" }
    case 406:
      return { error: "Not Acceptable" }
    case 408:
      return { error: "Request Timeout" }
    case 409:
      return { error: "Request Already Exist" }// Conflict
    case 410:
      return { error: "permanently deleted from server" }
    case 500:
      return { error: "Internal Server Error" }
    case 501:
      return { error: "Not Implemented" }
    case 502:
      return { error: "Bad Gateway" }
    case 503:
      return { error: "Service Unavailable" }
    case 504:
      return { error: " Gateway Timeout" }
    case 511:
      return { error: " Network Authentication Required" }
    case 200: case 201:
      return response
    default:
      return false;
  }
}
const postDataApi = async (requestUrl:any, params:any,) => {
  return await fetch(`${hostConfig.API_URL}${requestUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(params),
  })
    .then((response) => {
      console.log("data---------------",response);
      
      return responseStatusHandler(response);
    })
    .then((result) => {
      return result.status === 200 || result.status === 201 || result.status === 400 ?
        result.json()
        : result
    })
    // .catch((error) => {
    //    errorHandler(error);
    // });
};
const getListByApi = (requestUrl:any, params:any) => {

  let getParams = "?";
  let count = 0;
  if (params && params.id && params.id !== null && params.id !== undefined) { getParams += `${count === 0 ? "" : "&"}id=${params.id}`; count++ }
  return fetch(`${hostConfig.API_URL}${requestUrl}${getParams}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      return responseStatusHandler(response);
    })
    .then((result) => {
      return result.status === 200 || result.status === 201 || result.status === 400 ?
        result.json() : result
    })
    // .catch((error) => {
    //   errorHandler(error);
    // });
};



const viewDataByApi = async (requestUrl:any, dataId:string) => {
console.log(token);

  
  return await fetch(`${hostConfig.API_URL}${requestUrl}/${dataId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => {
      return responseStatusHandler(response);
      
    })
    .then((result) => {
      return result.status === 200 || result.status === 201 || result.status === 400 ?
        result.json()
        : result
    })
    // .catch((error) => {
    //   errorHandler(error);
    // });
};




export {
  postDataApi,
  getListByApi,
  viewDataByApi,
  responseStatusHandler,
};
