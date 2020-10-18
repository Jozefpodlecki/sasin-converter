import { faGithub } from "@fortawesome/free-brands-svg-icons";
import React, { FunctionComponent } from "react";

import { useSelector } from "store/useSelector";
import Icon from "components/Icon";
import style from "./style.scss";

const Footer: FunctionComponent = () => {
    const { link } = useSelector((state) => state.page);

    return (
        <div className={style.footer}>
            <div className={style.footer__github}>
                <a href={link}>
                    <Icon icon={faGithub} size="2x" />
                </a>
            </div>
        </div>
    );
};

export default Footer;
