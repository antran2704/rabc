import { useContext } from "react";
import { subject } from "@casl/ability";
import { AbilityContext, Can } from "../context/can";
const data = [
  {
    userId: "1",
    content: "this is content with user id 1",
  },
  {
    userId: "2",
    content: "this is content with user id 2",
  },
];

const AboutPage = () => {
  const ability = useContext(AbilityContext);
  return (
    <div>
      this is about page
      {data.map((item) => (
        <div key={item.userId}>
          <p>{item.content}</p>

          <Can I={"update"} this={subject("Post", { authorId: item.userId })} >
            <button>Edit</button>
          </Can>
        </div>
      ))}
      <Can I={"read"} a={"Post"}>
        <button>Create</button>
      </Can>
      {/* {ability.can("update", "Post", { userId: "2" }) && (
        <button>Edit</button>
      )} */}
    </div>
  );
};

export default AboutPage;
