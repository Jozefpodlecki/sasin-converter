import { useEffect } from "react";

export const useInitialInteraction = (
    onInteraction: (event: Event) => void
) => {
    useEffect(() => {
        const callback = (event: Event) => {
            onInteraction(event);

            window.removeEventListener("click", callback);
        };

        window.addEventListener("click", callback);

        return () => {
            window.removeEventListener("click", callback);
        };
    }, []);
};
