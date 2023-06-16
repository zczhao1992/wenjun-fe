import { useSelector } from "react-redux";
import { StateType } from "../store";
import { ComponentsStateType } from "../store/componentsReducer";

function useGetComponentInfo() {
  // redux store
  const components = useSelector<StateType>(
    (state) => state.components
  ) as ComponentsStateType;

  const { componentList = [], selectedId } = components;

  const selectedComponent = componentList.find((c) => c.fe_id === selectedId);

  return { componentList, selectedId, selectedComponent };
}

export default useGetComponentInfo;
