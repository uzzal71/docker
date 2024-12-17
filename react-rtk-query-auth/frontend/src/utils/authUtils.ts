import Cookies from "js-cookie";

export const getUserInfo = () => {
  const isLoggedIn = Cookies.get("isLoggedIn");
  const token = Cookies.get("token");
  const user = Cookies.get("user");

  if (token && user) {
    return {
      isLoggedIn,
      token,
      user: JSON.parse(user),
    };
  }

  return null;
};
