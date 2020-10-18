import { getImages } from "api";
import BackgroundSlider from "components/BackgroundSlider";
import React, { FunctionComponent, ReactNode } from "react";

import style from "./style.scss";

type LayoutProps = {
    children: ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({children}) => {
    return <div className={style.layout}>
        <BackgroundSlider/>
        {children}
    </div>;
};

export default Layout;
