import React, { memo } from "react";
import { styled } from '@mui/material/styles';
import Timeline from "react-image-timeline";
import events from "./Events.js";

import "react-image-timeline/dist/timeline.css";

const emptyfooter = () => <></>;

const StyledTimelineDiv = styled('div')`
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

export default memo(() => (
  <StyledTimelineDiv>
    <Timeline
      events={events}
      reverseOrder={true}
      customComponents={{ footer: emptyfooter }}
    />
  </StyledTimelineDiv>
));
