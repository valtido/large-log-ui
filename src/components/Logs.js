import React from "react";
// import "./logs.css";

// const Logss = ({ logs }) => (
//   <div>
//     <div className="file">
//       {logs && logs.length > 0 && logs.map((log) => <div>Log</div>)}
//     </div>
//   </div>
// );

import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import Typography from "@material-ui/core/Typography";
import ErrorIcon from "@material-ui/icons/Error";
import WarningIcon from "@material-ui/icons/Warning";
import InfoIcon from "@material-ui/icons/Info";

export default function Logs({ logs }) {
  return (
    <React.Fragment>
      <Timeline>
        {logs && logs.length > 0
          ? logs.map((log) => {
              const { date, type, message } = log;
              return (
                <TimelineItem>
                  <TimelineOppositeContent>
                    <Typography color="textSecondary">{date}</Typography>
                  </TimelineOppositeContent>
                  <TimelineSeparator>
                    <TimelineDot color="secondary">
                      {type === "error" && <ErrorIcon />}
                      {type === "warning" && <WarningIcon />}
                      {type === "info" && <InfoIcon />}
                    </TimelineDot>
                    <TimelineConnector />
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography>{message}</Typography>
                  </TimelineContent>
                </TimelineItem>
              );
            })
          : "Nothing to see here"}
      </Timeline>
    </React.Fragment>
  );
}

// export default Logs;
