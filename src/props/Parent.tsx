import { ChildAsFC } from "./Child";

const Parent = () => {
  return <ChildAsFC color="red" onClick={() => console.log("Clicked")}>
    alsdk
    </ChildAsFC>;
};

export default Parent;
