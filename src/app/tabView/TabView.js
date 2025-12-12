'use client'

import React, { useState } from "react";
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';

import AboutMe from "../aboutMe/AboutMe";
import Trace from "../trace/Trace";
import StyledTab from "./StyledTab";

function SwitchableTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
      </div>
    );
}


const TabView = () => {
    const [tabId, setTabId] = useState(0);
    const onTabSwitch = (_, value) => setTabId(value);

    return (
        <div>
            <Tabs
                value={tabId}
                onChange={onTabSwitch}
                slotProps={{
                    indicator: {
                        style: {
                            height: "3px",
                            background: "#bbbb88",
                        },
                    },
                }}
                centered
            >
                <StyledTab label="My Trace" value={0} />
                <StyledTab label="About Me" value={1} />
            </Tabs>

            <br />

            <SwitchableTabPanel value={tabId} index={0}>
                <Trace />
            </SwitchableTabPanel>

            <SwitchableTabPanel value={tabId} index={1}>
                <AboutMe />
            </SwitchableTabPanel>
        </div>
    );
}

export default TabView;
