import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, {FunctionComponent } from "react";
import { __RouterContext } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./style.scss";
import { SizeProp } from "@fortawesome/fontawesome-svg-core";

type Prop = {
    className?: string;
    icon: IconDefinition;
    size?: SizeProp;
    color?: string;
}

const defaultColor = "white";

const Icon: FunctionComponent<Prop> = ({
    className,
    icon,
    size,
    color
}) => {
	return <div className={`${className || ""} ${style.icon}`}>
        <FontAwesomeIcon icon={icon} color={color || defaultColor} size={size} />
    </div>
  };
  
  export default Icon;