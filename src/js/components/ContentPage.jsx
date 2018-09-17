import {Component} from "react";
// import ReactDOM from "react-dom";
import {Route, Switch, withRouter} from 'react-router-dom';
import LandingPage from "./LandingPage";
import AboutPage from "./AboutPage";
import CalendarPage from "./container/CalendarPage";
import CorporatePage from "./CorporatePage";


class ContentPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path={"/"} component={LandingPage}/>
                    <Route path={"/about"} component={AboutPage}/>
                    <Route path={"/calendar"} component={CalendarPage}/>
                    <Route path={"/corporate"} component={CorporatePage}/>
                </Switch>
            </div>
        );
    }
}

export default withRouter(ContentPage);
