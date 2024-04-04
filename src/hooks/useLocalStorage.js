import { useEffect, useState } from "react";

const LocalStorage = (storageKey, initialValue) => {
    const [value, setValue] = useState(JSON.parse(localStorage.getItem(storageKey)) ?? initialValue);

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
}

export default LocalStorage;