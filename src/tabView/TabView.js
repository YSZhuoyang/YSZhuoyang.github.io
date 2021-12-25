import React, { useState } from "react";
import { styled } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import SwipeableViews from "react-swipeable-views";
import PropTypes from "prop-types";

import AboutMe from "../aboutMe/AboutMe";
import Trace from "../trace/Trace";

const StyledTab = styled(Tab)`
    && {
        flex: 1;
        font-size: 20px;
        color: #aaaaaa;

        @media (max-width: 768px) {
          font-size: 14px;
        }

        &.Mui-selected {
            color: #ddddbb;
        }
    }
`;


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
