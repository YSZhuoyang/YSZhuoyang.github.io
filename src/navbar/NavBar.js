
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import SwipeViews from 'react-swipe-views';
import {Tabs, Tab} from 'material-ui/Tabs';
import { getMuiTheme } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';

import AboutMe from '../aboutMe/AboutMe.js';
import Proj from '../projects/Proj.js';
import Trace from '../trace/Trace.js';

// import 'react-swipe-views/lib/react-swipe-views.css';
import './navbar.css';


/*const NavBar = () => (
    <SwipeViews>
        <div title={<em id="tab">Trace</em>}>
            <Trace />
        </div>
        <div title={<em id="tab">My Work</em>}>
            <Proj />
        </div>
        <div title={<em id="tab">About Me</em>}>
            <AboutMe />
        </div>
    </SwipeViews>
);*/

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
        };
    }

    handleChange = (value) => {
        this.setState({
            slideIndex: value,
        });
    };

    static childContextTypes = {
        muiTheme: PropTypes.object
    };

    getChildContext() {
        return {
            muiTheme: getMuiTheme()
        };
    }

    render() {
        const tabContainerStyles = {
            background: 'transparent'
        };

        const labelStyle = {
            fontSize: 32,
            fontStyle: 'italic',
            fontFamily: 'Times New Roman'
        };

        return (
            <div>
                <Tabs
                onChange={this.handleChange}
                value={this.state.slideIndex}
                tabItemContainerStyle={tabContainerStyles}
                >
                    <Tab label="My Trace" style={labelStyle} value={0} />
                    <Tab label="My Work" style={labelStyle} value={1} />
                    <Tab label="About Me" style={labelStyle} value={2} />
                </Tabs>

                <SwipeableViews
                index={this.state.slideIndex}
                onChangeIndex={this.handleChange}
                >
                    <Trace />
                    <Proj />
                    <AboutMe />
                </SwipeableViews>
            </div>
        );
    }
}

export default NavBar;
