import { useEffect, useState } from "react";

interface DebouncePrope {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    delay?: number;
    className: string;
}

export const DebouncedInput: React.FC<DebouncePrope> = ({
    value,
    onChange,
    placeholder = "",
    delay = 500,
    className = "",
}) => {
    const [internalValue, setInternalValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            onChange(internalValue);
        }, delay);
        return () => clearTimeout(handler);
    }, [internalValue, delay, onChange]);

    useEffect(() => {
        setInternalValue(value);
    }, [value]);


    return (
        <input
            type="text"
            placeholder={placeholder}
            value={internalValue}
            onChange={(e) => setInternalValue(e.target.value)}
            className={className}
        />
    )
}