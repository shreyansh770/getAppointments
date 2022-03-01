import { useState, useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
import patientUseStyles from "../Styles/Patient";
import * as api from "../axiosReq";
import { Typography, TextField, Button, MenuItem, Rating } from "@mui/material";
import bookingImg from "../Img/TaeAugust11-removebg-preview.png";
import doctorImg from "../Img/Mr_ Doctor_dummy.png";
import CloseIcon from "@mui/icons-material/Close";
import SendIcon from "@mui/icons-material/Send";
import { Field, Form, Formik } from "formik";
import Dashboard from "./Dashboard";

const specs = [
  {
    value: "Consult",
    label: "Consultancy",
  },
  {
    value: "Diabetic",
    label: "Diabetic",
  },
  {
    value: "Cardic",
    label: "Cardiac",
  },
  {
    value: "ENT",
    label: "ENT",
  },
];

let docWSpec;


let bookingObj = {
  patEmail:"",
  docName: "",
  fees: "",
  patName: "",
  date: "",
  time: "",
};

let patEmail = JSON.parse(localStorage.getItem("user"))?.user.email;


let Bookapp = (props) => {
  const initialValues = {
    name: "",
    appFor: "",
    Age: "",
    time: "",
    date: "",
  };

  const classes = patientUseStyles();
  const [dis, setDis] = useState("none");
  const [formDis, setFormDis] = useState("flex");
  const [spec, setSpec] = useState("Consult");

  const handleChange = (event) => {
    setSpec(event.target.value);
  };

  const onSubmit = async (values, prop) => {
    bookingObj.patName = values.name;
    bookingObj.date = values.date;
    bookingObj.time = values.time;
  };

  // appointment booking
  useEffect(async () => {
    if (docWSpec !== undefined) {
      bookingObj.docName = docWSpec.data.docs[0].name;
      bookingObj.fees = 500;

      let booking = await api.bookApp(bookingObj);
    }
  }, [formDis]);

  let handleDoctor = async (e) => {
    // axios request for getting doctor with given specs
    docWSpec = await api.getDocSpec(spec);

    if (e.target.innerText === "CONFIRM BOOKING") {
      setDis("none");
      window.location.reload();
    }
    setFormDis("none");
  };

  useEffect(() => {
    if (props.state === "Book") {
      setDis("flex");
    } else {
      setDis("none");
    }
  }, [props]);

  return (
    <>
      <div style={{ display: `${dis}` }} className={classes.bookApp}>
        <div className={classes.bookAppImg}>
          <img className={classes.bookImg} src={bookingImg}></img>
        </div>
        <div className={classes.appDetailsForm}>
          <div className={classes.crossBtn}>
            <CloseIcon
              onClick={(e) => {
                setDis("none");
                window.location.reload()
              }}
              fontSize="large"
            />
          </div>
          <div className={classes.detailsArea}>
            <Typography
              className={classes.detailsText}
              variant="h4"
              color="initial"
            >
              {formDis == "none"
                ? "Your doctor is here"
                : "Please enter your details"}
            </Typography>
            <Formik initialValues={initialValues} onSubmit={onSubmit}>
              {(props) => (
                <Form className={classes.appformik}>
                  <div
                    style={{ display: `${formDis}` }}
                    className={classes.detailsForm}
                  >
                    <div className={classes.detailsName}>
                      <div className={classes.detailsInfo1}>
                        <Typography
                          className={classes.detailsInfotext}
                          variant="h6"
                          color="initial"
                        >
                          Name
                        </Typography>
                      </div>
                      <div className={classes.detailsInfo1}>
                        <Typography
                          className={classes.detailsInfotext}
                          variant="h6"
                          color="initial"
                        >
                          Appoint For
                        </Typography>
                      </div>
                      <div className={classes.detailsInfo1}>
                        <Typography
                          className={classes.detailsInfotext}
                          variant="h6"
                          color="initial"
                        >
                          Age
                        </Typography>
                      </div>
                      <div className={classes.detailsInfo1}>
                        <Typography
                          className={classes.detailsInfotext}
                          variant="h6"
                          color="initial"
                        >
                          Time
                        </Typography>
                      </div>
                      <div className={classes.detailsInfo1}>
                        <Typography
                          className={classes.detailsInfotext}
                          variant="h6"
                          color="initial"
                        >
                          Date
                        </Typography>
                      </div>
                    </div>
                    <div className={classes.detailsInfo}>
                      <Field
                        as={TextField}
                        className={classes.inputs}
                        id="outlined-name-input"
                        label="Name"
                        type="text"
                        name="name"
                      />
                      <Field
                        as={TextField}
                        className={classes.inputs}
                        id="outlined-select-currency"
                        select
                        label="Select"
                        name="appFor"
                        value={spec}
                        onChange={handleChange}
                      >
                        {specs.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Field>
                      <Field
                        as={TextField}
                        className={classes.inputs}
                        id="outlined-Age-input"
                        label="Age"
                        type="text"
                        name="Age"
                      />
                      <Field
                        as={TextField}
                        className={classes.inputs}
                        id="outlined-name-input"
                        label="Time"
                        type="text"
                        name="time"
                      />
                      <Field
                        as={TextField}
                        className={classes.inputs}
                        id="outlined-name-input"
                        label="Date"
                        type="text"
                        name="date"
                      />
                    </div>
                  </div>
                  <div className={classes.moveBtn}>
                    <Button
                      size="large"
                      variant="contained"
                      type="submit"
                      onClick={(e) => {
                        handleDoctor(e);
                      }}
                      endIcon={<SendIcon />}
                    >
                      {formDis == "none"
                        ? "Confirm booking"
                        : "Get your doctor"}
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>

            <div
              style={{ display: `${formDis == "none" ? "flex" : "none"}` }}
              className={classes.specsDoc}
            >
              <div className={classes.docProfile}>
                <div className={classes.docProImg}>
                  <img src={doctorImg} className={classes.docProImg1} />
                </div>
                <div className={classes.docInfo}>
                  <Typography variant="h4" color="initial">
                    {docWSpec == undefined ? "" : docWSpec.data.docs[0].name}
                  </Typography>
                  <Typography variant="h6" color="initial">
                    23 years of experience
                  </Typography>
                  <Rating
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </div>
              <div className={classes.docDetails}>
                <Typography variant="p" color="initial">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Voluptatibus voluptas laboriosam molestias soluta natus,
                  impedit doloribus corrupti pariatur, doloremque itaque commodi
                  officia asperiores, provident maxime quae iste at quis
                  dolores. Voluptatem possimus culpa consequatur cumque nesciunt
                  aperiam fuga temporibus odit pariatur accusantium molestias
                  quo quidem ab maiores qui id laborum esse beatae, blanditiis
                  fugit exercitationem magnam animi suscipit! Aperiam, dolor.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bookapp;
