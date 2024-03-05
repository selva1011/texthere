import { logout } from "../services/Auth";
import { Navigate, useNavigate } from "react-router-dom";
import UnderConstruction from "../components/UnderConstruction";
import NavigationBar from "../components/NavigationBar";


const DashBoard = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate("/");
  };

  return (
    <section>
      <NavigationBar />
      <UnderConstruction/>
    </section>
  );
};

export default DashBoard;
