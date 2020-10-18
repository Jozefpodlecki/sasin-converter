import { animated, useSpring } from "react-spring";
import { faClipboard, faSync } from "@fortawesome/free-solid-svg-icons";
import React, { FunctionComponent, useEffect, useState } from "react";

import { getSasinRatio, saveToClipboard } from "api";
import { useHistory } from "react-router";
import { useTranslation } from "react-i18next";
import Icon from "../Icon";
import NumericField from "components/NumericField";
import Popup from "components/Popup";
import style from "./style.scss";

type Props = {
    unit?: "sasin" | "numeric";
    value?: string;
    precision: number;
};

const Converter: FunctionComponent<Props> = ({
    unit,
    value: valueParam,
    precision,
}) => {
    const [{ number }, set] = useSpring(() => ({ number: 0 }));
    const [hasFocused, setFocus] = useState(false);
    const [mode, setMode] = useState(false);
    const [ratio, setRatio] = useState<number | undefined>();
    const [value, setValue] = useState<number | undefined>();
    const [showPopup, setPopup] = useState(false);
    const history = useHistory();

    const { t } = useTranslation();

    useEffect(() => {
        setMode(unit ? unit !== "sasin" : true);
        setValue(Number(valueParam));
    }, [unit, valueParam]);

    useEffect(() => {
        if (!value || !ratio) {
            return;
        }

        const number = convert(value, mode);

        set({ number });
    }, [value, mode, ratio]);

    useEffect(() => {
        getSasinRatio().then((ratio) => {
            setRatio(ratio);
        });
    }, []);

    const onChange = (value: number) => {
        setValue(value);
        history.push({
            path: "/",
            search: `?unit=${mode ? "numeric" : "sasin"}&value=${value}`,
        } as any);
    };

    const convert = (value: number, mode: boolean) => {
        return mode ? value / ratio : value * ratio;
    };

    const onFocus = () => {
        setFocus(true);
    };

    const onBlur = () => {
        setFocus(false);
    };

    const onSwitch = () => {
        setMode(!mode);
        const newValue = value || 0;
        set({ number: newValue });

        const newNumber = Number(transform(number.getValue()));
        setValue(newNumber);
        history.push({
            path: "/",
            search: `?unit=${!mode ? "numeric" : "sasin"}&value=${newValue}`,
        } as any);
    };

    const onClipboard = () => {
        const value = number.getValue().toString();

        saveToClipboard(value).then(() => {
            setPopup(true);
        });
    };

    const transform = (value: number) => {
        const str = value.toFixed(precision);
        const zeros = Array(precision).join("0");

        if (str.includes(`.${zeros}`)) {
            return str.slice(0, -precision - 1);
        }

        return str;
    };

    return (
        <div className={style.converter}>
            <div className={style.converter__input}>
                <NumericField
                    placeholder={
                        hasFocused
                            ? null
                            : mode
                            ? t("enterNumber")
                            : t("enterSasinNumber")
                    }
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                />
                <span className={style.converter__inputUnit}>
                    {mode ? "" : value ? " sasinów" : ""}
                </span>
            </div>
            <div className={style.converter__switch}>
                <div onClick={onSwitch}>
                    <Icon icon={faSync} size="2x" />
                </div>
            </div>
            <div className={style.converter__outputBox} onClick={onClipboard}>
                <Popup show={showPopup} onTimeout={() => setPopup(false)} />
                <span className={style.converter__output}>
                    <animated.span className={style.converter__outputText}>
                        {number.interpolate(transform)}
                    </animated.span>
                    <span className={style.converter__outputUnit}>
                        {mode ? " sasinów" : ""}
                    </span>
                </span>
                <Icon
                    className={style.converter__copyIcon}
                    icon={faClipboard}
                    size="2x"
                />
            </div>
        </div>
    );
};

export default Converter;
