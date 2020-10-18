import { RootState } from "./reducer";
import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector,
} from "react-redux";

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
