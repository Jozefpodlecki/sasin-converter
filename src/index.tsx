import "./styles.scss";
import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App";

import "i18n";
import store from "store/store";

const root = document.getElementById(process.env.root);

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
        ,
    </Provider>,
    root
);
