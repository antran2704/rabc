import { Outlet } from "react-router-dom";
import { AbilityContext } from "../context/can";
import Blocker from "../components/Blocker";

const PrivateLayout = () => {
  return (
    <Blocker>
      <h1>Private layout</h1>
      <Outlet />
    </Blocker>
  );
};

export default PrivateLayout;
