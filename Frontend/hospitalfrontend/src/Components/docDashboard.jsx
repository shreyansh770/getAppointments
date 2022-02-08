import React from "react";
import patientUseStyles from "../Styles/Patient";
import {
    Typography,
    CssBaseline,
    AppBar,
    Toolbar,
    Container,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Button,
    Link,
  } from "@mui/material";
import EditLocationAltIcon from '@mui/icons-material/EditLocationAlt';
let DocdashBoard = (props) => {
    const classes = patientUseStyles();
  return (
    <>
      <div className={classes.dbookingHistory} >
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

export default DocdashBoard;