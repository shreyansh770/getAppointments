import { useState } from "react";
import useStyles from "./HomeStyles";
import { useNavigate } from "react-router";
import * as api from "./axiosReq";
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
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import forgotStyles from "./Password";
import { Form, Formik, Field } from "formik";

let ForgotPass = () => {
  const classes = useStyles();
  let navigate = useNavigate();
  const classes1 = forgotStyles();

  const [optReq, setoptReq] = useState(true);

  const initialValues = {
    email: "",
    password: "",
    confirmPassword: "",
    otp: "",
  };

  let onSubmit = async (values, props) => {
    if (optReq == true) {
      // generate otp
      let getOtp = await api.forgetPass(values.email);
      if (getOtp.data.otpUpdate == undefined) {
        alert("Enter a valid email");
      } else {
        alert("otp send to your email address");
        setoptReq(false);
      }
    } else {
      // verify otp
      let newPassBody = {
        otp: values.otp,
        password: values.password,
        confirmPassword: values.confirmPassword,
      };

      let cPass = await api.verifyEmail(newPassBody);
      console.log(cPass);
      if(cPass.data?.user){
        alert("Password succesfully updated please login to continue");
        navigate("/", { replace: true });
      } else if (cPass.data?.message.includes("Sorry")) {
        alert(cPass.data.message);
      } else if (cPass.data?.message.includes("dont")) {
        alert(cPass.data.message);
      } 

      
    }
  };

  return (
    <>
      <div className={classes.homeContainer}>
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
                <Typography variant="v6">Emergency</Typography>
                <Typography
                  variant="v6"
                  onClick={() => navigate("/about", { replace: true })}
                >
                  About Us
                </Typography>
                <Typography
                  variant="v6"
                  onClick={() => navigate("/contact", { replace: true })}
                >
                  Contact
                </Typography>
              </div>
            </Toolbar>
          </AppBar>
        </div>

        <div className={classes1.forgotPasswordForm}>
          <div
            className={classes1.bigDiv}
            style={{ display: optReq == true ? "flex" : "none" }}
          >
            <div className={classes1.bigDivText}>
              <Typography variant="h2" color="initial">
                Forgot Password ?
              </Typography>
            </div>

            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {(props) => (
                <Form className={classes1.formik}>
                  <div className={classes1.bigDivForm}>
                    <Field
                      as={TextField}
                      sx={{
                        width: "70%",
                        height: "40%",
                      }}
                      id="outlined-basic"
                      label="Enter email"
                      variant="outlined"
                      type="email"
                      name="email"
                    />
                    <Button
                      sx={{
                        width: "30%",
                        height: "10%",
                        fontSize: "1.2rem",
                      }}
                      color="secondary"
                      variant="outlined"
                      type="submit"
                    >
                      Get OTP
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          <div
            className={classes1.optVerify}
            style={{ display: optReq == false ? "flex" : "none" }}
          >
            <div className={classes1.otpText}>
              <Typography variant="h3" color="initial">
                Set new password
              </Typography>
            </div>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {(props) => (
                <Form className={classes1.formik}>
                  <div className={classes1.otpForm}>
                    <Field
                      as={TextField}
                      sx={{
                        width: "70%",
                      }}
                      id="outlined-basic"
                      label="Enter OTP"
                      variant="outlined"
                      name="otp"
                    />
                    <Field
                      as={TextField}
                      sx={{
                        width: "70%",
                      }}
                      id="outlined-basic"
                      label="New password"
                      variant="outlined"
                      type="password"
                      name="password"
                    />
                    <Field
                      as={TextField}
                      sx={{
                        width: "70%",
                      }}
                      id="outlined-basic"
                      label="Confirm password"
                      variant="outlined"
                      name="confirmPassword"
                    />
                    <Button
                      sx={{
                        width: "30%",
                        fontSize: "1.2rem",
                      }}
                      color="secondary"
                      variant="outlined"
                      type="submit"
                    >
                      Set password
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPass;
