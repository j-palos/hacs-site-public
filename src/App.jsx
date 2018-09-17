import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
// import {Button} from 'reactstrap';
import {BrowserRouter} from 'react-router-dom';
import NavBar from "./js/components/NavBar";
import CssBaseline from '@material-ui/core/CssBaseline';
import ContentPage from "./js/components/ContentPage";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      category: "",

    }
  }

  render() {

    return (
      <div>
        <React.Fragment>
          <CssBaseline/>
          <BrowserRouter>
            <div>
              <NavBar/>
              <ContentPage/>
            </div>
          </BrowserRouter>
        </React.Fragment>
      </div>
    );
  }
}

export default App;
