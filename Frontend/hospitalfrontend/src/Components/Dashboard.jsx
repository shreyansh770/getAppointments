import React from "react";
import patientUseStyles from "../Styles/Patient";
import {
    Typography,
    Link,
  } from "@mui/material";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
let Dashboard = (props) => {
    const classes = patientUseStyles();
  return (
    <>
      <div className={classes.booking}>
        <div className={classes.bookingFeatures}>
          <FactCheckIcon className={classes.icon} />
          <Typography variant="h4" height="7%" className={classes.bookingText}>
            Book My Appointment
          </Typography>
          <Link onClick={()=>{props.setState("Book")}} height="7%" className={classes.bookingLink}>
            Book Appointment
          </Link>
        </div>
      </div>
      <div className={classes.bookingHistory}>
        <div className={classes.bookingFeatures}>
          <EditLocationAltIcon className={classes.icon} />
          <Typography variant="h4" height="7%" className={classes.bookingText}>
            My Appointments
          </Typography>
          <Link height="7%" onClick={()=>{props.setState("History")}} className={classes.bookingLink}>
            View Appointment History
          </Link>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
