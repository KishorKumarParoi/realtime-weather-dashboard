import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
    const timeOutRef = useRef(null);
    useEffect(() => {
        return () => {
            if (timeOutRef.current) {
                clearTimeout(timeOutRef.current);
            }
        }
    }, []);

    const debouncedCallback = (...args) => {
        if (timeOutRef.current) {
            clearTimeout(timeOutRef.current);
        }

        timeOutRef.current = setTimeout(() => {
            callback(...args);
        }, delay);
    }

    return debouncedCallback;
}

export default useDebounce;