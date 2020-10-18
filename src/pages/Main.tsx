import React, { FunctionComponent, useEffect } from "react";
import Layout from "components/Layout";
import Header from "components/Header";
import Footer from "components/Footer";
import Content from "components/Content";
import { useDispatch } from "react-redux";
import { load } from "store/actions";
import { useSelector } from "store/useSelector";
import Loader from "react-loader-spinner";

import style from "./style.scss";

const Main: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.page);

    useEffect(() => {
        if(isLoading) {
            dispatch(load());
        }
    }, [isLoading]);

    return <>
        {isLoading ? 
        <div className={style.loader}>
            <Loader type="ThreeDots" color="black" width={200} height={200} />
        </div> :
        <Layout>
            <Header />
            <Content />
            <Footer />
        </Layout>}
    </>;
};

export default Main;
