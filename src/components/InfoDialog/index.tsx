import { faTimes } from "@fortawesome/free-solid-svg-icons";

import React, { FunctionComponent, useEffect, useState } from "react";

import { animated, useSpring } from "react-spring";
import { getInfo } from "api";
import Icon from "components/Icon";
import Loader from "react-loader-spinner";
import style from "./style.scss";

type Props = {
    show: boolean;
    onClose(): void;
};

const InfoDialog: FunctionComponent<Props> = ({ show, onClose }) => {
    const [{ isLoading, description, image }, setState] = useState({
        isLoading: true,
        description: "",
        image: "",
    });
    const [props, set] = useSpring(() => ({ opacity: show ? 1 : 0, onRest }));

    useEffect(() => {
        set({ opacity: show ? 1 : 0 });
    }, [show]);

    useEffect(() => {
        getInfo().then((data) => {
            setState({ ...data, isLoading: false });
        });
    }, []);

    function onRest() {
        const opacity = props.opacity.getValue();

        if (!opacity) {
            onClose();
        }
    }

    const _onClose = () => {
        set({ opacity: 0 });
    };

    if (!show) {
        return null;
    }

    return (
        <animated.div style={props} className={style.dialog}>
            {isLoading ? (
                <Loader type="ThreeDots" width={100} height={100} />
            ) : (
                <div className={style.dialog__content}>
                    <div className={style.dialog__header}>
                        <div className="" onClick={_onClose}>
                            <Icon icon={faTimes} size="2x" />
                        </div>
                    </div>
                    <div className={style.dialog__body}>
                        <div
                            className={style.dialog__image}
                            style={{
                                backgroundImage: `url(${image})`,
                            }}
                        />
                        <p>{description}</p>
                    </div>
                </div>
            )}
        </animated.div>
    );
};

export default InfoDialog;
