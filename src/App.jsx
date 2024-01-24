import { useState } from "react";
import "./App.css";
import "./Theme.css";

function App() {
  const [person, setPerson] = useState("????");
  const [age, setAge] = useState("???");
  const [count, setCount] = useState("0");
  const [theme, setTheme] = useState("");

  function changeName() {
    setPerson("loai yehia");
  }
  function changeAge() {
    setAge(33);
  }
  function changeCount() {
    console.log(count);
    setCount(+count + 1);
  }

  return (
    <div className={`App ${theme}`}>
      <button
        onClick={() => {
          setTheme(theme == "" ? "dark" : "");
        }}
        style={{ marginBottom: "45px" }}
      >
        Toggle Theme
      </button>

      <div
        onChange={() => {
          setTheme(theme == "" ? "dark" : "");
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
            setTheme("");
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => {
            setTheme("dark");
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            setTheme("grey");
          }}
          style={{ marginRight: "26px" }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            setTheme("pink");
          }}
        >
          Pink
        </button>
      </div>

      <h2 style={{ marginTop: "35px" }}>My Name Is {person}</h2>
      <button onClick={changeName}>Change Name</button>
      <h2>My Age Is {age}</h2>
      <button onClick={changeAge}>Change age</button>
      <br />
      <br />
      <br />
      <br />
      <button onClick={changeCount}>count is {count}</button>
    </div>
  );
}

export default App;
