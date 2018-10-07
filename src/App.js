import React, {Component} from 'react';
import mehmet from "./components/mehmet";
import Charts from "./components/Chart/Charts";
import Tables from "./components/Chart/Tables";

import {Link, Route, Switch} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Link to={"charts"}>Chart Page</Link><br/>
                <Link to={"tables"}>Table Page</Link><br/>

                <Switch>
                    <Route path={"/charts"} exact component={Charts}/>

                    <Route path={"/tables"} exact component={Tables}/>


                    <Route component={mehmet}/>
                </Switch>
            </div>
        );
    }
}

export default App;
