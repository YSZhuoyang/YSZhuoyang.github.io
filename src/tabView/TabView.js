import React, { useState } from "react";
import styled from "styled-components";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import AboutMe from "../aboutMe/AboutMe";
import Trace from "../trace/Trace";

const StyledTab = styled(Tab)`
    && {
        flex: 1;
        font-size: 20px;

        @media (max-width: 768px) {
          font-size: 14px;
        }
    }
`;

const getStyles = theme => ({
    indicator: {
        background: "#aaaa44",
        height: 4
    }
});

const TabView = props => {
    const { classes } = props;
    const [tabId, setTabId] = useState(0);
    const handleChange = (_, value) => setTabId(value);
    const handleChangeIndex = index => setTabId(index);

    return (
        <div>
            <Tabs
                value={tabId}
                onChange={handleChange}
                classes={{
                  indicator: classes.indicator
                }}
                centered
            >
                <StyledTab label="My Trace" value={0} />
                <StyledTab label="About Me" value={1} />
            </Tabs>

            <br />

            <SwipeableViews
                index={tabId}
                onChangeIndex={handleChangeIndex}
            >
                <Trace />
                <AboutMe />
            </SwipeableViews>
        </div>
    );
}

TabView.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(getStyles)(TabView);
