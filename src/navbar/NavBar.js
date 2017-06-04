
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'material-ui/Tabs';
import { getMuiTheme } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';

import AboutMe from '../aboutMe/AboutMe';
import Proj from '../projects/Proj';
import Trace from '../trace/Trace';

import './navbar.css';


class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slideIndex: 0,
            // Tab styles
            tabContainerStyles: {
                background: 'transparent'
            },
            inkBarStyles: {
                background: '#ee8855',
                height: '5px'
            },
            labelStyles: []
        };
        this.lableStyleOptions = {
            defaultLabelStyle: {
                fontSize: 32,
                fontStyle: 'italic',
                fontFamily: 'Times New Roman',
                color: '#eeeeddaa'
            },
            activeLabelStyle: {
                fontSize: 32,
                fontStyle: 'italic',
                fontFamily: 'Times New Roman',
                color: '#eeeedd'
            }
        };
        this.labelStyleTemplates = [
            this.lableStyleOptions.defaultLabelStyle,
            this.lableStyleOptions.defaultLabelStyle,
            this.lableStyleOptions.defaultLabelStyle
        ];
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
        const newLableStyles = this.labelStyleTemplates.slice();
        newLableStyles[this.state.slideIndex] =
            this.lableStyleOptions.activeLabelStyle;

        return (
            <div>
                <Tabs
                onChange={this.handleChange}
                value={this.state.slideIndex}
                tabItemContainerStyle={this.state.tabContainerStyles}
                inkBarStyle={this.state.inkBarStyles}
                >
                    <Tab label="My Trace" style={newLableStyles[0]} value={0} />
                    <Tab label="My Work" style={newLableStyles[1]} value={1} />
                    <Tab label="About Me" style={newLableStyles[2]} value={2} />
                </Tabs>

                <br/>

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
