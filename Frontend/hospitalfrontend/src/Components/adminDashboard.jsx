import adminUseStyles from "../Styles/Admin";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleIcon from "@mui/icons-material/People";
import AddBoxIcon from "@mui/icons-material/AddBox";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { Typography, Link } from "@mui/material";

let AdminDashboard = (props) => {
  const classes = adminUseStyles();

  return (
    <>
      <div className={classes.admincp}>
        <div className={classes.top2}>
          <div className={classes.doclist}>
            <PeopleAltIcon className={classes.icon} />
            <Typography variant="h4" height="6%" className={classes.docText}>
              Doctor List
            </Typography>
            <Link
              onClick={() => {
                props.setState("Doclist");
              }}
              height="7%"
              className={classes.bookingLink}
            >
              View Doctors
            </Link>
          </div>
          <div className={classes.ppllist}>
            <PeopleIcon className={classes.icon} />
            <Typography variant="h4" height="6%" className={classes.docText}>
              Patient List
            </Typography>
            <Link
              onClick={() => {
                props.setState("Patlist");
              }}
              height="7%"
              className={classes.bookingLink}
            >
              View Patients
            </Link>
          </div>
        </div>
        <div className={classes.bottom2}>
          <div className={classes.applist}>
            <FactCheckIcon className={classes.icon} />
            <Typography variant="h4" height="6%" className={classes.docText}>
              Appointments
            </Typography>
            <Link
              onClick={() => {
                props.setState("History");
              }}
              height="7%"
              className={classes.bookingLink}
            >
              View All Appointments
            </Link>
          </div>
          <div className={classes.adoc}>
            <AddBoxIcon className={classes.icon} />
            <Typography variant="h4" height="6%" className={classes.docText}>
              Manage Doctor
            </Typography>
            <Link
              onClick={() => {
                props.setState("Adddoc");
              }}
              height="7%"
              className={classes.bookingLink}
            >
              Add Doctor
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
