'use client'

import React, { useState } from "react";
import Tabs from '@mui/material/Tabs';
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";

import AboutMe from "../aboutMe/AboutMe";
import Trace from "../trace/Trace";
import StyledTab from "./StyledTab";

const TabView = () => {
    const [tabId, setTabId] = useState(0);
    const onTabSwitch = (_, value) => setTabId(value);
    const handleChangeIndex = index => setTabId(index);

    return (
        <div>
            <Tabs
                value={tabId}
                onChange={onTabSwitch}
                TabIndicatorProps={{
                    style: {
                        height:"3px",
                        background: "#bbbb88"
                    }
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

export default TabView;
