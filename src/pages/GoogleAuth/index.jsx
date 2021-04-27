/******************************** Import Package ************************************/
import React, { useState, useEffect } from "react";
import { getUserById } from "../../api/create";
import Notification from "../../components/notify/notify";

const GoogleAuth = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  useEffect(() => {
    let query = new URLSearchParams(window.location.search)
    if (query.has('id') && query.has('token')) {
      let token = query.get('token')
      let id = query.get('id')

      localStorage.setItem("token", token);
      getUserById(id).then((res) => {
        if (res) {
          console.log(res);
          localStorage.setItem("loggedUser", JSON.stringify(res));
          if (JSON.parse(localStorage.getItem("loggedUser"))) {
            setNotify({
              isOpen: true,
              message: "Logged in successfully",
              type: "success",
            });
            window.location.href = "/homePage";

          } else {
            setNotify({
              isOpen: true,
              message: "Invalid details",
              type: "error",
            });
          }        
        } 
      });
    }
  }, []);

  return (<>
    <Notification notify={notify} setNotify={setNotify} />
  </>);
};

export default GoogleAuth;
