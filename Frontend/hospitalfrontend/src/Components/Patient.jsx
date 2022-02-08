import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import patientUseStyles from "../Styles/Patient";
import * as api from "../axiosReq";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  ToggleButton,
  ToggleButtonGroup,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button
} from "@mui/material";
import clsx from "clsx";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";

import Bookapp from "./Bookapp";
import Dashboard from "./Dashboard";

let patName = JSON.parse(localStorage.getItem("user"))?.user.name;

let Patient = (props) => {
  let navigate = useNavigate();
  const classes = patientUseStyles();
  const [bread, setBread] = useState("Dashboard");
  const [app, setApp] = useState([]);

  useEffect(async () => {
    let appointments = await api.getAllApp();
    setApp(appointments.data.appList);
  }, [bread]);

  let handleBread = (e) => {
    setBread(e.target.value);
  };

  let logOutUser = () => {
    props.setUser(null);
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className={classes.patientContainer}>
        <div className={classes.div1}>
          <CssBaseline />
          <AppBar
            position="relative"
            style={{ background: "#66A1FF", color: "black" }}
          >
            <Toolbar className={classes.nav}>
              <div className={classes.heading}>
                <LocalHospitalIcon fontSize="large" />
                <Typography variant="v6">Hospital Help</Typography>
              </div>
              <div className={classes.info}>
                <ExitToAppIcon />
                <Typography
                  onClick={() => {
                    logOutUser();
                  }}
                  variant="v6"
                >
                  LogOut
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </div>

        <div className={classes.div2}>
          <div className={classes.breadboard}>
            <ToggleButtonGroup
              color="primary"
              exclusive
              className={classes.board}
              onClick={(e) => {
                handleBread(e);
              }}
            >
              <ToggleButton
                className={clsx(
                  classes.bread,
                  bread == "Dashboard" ? classes.highlight : ""
                )}
                value="Dashboard"
              >
                Dashboard
              </ToggleButton>
              <ToggleButton
                className={clsx(
                  classes.bread,
                  bread == "Book" ? classes.highlight : ""
                )}
                value="Book"
              >
                Book Appointment
              </ToggleButton>
              <ToggleButton
                className={clsx(
                  classes.bread,
                  bread == "History" ? classes.highlight : ""
                )}
                value="History"
              >
                Appointment History
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className={classes.funtions}>
            <div className={classes.text}>
              <Typography variant="h3" component="h3">
                Welcome {patName}
              </Typography>
            </div>
            <div className={classes.chaingingComponent}>
              {bread == "Dashboard" ? (
                <Dashboard setState={setBread} />
              ) : (
                <Bookapp state={bread} />
              )}

              {bread == "History" ? (
                <TableContainer
                  component={Paper}
                  sx={{
                    height: "80%",
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "4rem",
                  }}
                >
                  <Table
                    sx={{
                      minWidth: 650,
                      width: "100%",
                      height: "100%",
                    }}
                    aria-label="simple table"
                  >
                    <TableHead>
                      <TableRow>
                        <TableCell>Patient Name</TableCell>
                        <TableCell align="right">Doctor Name</TableCell>
                        <TableCell align="right">Fees</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Cancel</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {app.map((appointment) => (
                        <TableRow
                          height="10%"
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row" width="10.67%">
                            {appointment.patName}
                          </TableCell>
                          <TableCell align="right" width="16.67%">
                            {appointment.docName}
                          </TableCell>
                          <TableCell align="right" width="16.67%">
                            {appointment.fees}
                          </TableCell>
                          <TableCell align="right" width="16.67%">
                            {appointment.date}
                          </TableCell>
                          <TableCell align="right" width="16.67%">
                            {appointment.time}
                          </TableCell>
                          <TableCell align="right" width="16.67%">
                            <Button variant="outlined" color="error">
                              Cancel
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Patient;