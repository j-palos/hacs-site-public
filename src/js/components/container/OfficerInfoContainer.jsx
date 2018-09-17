import React, {Component} from "react";
// import ReactDOM from "react-dom";

class OfficerInfoContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // this.setState({[event.target.id]: event.target.value});
    }

    render() {
        return (
            <div>This will eventually render the officers by returning a set of Officer Components
                </div>
        );
    }
}

export default OfficerInfoContainer;