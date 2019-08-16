import React from "react";
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

class NavBar extends React.PureComponent {
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
      <div>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
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
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <Trace />
          {/* <ProjGridList windowWidth={this.props.windowWidth} /> */}
          <AboutMe />
        </SwipeableViews>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(getStyles)(NavBar);
