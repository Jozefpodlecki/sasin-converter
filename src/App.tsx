import Main from "pages/Main";
import React, { FunctionComponent } from "react";
import { Route, Switch } from "react-router";

const App: FunctionComponent = () => {
	
    return <Switch>
		<Route component={Main}/>
	</Switch>;
};

export default App;