import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AbilityContext } from "../context/can";

const PrivateLayout = () => {
  const ability = useContext(AbilityContext);
  console.log(ability.rule);
  return (
    <div>
      <h1>Private layout</h1>
      <Outlet />
    </div>
  );
};

export default PrivateLayout;
