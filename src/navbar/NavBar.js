
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AboutMe from '../aboutMe/AboutMe';
import ProjGridList from '../projects/Proj';
import Trace from '../trace/Trace';


const getStyles = theme => ({
    tabRoot: {
        flex: 1,
        width: "33%",
        maxWidth: 400,
        minWidth: 72
    },
    indicator: {
        background: "#eeee44",
        height: 4
    },
    label: {
        [theme.breakpoints.down('sm')]: {
            fontSize: 14
        },
        [theme.breakpoints.up('md')]: {
            fontSize: 18
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: 28
        }
    }
});

class NavBar extends React.Component {

    state = {
        value: 0
    };

    handleChange = (event, value) => {
        this.setState({ value });
      };

    handleChangeIndex = index => {
        this.setState({ value: index });
    };

    render() {
        const { classes } = this.props;

        return (
            <div >
                <Tabs
                value={this.state.value}
                onChange={this.handleChange}
                classes={{
                    indicator: classes.indicator
                }}
                centered
                >
                    <Tab
                    classes={{
                        root: classes.tabRoot,
                        label: classes.label
                    }} label="My Trace" value={0} />
                    <Tab
                    classes={{
                        root: classes.tabRoot,
                        label: classes.label
                    }} label="My Work" value={1} />
                    <Tab
                    classes={{
                        root: classes.tabRoot,
                        label: classes.label
                    }} label="About Me" value={2} />
                </Tabs>

                <br/>

                <SwipeableViews
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
                >
                    <Trace />
                    <ProjGridList windowWidth={this.props.windowWidth} />
                    <AboutMe />
                </SwipeableViews>
            </div>
        );
    }
}

NavBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(getStyles)(NavBar);
