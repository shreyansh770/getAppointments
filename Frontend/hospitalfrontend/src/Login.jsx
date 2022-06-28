import { React, useState } from "react";
import { useNavigate } from "react-router";
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
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import useStyles from "./HomeStyles";
import appImg from "./Img/Appointment.png";

import * as api from "./axiosReq";

let Login = (prop) => {
  const [profile, setProfile] = useState("Patient");
  const [register, setRegister] = useState(false);
  const classes = useStyles();

  let handleProfile = (e) => {
    setProfile(e.target.value);
  };

  let navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
    cpassword: "",
    name: "",
    phn: "",
  };

  const onSubmit = async (values, props) => {
    if (register === true) {
      let rUser = await api.userSignup(values);
      setRegister(false);
      alert("User signup please login");
    } else {
      let user = await api.userSignin(values);

      if (user.data.message.includes("Incorrect")) {
        alert(user.data.message);
      } else {
        localStorage.setItem(
          "user",
          JSON.stringify({ user: user.data.user, token: user.data.token })
        );

        if (user.data.user.role === "patient" && profile === "Patient") {
          navigate("/patient", { replace: true });
        } else if (user.data.user.role === "doctor" && profile === "Doctor") {
          navigate("/doctor", { replace: true });
        } else if (user.data.user.role === "admin" && profile === "Admin") {
          navigate("/admin", { replace: true });
        }
      }
    }
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Please enter valid email"),
  });

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

        <div className={classes.authConatiner}>
          <div className={classes.loginImg}>
            <img className={classes.img} src={appImg} alt="appImg"></img>
          </div>

          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form className={classes.formik}>
                <div className={classes.loginContainer}>
                  <div className={classes.login}>
                    <Container className={classes.text}>
                      <div className={classes.text1}>
                        <Typography variant="h2" color="initial">
                          Welcome,
                        </Typography>
                        {register === false ? (
                          <Typography
                            variant="h5"
                            color="initial"
                            sx={{
                              marginLeft: "20px",
                            }}
                          >
                            Please login to continue
                          </Typography>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className={classes.text2}>
                        <ToggleButtonGroup
                          onClick={(e) => handleProfile(e)}
                          color="primary"
                          exclusive
                        >
                          <ToggleButton value="Patient">Patient</ToggleButton>
                          <ToggleButton value="Doctor">Doctor</ToggleButton>
                          <ToggleButton value="Admin">Admin</ToggleButton>
                        </ToggleButtonGroup>
                      </div>
                    </Container>

                    <Container className={classes.input}>
                      <Field
                        as={TextField}
                        className={classes.inputs}
                        id="outlined-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        helperText={<ErrorMessage name="email" />}
                      />
                      {register == false ? (
                        <Link
                          component="button"
                          variant="body2"
                          sx={{
                            width: "100%",
                            textAlign: "right",
                            textDecoration: "none",
                          }}
                          onClick={() => {
                            navigate("/forgetpassword", { replace: true });
                          }}
                        >
                          Forgot Password ?
                        </Link>
                      ) : (
                        ""
                      )}

                      <Field
                        as={TextField}
                        className={classes.inputs}
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        name="password"
                      />
                      {profile === "Patient" && register === true ? (
                        <>
                          <Field
                            as={TextField}
                            className={classes.inputs}
                            id="outlined-password-input"
                            label="Confirm Password"
                            type="password"
                            name="cpassword"
                          />
                          <Field
                            as={TextField}
                            className={classes.inputs}
                            id="outlined-text-input"
                            label="Name"
                            type="text"
                            name="name"
                          />

                          <Field
                            as={TextField}
                            className={classes.inputs}
                            id="outlined-text-input"
                            label="Phone No"
                            type="text"
                            name="phn"
                          />
                          <Button
                            variant="contained"
                            type="submit"
                            sx={{
                              width: "80%",
                              marginBottom: "1rem",
                            }}
                          >
                            REGISTER
                          </Button>
                          <Button
                            variant="outlined"
                            type="submit"
                            sx={{
                              width: "80%",
                            }}
                            onClick={() => setRegister(false)}
                          >
                            ALREADY REGISTERED ?
                          </Button>
                        </>
                      ) : (
                        <>
                          <Button
                            variant="contained"
                            type="submit"
                            sx={{
                              width: "80%",
                              marginBottom: "2rem",
                            }}
                          >
                            LOGIN
                          </Button>
                          {profile == "Patient" ? (
                            <Button
                              variant="outlined"
                              type="submit"
                              sx={{
                                width: "80%",
                              }}
                              onClick={() => setRegister(true)}
                            >
                              NOT YET REGISTERED ?
                            </Button>
                          ) : (
                            ""
                          )}
                        </>
                      )}
                    </Container>

                    <Container className={classes.btns}></Container>
                  </div>
                </div>
              </Form>
            )}
          </Formik>

          {profile == "Patient" && register == true ? (
            <svg
              className={classes.waves}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              height="10%"
              width="100%"
            >
              <path
                fill="#a2d9ff"
                fillOpacity="0.4"
                d="M0,224L1440,224L1440,320L0,320Z"
              ></path>
            </svg>
          ) : (
            <svg
              className={classes.waves}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
            >
              <path
                fill="#a2d9ff"
                fillOpacity="0.4"
                d="M0,224L1440,224L1440,320L0,320Z"
              ></path>
            </svg>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
