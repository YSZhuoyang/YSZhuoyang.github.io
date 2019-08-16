import React, { memo } from "react";
import styled from "styled-components";
import Timeline from "react-image-timeline";
import events from "./Events.js";
import "react-image-timeline/dist/timeline.css";

const emptyfooter = props => <></>;

const StyledTimelineDiv = styled.div`
  height: 1200px;
  overflow-y: scroll;
  border-bottom-style: groove;
  border-color: rgb(220, 220, 220);

  @media (max-width: 480px) {
    & .rt-event {
      min-height: 340px;
    }
  }

  @media (max-width: 768px) {
    height: 600px;
  }
`;

export default memo(props => (
  <StyledTimelineDiv>
    <Timeline
      events={events}
      reverseOrder={true}
      customComponents={{ footer: emptyfooter }}
    />
  </StyledTimelineDiv>
));
