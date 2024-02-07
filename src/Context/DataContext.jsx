import { createContext, useReducer } from "react";
const ThemeContexttt = createContext();

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

// eslint-disable-next-line react/prop-types
export function DataContext({ children }) {
  const [firstState, dispatch] = useReducer(reducer, initialData);

  const ToggleTheme = (newTheme) => {
    dispatch({ type: "CHANGE_THEME", newValue: newTheme });
  };

  const changeName = (newName) => {
    dispatch({ type: "CHANGE_NAME", newValue: newName });
  };
  const changeAge = (newAge) => {
    dispatch({ type: "CHANGE_AGE", newValue: newAge });
  };
  const changeCount = (newCount) => {
    dispatch({ type: "CHANGE_COUNT", newValue: newCount });
  };

  return (
    <ThemeContexttt.Provider
      value={{
        ...firstState,
        changeName,
        changeAge,
        changeCount,
        ToggleTheme,
      }}
    >
      {children}
    </ThemeContexttt.Provider>
  );
}

export default ThemeContexttt;
