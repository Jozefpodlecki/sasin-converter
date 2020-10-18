import { useEffect, useState } from "react";

export const useInitialInteraction = (onInteraction: Function) => {
    
    useEffect(() => {

		const callback = (event: any) => {
			onInteraction(event);

			window.removeEventListener("click", callback);
		}

		window.addEventListener("click", callback)

		return () => {
			window.removeEventListener("click", callback);
		};

		
    }, []);
}