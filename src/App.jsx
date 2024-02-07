import "./App.css";
import "./Theme.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ThemeContexttt from "./Context/DataContext";

function App() {
  const ctx = useContext(ThemeContexttt);

  return (
    <div className={`App ${ctx.theme} `}>
      <Link to="/page2" className="page2">
        Go To Page2
      </Link>

      <button
        onClick={() => {
          ctx.ToggleTheme(ctx.theme === "" ? "dark" : "");
        }}
        style={{ marginBottom: "45px" }}
      >
        Toggle Theme
      </button>

      <div
        onChange={() => {
          ctx.ToggleTheme(ctx.theme === "" ? "dark" : "");
        }}
        style={{ marginBottom: "45px" }}
        className="btn-container"
      >
        <i className="fa fa-sun-o" aria-hidden="true" />
        <label className="switch btn-color-mode-switch">
          <input
            type="checkbox"
            name="color_mode"
            id="color_mode"
            defaultValue={1}
          />
          <label
            htmlFor="color_mode"
            data-on="Dark"
            data-off="Light"
            className="btn-color-mode-switch-inner"
          />
        </label>
        <i className="fa fa-moon-o" aria-hidden="true" />
      </div>

      <div>
        <button
          onClick={() => {
            ctx.ToggleTheme("");
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => {
            ctx.ToggleTheme("dark");
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            ctx.ToggleTheme("grey");
          }}
          style={{ marginRight: "26px" }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            ctx.ToggleTheme("pink");
          }}
        >
          Pink
        </button>
      </div>

      <h2 style={{ marginTop: "66px" }}>My name is {ctx.name} </h2>
      <button
        onClick={() => {
          ctx.changeName("AlLol");
        }}
      >
        Change name
      </button>
      <h2>My Age Is {ctx.age}</h2>
      <button
        onClick={() => {
          ctx.changeAge(28);
        }}
      >
        Change age
      </button>
      <br />
      <button
        onClick={() => {
          ctx.changeCount(ctx.count + 1);
        }}
      >
        count is {ctx.count}
      </button>
    </div>
  );
}

export default App;
