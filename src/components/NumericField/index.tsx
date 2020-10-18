import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useState,
} from "react";

import style from "./style.scss";

type NumericFieldProps = {
    placeholder: string;
    value: number;
    onChange(value: number): void;
    onFocus(): void;
    onBlur(): void;
};

const NumericField: FunctionComponent<NumericFieldProps> = ({
    value,
    placeholder,
    onChange,
    onFocus,
    onBlur,
}) => {
    const [_value, setValue] = useState("");
    const [previousKey, setKey] = useState("");

    useEffect(() => {
        if (!value) {
            return;
        }

        setValue(value.toString());
    }, [value]);

    const _onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.currentTarget;
        const numericValue = Number(value);

        if (Number.isNaN(numericValue)) {
            event.preventDefault();
            return;
        }

        setValue(value);
        onChange(numericValue);
    };

    const onKeyDown = useCallback(
        (event: React.KeyboardEvent<HTMLInputElement>) => {
            const { key } = event;

            if (
                !/\d/.test(key) &&
                ![
                    ".",
                    "Control",
                    "Shift",
                    "Backspace",
                    "Home",
                    "ArrowLeft",
                    "ArrowRight",
                ].includes(key) &&
                !(
                    previousKey === "Control" &&
                    ["a", "c", "x", "v"].includes(key)
                )
            ) {
                event.preventDefault();
            }

            setKey(key);
        },
        [previousKey]
    );

    const onPaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        const value = event.clipboardData.getData("text");
        const numericValue = Number(value);

        if (Number.isNaN(numericValue)) {
            event.preventDefault();
            return;
        }

        setValue(value);
        onChange(numericValue);
    };

    return (
        <input
            className={style.input}
            placeholder={placeholder}
            onFocus={onFocus}
            onBlur={onBlur}
            onKeyDown={onKeyDown}
            onPaste={onPaste}
            onChange={_onChange}
            value={_value}
            type="text"
        />
    );
};

export default NumericField;
