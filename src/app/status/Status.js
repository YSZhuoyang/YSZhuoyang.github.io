import React, { memo } from "react";
import DateDiv from "./DateDiv";
import StatusDiv from "./StatusDiv";

export default memo(function Status() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    const dateObj = new Date();
    const day = dateObj.getDate();
    const month = dateObj.getMonth();

    return (
      <StatusDiv>
          <DateDiv>{months[month] + " " + day}</DateDiv>
      </StatusDiv>
    );
});
