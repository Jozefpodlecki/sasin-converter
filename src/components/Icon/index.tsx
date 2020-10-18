import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { FunctionComponent } from "react";

import { SizeProp } from "@fortawesome/fontawesome-svg-core";
import style from "./style.scss";

type Prop = {
    className?: string;
    icon: IconDefinition;
    size?: SizeProp;
    color?: string;
};

const defaultColor = "white";

const Icon: FunctionComponent<Prop> = ({ className, icon, size, color }) => {
    return (
        <div className={`${className || ""} ${style.icon}`}>
            <FontAwesomeIcon
                icon={icon}
                color={color || defaultColor}
                size={size}
            />
        </div>
    );
};

export default Icon;
