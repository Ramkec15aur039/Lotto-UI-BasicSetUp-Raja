import { User } from "../types";

const login = ({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<User> => {
  const config: RequestInit = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    // redirect: "follow",
    // referrer: "no-referrer",
    body: JSON.stringify({ email, password }),
  };
  return fetch("http://localhost:3030/api/v1/login", config)
    .then(handleResponse)
    .then((user: User) => {
      console.log("user",user);
      //for local storage
         localStorage.setItem("user", JSON.stringify(user));
       //for session storage  
         sessionStorage.setItem("user", JSON.stringify(user));
      return user;
    });
};

function register({
  firstName,
  lastName,
  email,
  phone,
  dob,
  password,
}: {
  firstName: string;
  lastName: string;
  email: string;
  phone:string;
  dob:string;
  password: string;
}) {
  const config: RequestInit = {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: JSON.stringify({ firstName,lastName,phone,password,email,dob }),
  };
  return fetch("http://localhost:3030/api/v1/register", config).then(handleResponse);
}
//Logout
const logout = (): void => {
  localStorage.removeItem("user");
  sessionStorage.removeItem("user");
};

const handleResponse = (response: Response): any => {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      if (response.status === 401) {
        logout();
        window.location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
};

export const userService = {
  login,
  register,
  logout,
};
