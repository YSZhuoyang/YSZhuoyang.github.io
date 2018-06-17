
import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SwipeableViews from 'react-swipeable-views';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import AboutMe from '../aboutMe/AboutMe';
import Proj from '../projects/Proj';
import Trace from '../trace/Trace';


const getStyles = theme => ({
    tabRoot: {
        flex: 1,
        width: "33%",
        maxWidth: 400,
        minWidth: 72
    },
    indicator: {
        height: 4
    },
    label: {
        fontSize: 28
    },
    labelWrapped: {
        fontSize: 16
    }
});

class NavBar extends React.Component {

    state = {
        value: 0
    };

    containerStyle = {
        background: 'transparent'
    };

    inkBarStyle = {
        background: '#ee8855',
        height: '5px'
    }

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
                        label: classes.label,
                        labelWrapped: classes.labelWrapped
                    }} label="My Trace" value={0} />
                    <Tab
                    classes={{
                        root: classes.tabRoot,
                        label: classes.label,
                        labelWrapped: classes.labelWrapped
                    }} label="My Work" value={1} />
                    <Tab
                    classes={{
                        root: classes.tabRoot,
                        label: classes.label,
                        labelWrapped: classes.labelWrapped
                    }} label="About Me" value={2} />
                </Tabs>

                <br/>

                <SwipeableViews
                index={this.state.value}
                onChangeIndex={this.handleChangeIndex}
                >
                    <Trace />
                    <Proj />
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
