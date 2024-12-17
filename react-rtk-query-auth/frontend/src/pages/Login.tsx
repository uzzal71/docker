import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../features/authSlice";
import { useLoginMutation } from "../services/loginApi";
import { handleError, handleSuccess } from "../utils";
import { getUserInfo } from "../utils/authUtils";

const Login = () => {
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await login(loginInfo).unwrap();

      // Success handling
      handleSuccess(response.message);
      if (response.user && response.token) {
        dispatch(
          setUser({
            isLoggedIn: true,
            user: response.user,
            token: response.token,
          })
        );
      }
      navigate("/dashboard");
    } catch (err: any) {
      // Error handling
      handleError(err?.data?.message || "Login failed. Please try again.");
    }
  };

  useEffect(() => {
    const userInfo = getUserInfo();
    if (userInfo?.isLoggedIn) {
      navigate("/dashboard");
    }
  }, [navigate]);

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoFocus
            placeholder="Enter your email"
            onChange={handleChange}
            value={loginInfo.email}
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            onChange={handleChange}
            value={loginInfo.password}
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
        <span>
          Don't have an account? <Link to="/signup">Signup</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
