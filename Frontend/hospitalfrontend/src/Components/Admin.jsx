import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import adminUseStyles from "../Styles/Admin";
import * as api from "../axiosReq";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import clsx from "clsx";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import AdminDashboard from "./adminDashboard";
import DocListTable from "./docListTable";
import PatListTable from "./patListTable";


let Admin = (props) => {
  const classes = adminUseStyles();
  let navigate = useNavigate();

  let logOutUser = () => {
    props.setUser(null);
    localStorage.removeItem("user");
    navigate("/", { replace: true });
  };

  const [bread, setBread] = useState("Dashboard");

  let handleBread = (e) => {
    setBread(e.target.value);
  };

  return (
    <>
      <div className={classes.adminContainer}>
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
                  bread == "Doclist" ? classes.highlight : ""
                )}
                value="Doclist"
              >
                Doctor List
              </ToggleButton>
              <ToggleButton
                className={clsx(
                  classes.bread,
                  bread == "Patlist" ? classes.highlight : ""
                )}
                value="Patlist"
              >
                Patient List
              </ToggleButton>
              <ToggleButton
                className={clsx(
                  classes.bread,
                  bread == "History" ? classes.highlight : ""
                )}
                value="History"
              >
                Appointments
              </ToggleButton>
              <ToggleButton
                className={clsx(
                  classes.bread,
                  bread == "Adddoc" ? classes.highlight : ""
                )}
                value="Adddoc"
              >
                Add Doctor
              </ToggleButton>
              <ToggleButton
                className={clsx(
                  classes.bread,
                  bread == "Remdoc" ? classes.highlight : ""
                )}
                value="Remdoc"
              >
                Remove Doctor
              </ToggleButton>
            </ToggleButtonGroup>
          </div>

          <div className={classes.funtions}>
            <div className={classes.text}>
              <Typography variant="h3" component="h3">
                Hello Admin
              </Typography>
            </div>
            <div className={classes.chaingingComponent}>
              {bread == "Dashboard" ? (
                <AdminDashboard setState={setBread} />
              ) : (
                <></>
              )}
              {bread == "Doclist" ? (
                  <DocListTable state={bread}/>
              ) : (
                <></>
              )}
              {bread == "Patlist" ? (
                  <PatListTable state={bread}/>
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

export default Admin;
