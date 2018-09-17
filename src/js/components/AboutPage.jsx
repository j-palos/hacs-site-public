import {Component} from "react";
import {withRouter} from "react-router-dom";
import OrgInfo from "./presentational/OrgInfo";
import MissionStatement from "./presentational/MissionStatement";
import OfficerInfoContainer from "./container/OfficerInfoContainer";

// import ReactDOM from "react-dom";


class AboutPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div>
                This is the about page
                <MissionStatement />
                <OrgInfo />
                <OfficerInfoContainer />
            </div>
        );
    }

}

export default withRouter(AboutPage);
