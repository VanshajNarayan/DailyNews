import { useContext } from "react";
import { getDataContext, getDispatchContext } from "../ContextApi/ContextFile";

export function useData() {
  return useContext(getDataContext);
};

export function useDispatch() {
  return useContext(getDispatchContext);
};