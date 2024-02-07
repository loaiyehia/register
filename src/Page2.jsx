import { useContext } from "react";
import ThemeContexttt from "./Context/DataContext";
import "./Theme.css";

const Page2 = () => {
  const ctx = useContext(ThemeContexttt);
  return (
    <div className={`App ${ctx.theme}`}>
      <h1>hello world</h1>
      <h2>my name is {ctx.name}</h2>
      <h2>my name is {ctx.age}</h2>
      <h2>my name is {ctx.count}</h2>
    </div>
  );
};

export default Page2;
