import React, { memo } from "react";
import Timeline from "react-image-timeline";
import events from "./Events.js";
import "react-image-timeline/dist/timeline.css";
import "./trace.css";

const emptyfooter = props => <></>;

export default memo(props => (
  <div className="timeline-div">
    <Timeline
      events={events}
      reverseOrder={true}
      customComponents={{ footer: emptyfooter }}
    />
  </div>
));
