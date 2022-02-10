import { Field, Form, Formik } from "formik";
import adminUseStyles from "../Styles/Admin";
import { TextField, MenuItem, Button } from "@mui/material";
import clsx from "clsx";
import * as api from "../axiosReq";


const initialValues = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "",
    fees: "",
    specs: "",
    phNo: "",
  };

let AddDoctor = (pops) => {


  const classes = adminUseStyles();

  const onSubmit = async (values, prop) => {
         let info = await api.addDoc(values);
         alert("New Doctor added")
         window.location.reload();
  };

  return (
    <>
      <div className={classes.addDocComp}>
        <div className={classes.addDocLables}>
          <div className={classes.docInfo} id={classes.docName}>
            Doctor Name:
          </div>
          <div className={classes.docInfo} id={classes.docEmail}>
            Email:
          </div>
          <div className={classes.docInfo} id={classes.docPass}>
            Password:
          </div>
          <div className={classes.docInfo} id={classes.doccp}>
            Confirm Password:
          </div>
          <div className={classes.docInfo} id={classes.docrole}>
            Role:
          </div>
          <div className={classes.docInfo} id={classes.docfees}>
            Fees:
          </div>
          <div className={classes.docInfo} id={classes.docspecs}>
            Specilization:
          </div>
          <div className={classes.docInfo} id={classes.doccn}>
            Phone No:
          </div>
          <div className={classes.btn}></div>
        </div>

        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {(props) => (
            <Form className={classes.appformik} >
              <div className={classes.addDocInputs}>
                <Field
                  as={TextField}
                  className={clsx(classes.dName, classes.dInput)}
                  id="outlined-name-input"
                  label="Enter doc's name"
                  type="text"
                  name="name"
                />
                <Field
                  as={TextField}
                  className={clsx(classes.dEmail, classes.dInput)}
                  id="outlined-name-input"
                  label="Enter email"
                  type="email"
                  name="email"
                />
                <Field
                  as={TextField}
                  className={clsx(classes.dPassword, classes.dInput)}
                  id="outlined-name-input"
                  label="Password"
                  type="password"
                  name="password"
                />
                <Field
                  as={TextField}
                  className={clsx(classes.dCpass, classes.dInput)}
                  id="outlined-name-input"
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                />
                <Field
                  as={TextField}
                  className={clsx(classes.dRole, classes.dInput)}
                  id="outlined-name-input"
                  label="Role"
                  type="text"
                  name="role"
                 />
                <Field
                  as={TextField}
                  className={clsx(classes.dFees, classes.dInput)}
                  id="outlined-name-input"
                  label="Fees"
                  type="text"
                  name="fees"
                />
                <Field
                  as={TextField}
                  className={clsx(classes.dFees, classes.dInput)}
                  id="outlined-select-currency"
                  select
                  label="Specilization"
                  name="specs"
                >
                  <MenuItem value="Consult">Consult</MenuItem>
                  <MenuItem value="Diabetic">Diabetic</MenuItem>
                  <MenuItem value="Cardic">Cardic</MenuItem>
                  <MenuItem value="ENT">ENT</MenuItem>
                </Field>
                <Field
                  as={TextField}
                  className={clsx(classes.dPhno, classes.dInput)}
                  id="outlined-name-input"
                  label="Phone No"
                  type="number"
                  name="phNo"
                />

                <div className={classes.createBtn}>
                  <Button
                    type="submit"
                    sx={{ height: "100%", width: "50%" }}
                    variant="contained"
                  >
                    ADD DOCTOR
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default AddDoctor;
