import { Route, Switch } from "react-router";
import Main from "pages/Main";
import React, { FunctionComponent } from "react";

const App: FunctionComponent = () => {
    return (
        <Switch>
            <Route component={Main} />
        </Switch>
    );
};

export default App;
