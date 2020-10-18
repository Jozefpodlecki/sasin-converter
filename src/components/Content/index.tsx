
import { useHashRouterParams } from "hooks/useHashRouterParams";
import React, { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "store/useSelector";
import Converter from "../ConvertWidget";

import style from "./style.scss";

type Params = {
    unit?: "sasin" | "numeric";
    value?: string;
}

const Content = () => {
    const [{
        oldValue,
        newValue
    }, setValue] = useState({
        oldValue: "2",
        newValue: "2",
    });
    const { t } = useTranslation();
    const { title } = useSelector(state => state.page);
    const { unit, value } = useHashRouterParams<Params>();

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        const value = event.target.value;

        if(!/\d/.test(value) || value.length > 1) {
            event.preventDefault();

            return;
        }

        setValue(state => ({...state, oldValue: value, newValue: value}));
    }
    
    const onFocus = () => {
        setValue(state => ({...state, newValue: ""}));
    }

    const onBlur = () => {
        setValue(state => ({...state, newValue: state.oldValue}));
    }

    return <div className={style.content}>
        <div>
            <div className={style.header}>
                {title}
            </div>
            <Converter
                unit={unit}
                value={value}
                precision={Number(oldValue)}
                />
            <div className={style.options}>
                <div className={style.optionsHeader}>
                    {t("options")}
                </div>
                <div className={style.optionsRound}>
                    {t("roundTo")}
                    <input className={style.precisionInput}
                        type="text"
                        value={newValue}
                        onFocus={onFocus}
                        onBlur={onBlur}
                        onChange={onChange}/>
                    {t("decimalPlaces")}
                </div>
            </div>
        </div>
    </div>
}

export default Content;