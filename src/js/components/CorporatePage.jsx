import { Component } from "react";
import { withRouter } from "react-router-dom";
import SponsorPackage from "./presentational/SponsorPackage";
import  Grid  from "@material-ui/core/Grid";
import { withStyles } from '@material-ui/core/styles';
// import ReactDOM from "react-dom";

const styles = theme => ({
    root: {
      flexGrow: 1,
    }})

class CorporatePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            packageSrc: 'hello',
        }
    }
    

    render() {
        let src = this.state.packageSrc;
        return (
            // <div style={{alignContent: 'center'}}>
            <div>
                <Grid container   direction="row" justify="center"
                    alignItems="center" className="classes.root" >
                    <Grid item xs>
                    <p>
                        Container for the corporate page. Package is rendered from SponsorPackage.jsx, so we need a src there.</p>
                </Grid>
                </Grid>
                <SponsorPackage src={src} />

            </div>
            // </div>
        );
    }
}

export default withRouter( withStyles(styles)(CorporatePage));
