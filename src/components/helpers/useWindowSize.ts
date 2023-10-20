import {useEffect, useState} from "react";

/**
 * Hook that measured window width size
 */
export function useWindowSize() {
     const [windowSize, setWindowSize] = useState(0);
    useEffect(() => {

        function handleResize() {
            setWindowSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}