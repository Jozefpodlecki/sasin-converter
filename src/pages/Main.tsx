import { load } from "store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "store/useSelector";
import Content from "components/Content";
import Footer from "components/Footer";
import Header from "components/Header";
import Layout from "components/Layout";
import Loader from "react-loader-spinner";
import React, { FunctionComponent, useEffect } from "react";

import style from "./style.scss";

const Main: FunctionComponent = () => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector((state) => state.page);

    useEffect(() => {
        if (isLoading) {
            dispatch(load());
        }
    }, [isLoading]);

    return (
        <>
            {isLoading ? (
                <div className={style.loader}>
                    <Loader
                        type="ThreeDots"
                        color="black"
                        width={200}
                        height={200}
                    />
                </div>
            ) : (
                <Layout>
                    <Header />
                    <Content />
                    <Footer />
                </Layout>
            )}
        </>
    );
};

export default Main;
