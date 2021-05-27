import React, { useReducer } from "react";
export const GlobalContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "create-categories":
      return { ...state, categories: action.payload };
    default:
      throw new Error();
  }
}

const initialState = {};
const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>;
};

export default GlobalProvider;
