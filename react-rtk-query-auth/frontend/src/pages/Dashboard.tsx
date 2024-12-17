import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { logout } from "../features/authSlice";
import { handleSuccess } from "../utils";
import { getUserInfo } from "../utils/authUtils";

const Dashboard = () => {
  const userInfo = getUserInfo();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(logout());
    handleSuccess("User logout successfully");
    navigate("/login");
  };

  return (
    <div className="container">
      <h1>
        Welcome to {userInfo?.user?.firstName} {userInfo?.user?.lastName}
      </h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
