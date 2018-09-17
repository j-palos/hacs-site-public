import React, {Component} from "react";
// import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import Calendar from "../presentational/Calendar";

class CalendarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seo_title: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return (
            <Calendar/>
        );
    }
}

export default CalendarPage;