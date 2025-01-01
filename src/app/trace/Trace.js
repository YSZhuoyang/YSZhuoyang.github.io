import React, { memo } from "react";
import { styled } from '@mui/material/styles';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';

import events from "./Events.js";

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

export default memo(function AlternateTimeline() {
  return (
    <StyledTimelineDiv>
      <Timeline position="alternate">
        {
          events.map((event, index) => {
            const { text, title, date, imageUrl } = event;
            return (
              <TimelineItem key={index}>
                <TimelineOppositeContent color="text.secondary">
                  <img src={imageUrl} width="70%"></img>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent title={title} date={date}>
                  {date.toDateString()}
                  <br />
                  {text}
                </TimelineContent>
              </TimelineItem>
            );
          })
        }
      </Timeline>
    </StyledTimelineDiv>
  );
});
