import { useTypedSelector } from "./useTypedSelector";

export const useCounter = () => {
  const counter = useTypedSelector(state => state.count);
  
  return counter;
};
