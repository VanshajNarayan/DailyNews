import { createContext, useReducer } from "react";
import { firstReducerFunction } from "../Reducer/Reducer";

export const getDataContext = createContext(null);
export const getDispatchContext = createContext(null);

export const AppProvider = ({ children }) => {
  // let initialState = {categoryVal : "Business", pageSize : 20};
  let initialState = "Business";
  const [data, dispatch] = useReducer(firstReducerFunction, initialState);

  return <getDataContext.Provider value={data}>
    <getDispatchContext.Provider value={dispatch}>  
    {children}
    </getDispatchContext.Provider>
  </getDataContext.Provider>
};