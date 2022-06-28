import adminUseStyles from "../Styles/Admin";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import * as api from "../axiosReq";
import FileBase64 from "react-file-base64";
let AdminAppTable = (props) => {
  const classes = adminUseStyles();
  const [appArr, setAppArr] = useState([]);
  const [loading,setLoading] = useState(false)

  let uploadFile = async (e) => {
    let str = e.base64
    let name = e.value
    let res = await api.reportUpload(str,name);
    alert("Report uploaded")
  };

  useEffect(async () => {
    if (props.state == "History") {
      // fetching all the doctors from database
      let allApp = await api.getAllApps();
      setAppArr(allApp?.data.appList);
    }
  }, [props.state]);

  let handleDelApp = async (e) => {
    let deleteApp = await api.delApp(e.target.className.split(" ")[6]);
    window.location.reload(false);
    alert("Appointment deleted");
  };

  let handleChange = async (e) => {
    let allApp = await api.getAllApps();
    let arr = allApp?.data.appList.filter((content) => {
      return content.patName.includes(e.target.value);
    });

    setAppArr(arr);
  };

  return (
    <>
      <div className={classes.dlist}>
        <div className={classes.searchbar}>
          <TextField
            className={classes.searchfield}
            label="Enter Name"
            id="fullWidth"
            onChange={(e) => {
              handleChange(e);
            }}
          />
        </div>
        <div className={classes.docTable}>
          <TableContainer className={classes.tc} component={Paper}>
            <Table
              sx={{ minWidth: 650, height: "100%" }}
              aria-label="caption table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Patient Name</TableCell>
                  <TableCell align="right">Doctor Name</TableCell>
                  <TableCell align="right">Time</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Fees</TableCell>
                  <TableCell align="right">Cancel</TableCell>
                  <TableCell align="center">Upload Reports</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appArr.map((app) => (
                  <TableRow key={app._id}>
                    <TableCell sx={{ fontSize: "1.2rem", width: "14.1%" }}>
                      {app.patName}
                    </TableCell>
                    <TableCell align="right">{app.docName}</TableCell>
                    <TableCell align="right">{app.time}</TableCell>
                    <TableCell align="right">{app.date}</TableCell>
                    <TableCell align="right">{app.fees}</TableCell>
                    <TableCell align="right">
                      <Button
                        onClick={(e) => {
                          handleDelApp(e);
                        }}
                        className={app._id}
                        variant="contained"
                        color="error"
                      >
                        Cancel
                      </Button>
                    </TableCell>
                    <TableCell align="right">
                      <Button >
                        <div>
                          <FileBase64
                            type="file"
                            name="image"
                            onDone={(e) => {
                              e.value = app.patName
                              uploadFile(e);
                            }}
                          ></FileBase64>
                        </div>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default AdminAppTable;
