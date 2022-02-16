import { React } from "react";
import { useNavigate } from "react-router";
import {
  Typography,
  CssBaseline,
  AppBar,
  Toolbar,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import {
  FaStethoscope,
  FaWheelchair,
  FaPlus,
  FaHeartbeat,
} from "react-icons/fa";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import useStyles from "../HomeStyles";
import contactUseStyles from "../Styles/Contact";

let Contact = () => {
  let classes1 = useStyles();
  let classes = contactUseStyles();
  let navigate = useNavigate();

  return (
    <>
      <div className={classes1.homeContainer}>
        <div className={classes1.div1}>
          <CssBaseline />
          <AppBar
            position="relative"
            style={{ background: "#66A1FF", color: "black" }}
          >
            <Toolbar className={classes1.nav}>
              <div className={classes1.heading}>
                <LocalHospitalIcon fontSize="large" />
                <Typography variant="v6">Hospital Help</Typography>
              </div>
              <div className={classes1.info}>
                <Typography variant="v6">Emergency</Typography>
                <Typography
                  variant="v6"
                  onClick={() => navigate("/about", { replace: true })}
                >
                  About
                </Typography>
                <Typography
                  variant="v6"
                  onClick={() => navigate("/", { replace: true })}
                >
                  Home
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </div>

        <div className={classes.messageDiv}>
          <div className={classes.childmassa}>
            <div className={classes.formtext}>
              <Typography variant="h4" color="initial">
                Drop Us a Message
              </Typography>
            </div>
            <div className={classes.formmessage}>
              <div className={classes.forminputs}>
                <div className={classes.formContacts}>
                  <div className={classes.formdetails}>
                    <TextField
                      sx={{
                        width: "70%",
                      }}
                      id="outlined-basic"
                      label="Name"
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formdetails}>
                    <TextField
                      sx={{
                        width: "70%",
                      }}
                      id="outlined-basic"
                      label="Email"
                      variant="outlined"
                    />
                  </div>
                  <div className={classes.formdetails}>
                    <TextField
                      sx={{
                        width: "70%",
                      }}
                      id="outlined-basic"
                      label="Phone no"
                      variant="outlined"
                    />
                  </div>
                </div>
                <div className={classes.formuser}>
                  <TextareaAutosize
                    aria-label="minimum height"
                    minRows={10}
                    placeholder="Please enter your message"
                    style={{
                      width: 400,
                      marginTop: "1.3rem",
                      fontSize: "1.1rem",
                      fontFamily: "cursive",
                      padding: "10px",
                    }}
                  />
                </div>
              </div>
              <div className={classes.frombtn}>
                <Button
                  sx={{ width: "30%" }}
                  type="submit"
                  variant="contained"
                  onClick={() => {
                     alert("Thankyou for sending us a message")
                     navigate("/", { replace: true })
                  }}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
