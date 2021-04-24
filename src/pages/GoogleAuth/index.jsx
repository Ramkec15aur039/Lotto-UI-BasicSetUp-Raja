// /******************************** Import Package ************************************/
// import React, { useState, useEffect } from "react";
// import { responseStatusHandler } from "../../Api/actions";
// import Loader from "../../Components/Loader";
// import { postRefreshTokensData } from "../../Api/create";

// const GoogleAuth = () => {
//   const [notify, setNotify] = useState({
//     isOpen: false,
//     message: "",
//     type: "",
//   });
//   useEffect(() => {
//     let query = new URLSearchParams(window.location.search)
//     if (query.has('userId') && query.has('refresh')) {
//       let refreshToken = query.get('refresh')
//       let userId = query.get('userId')
//       let edit = query.has('edit')
//       postRefreshTokensData({ refreshToken: `${refreshToken}` }).then((res) => {
//         if (res) {
//           let accessToken = res.access.token;
//           let refreshToken = res.refresh.token;
//           let accessExpiry = res.access.expires;
//           let refreshExpiry = res.refresh.expires;
//           localStorage.setItem("accessToken", accessToken);
//           localStorage.setItem("refreshToken", refreshToken);
//           localStorage.setItem("accessExpiry", accessExpiry);
//           localStorage.setItem("refreshExpiry", refreshExpiry);
//           fetch(`http://localhost:3030/api/v1/auth/google/users/${userId}`, {
//             method: "GET",
//             headers: {
//               "Content-Type": "application/json",
//               Accept: "application/json",
//               Authorization: "Bearer " + accessToken,
//             },
//           })
//             .then((response) => {
//               return responseStatusHandler(response);
//             })
//             .then((result) => {
//               return result.status === 200 || result.status === 201 || result.status === 400 ?
//                 result.json()
//                 : result
//             }).then(res => {
//               if (responseHandler(res)) {
//                 localStorage.setItem("loggedUser", JSON.stringify(res[0]));

//                 if (JSON.parse(localStorage.getItem("loggedUser"))) {
//                   setNotify({
//                     isOpen: true,
//                     message: "Logged in successfully",
//                     type: "success",
//                   });
//                   if (edit) {
//                     window.location.href = "/edit-my-contact";
//                   } else {
//                     window.location.href = "/users";
//                   }
//                 } else {
//                   setNotify({
//                     isOpen: true,
//                     message: "Invalid details",
//                     type: "error",
//                   });
//                 }
//               }
//             })
//             .catch((error) => {
//               return false;
//             });
//         } else {
//           return false
//         }
//       });
//     };
//   }, []);

//   const responseHandler = (res) => {
//     if (res) {
//       if (res.code) {
//         if (res.code === 400) {
//           setNotify({
//             isOpen: true,
//             message: res.message,
//             type: "error",
//           });
//           return false;
//         } else {
//           setNotify({
//             isOpen: true,
//             message: "Bad Request",
//             type: "error",
//           });
//           return false;
//         }
//       } else if (res.error) {
//         setNotify({
//           isOpen: true,
//           message: res.error,
//           type: "error",
//         });
//         return false;
//       } else {
//         return res;
//       }
//     } else {
//       return false;
//     }
//   };

//   if (JSON.parse(localStorage.getItem("loggedUser"))) {
//     window.location.href = "/users";
//   }

//   return (<>
//     <Loader loading={true} />
//     <Notification notify={notify} setNotify={setNotify} />
//   </>);
// };

// export default GoogleAuth;
