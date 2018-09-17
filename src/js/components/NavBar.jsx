import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs/Tabs';
import Tab from '@material-ui/core/Tab/Tab';
import { Link, withRouter } from 'react-router-dom';
import { Component } from 'react';
import { Grid } from '@material-ui/core/Grid';

// // Todo maybe add routing created from mapping, idk
// const ROUTES = [
//   { Home: '' },
//   { About: 'about' },
//   { Calendar: 'calendar' },
//   { Corporate: 'corporate' },
// ];

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    const path = this.props.location.pathname;

    this.setState({
      value: path,
    });
  }

  handleChange(e, value) {
    this.setState({ value });
  }

  render() {
    const value = this.state.value;
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
               {/* <Grid container spacing={24}>
            
              <Grid item xs={6}> */}
              <Tabs value={value} onChange={this.handleChange}>
              {/* {/* <Grid container spacing={24}> */}
                {/* <Grid item xs> */}
                  <Tab label="Home" value="/" component={Link} to="" />
                {/* </Grid> */}
                {/* <Grid item xs> */}
                  <Tab label="About" value="/about" component={Link} to="about" />
                {/* </Grid> */}
                {/* <Grid item xs> */}
                  <Tab label="Calendar" value="/calendar" component={Link} to="calendar" />
                {/* </Grid> */}
                {/* <Grid item xs> */}
                  <Tab label="Corporate" value="/corporate" component={Link} to="corporate" />
                {/* </Grid> */}
                
              </Tabs>
              {/* </Grid>
              </Grid> */}
            <Typography
              variant="title"
              color="inherit"
              style={{
                float: 'none',
                width: 'auto',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              HACS
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(NavBar);
