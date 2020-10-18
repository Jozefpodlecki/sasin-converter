import React, { ChangeEvent, FunctionComponent, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { useTranslation } from "react-i18next";
import { animated, useSpring } from "react-spring";

import style from "./style.scss";

type Props = {
    show: boolean;
    onTimeout(): void;
}

const Popup: FunctionComponent<Props> = ({
    show,
    onTimeout,
}) => {
    const [props, set] = useSpring(() => ({opacity: 0, onRest}))
    const { t } = useTranslation();
    
    function onRest() {
        if(!props.opacity.getValue()) {
            return;
        }

        setTimeout(() => {
            set({opacity: 0});
            onTimeout();
        }, 125);
    }

    useEffect(() => {
        set({opacity: show ? 1 : 0});
        
    }, [show]);

    return ReactDOM.createPortal(<animated.div style={props} className={style.popup}>
        {t("copied")}
    </animated.div>, document.getElementById(process.env.root));
}

export default Popup;