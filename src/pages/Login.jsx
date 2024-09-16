import { useContext } from "react";
import { AbilityContext } from "../context/can";
import { useNavigate } from "react-router-dom";
import { setRules } from "../context/ability";

const LoginPage = () => {
  const ability = useContext(AbilityContext);
  const navigate = useNavigate();

  const onLogin = () => {
    const rules = setRules([{ action: "read", subject: "Post" }]).rules;
    ability.update(rules);
    navigate("/about");
  };
  return (
    <div>
      this is Login page
      <button onClick={onLogin}>Login</button>
    </div>
  );
};

export default LoginPage;
