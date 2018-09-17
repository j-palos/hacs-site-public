import { withRouter } from "react-router-dom";
import { Component } from "react";
import Splash from "./presentational/Splash";
// import ReactDOM from "react-dom";
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


class LandingPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            landingSrc: '\\.\\images\\placeholder.jpg',
        }
    }

    render() {
        // we can put a timer in here and make it cycle through images
        let path = this.state.landingSrc;
        return (
            <div style={{ flexGrow: 1 }}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Splash imagePath={path} />
                    </Grid>
                </Grid>
                <Grid container spacing={12}>
                    <Grid  item xs={4}>
                    </Grid>
                    <Grid item xs={4}>
                        <h2>This is the Landing Page</h2>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withRouter(LandingPage);
