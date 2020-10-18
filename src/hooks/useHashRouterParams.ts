import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { parse } from "query-string";

export const useHashRouterParams = <T>() => {
    const location = useLocation();
    
    return parse(location.search) as unknown as T;
}