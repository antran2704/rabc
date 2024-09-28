import { Link } from "react-router-dom";
import useBlocker from "../hooks/useBlocker";

const HomePage = () => {
  const { isBlocker, onSetBlocker } = useBlocker();
  // Block navigating elsewhere when data has been entered into the input

  console.log("isBlocker", isBlocker);

  return (
    <div>
      <div>
        this is Home page
        <Link to={"/about"}>About</Link>
      </div>

      <button onClick={() => onSetBlocker(!isBlocker)}>
        Onclick to turn on Blocker
      </button>
    </div>
  );
};

export default HomePage;
