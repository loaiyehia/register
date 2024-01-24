import { useReducer } from "react";
import "./App.css";
import "./Theme.css";
import { Link } from "react-router-dom";

const initialData = {
  name: "loaiyehia",
  age: 33,
  count: 0,
  theme: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_NAME":
      return { ...state, name: action.newValue };

    case "CHANGE_AGE":
      return { ...state, age: action.newValue };
    case "CHANGE_COUNT":
      return { ...state, count: action.newValue };

    case "CHANGE_THEME":
      return { ...state, theme: action.newValue };

    default:
      return state;
  }
};

function App() {
  const [allData, disPatch] = useReducer(reducer, initialData);

  return (
    <div className={`App ${allData.theme}`}>

<Link to="/page2" className="page2">Go To Page2</Link>

      <button
        onClick={() => {
          disPatch(
            allData.theme == ""
              ? { type: "CHANGE_THEME", newValue: "dark" }
              : { type: "CHANGE_THEME", newValue: "" }
          );
        }}
        style={{ marginBottom: "45px" }}
      >
        Toggle Theme
      </button>

      <div
        onChange={() => {
          disPatch(
            allData.theme == ""
              ? { type: "CHANGE_THEME", newValue: "dark" }
              : { type: "CHANGE_THEME", newValue: "" }
          );
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
            disPatch({ type: "CHANGE_THEME", newValue: "" });
          }}
          style={{ marginRight: "26px" }}
        >
          Light
        </button>
        <button
          onClick={() => {
            disPatch({ type: "CHANGE_THEME", newValue: "dark" });
          }}
          style={{ marginRight: "26px" }}
        >
          Dark
        </button>
        <button
          onClick={() => {
            disPatch({ type: "CHANGE_THEME", newValue: "grey" });
          }}
          style={{ marginRight: "26px" }}
        >
          Grey
        </button>
        <button
          onClick={() => {
            disPatch({ type: "CHANGE_THEME", newValue: "pink" });
          }}
        >
          Pink
        </button>
      </div>

      <h2 style={{ marginTop: "35px" }}>My Name Is {allData.name} </h2>
      <button
        onClick={() => {
          disPatch({ type: "CHANGE_NAME", newValue: "ALLOL" });
        }}
      >
        Change Name
      </button>
      <h2>My Age Is {allData.age}</h2>
      <button
        onClick={() => {
          disPatch({ type: "CHANGE_AGE", newValue: 28 });
        }}
      >
        Change age{" "}
      </button>
      <br />
      <br />

      <button
        onClick={() => {
          disPatch({ type: "CHANGE_COUNT", newValue: allData.count + 1 });
        }}
      >
        count is {allData.count}
      </button>
    </div>
  );
}

export default App;
