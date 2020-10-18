import { parse } from "query-string";
import { useLocation } from "react-router";

export const useHashRouterParams = <T>() => {
    const location = useLocation();

    return (parse(location.search) as unknown) as T;
};
