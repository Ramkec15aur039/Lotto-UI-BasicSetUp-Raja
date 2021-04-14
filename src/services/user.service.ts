/******************************** Types *********************************/
import { User } from "../types";

const login = ({
  email,
  password,
  remember = false,
}: {
  email: string;
  password: string;
  remember?: boolean;
}): Promise<User> => {
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
    body: JSON.stringify({ email, password }),
  };
  return fetch("http://localhost:3000/user/login", config)
    .then(handleResponse)
    .then((user: User) => {
      remember
        ? localStorage.setItem("user", JSON.stringify(user))
        : sessionStorage.setItem("user", JSON.stringify(user));
      return user;
    });
};

function register({
  fullName,
  email,
  password,
}: {
  fullName: string;
  email: string;
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
    body: JSON.stringify({ fullName, email, password }),
  };
  return fetch("http://localhost:3000/user", config).then(handleResponse);
}

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
