import {useEffect, useState} from "react";

export default function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);

        // checks to see if there is a value there already
        if (jsonValue != null) return JSON.parse(jsonValue);

        // checks to see  whether the default value is a function or not
        if (typeof defaultValue === 'function') {
            return defaultValue();
        } else {
            return defaultValue;
        }
    });

    // add to local storage anytime the key or value changes
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue]
}
