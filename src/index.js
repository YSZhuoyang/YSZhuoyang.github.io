import React from 'react';
import ReactDOM from 'react-dom';

import Status from './Status/Status';
import NavBar from './navbar/NavBar';

import './index.css';


class MainBody extends React.Component {
    constructor() {
        super();
        this.state = {
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        };
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    updateDimensions() {
        this.setState({
            windowWidth: window.innerWidth,
            windowHeight: window.innerHeight
        });
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        return(
            <div>
                <Status />

                <div className="tab-body">
                    <NavBar
                    windowWidth={this.state.windowWidth}
                    windowHeight={this.state.windowHeight} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <MainBody />,
    document.getElementById('my-body')
);

