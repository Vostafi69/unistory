import { useDispatch, useSelector } from "react-redux";

export const useAppDispatch = useDispatch.withTypes<AppDispatchType>();
export const useAppSelector = useSelector.withTypes<RootStateType>();
