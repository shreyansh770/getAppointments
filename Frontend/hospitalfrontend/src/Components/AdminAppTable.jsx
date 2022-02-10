import adminUseStyles from "../Styles/Admin";
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
  Button,
  TextField,
} from "@mui/material";
import { useState, useEffect } from "react";
import * as api from "../axiosReq";
let AdminAppTable = (props) => {
  const classes = adminUseStyles();
  const [appArr, setAppArr] = useState([]);

  useEffect(async () => {
    if (props.state == "History") {
      // fetching all the doctors from database
      let allApp= await api.getAllApps();
      setAppArr(allApp?.data.appList);
    }
  }, [props.state]);

  let handleChange = async (e)=>{
    
      let allApp = await api.getAllApps();
      let arr = allApp?.data.appList.filter((content)=>{
        return content.patName.includes(e.target.value)
      })

      setAppArr(arr)
  }


  return (
    <>
      <div className={classes.dlist}>
        <div className={classes.searchbar}>
          <TextField
            className={classes.searchfield}
            label="Enter Name"
            id="fullWidth"
            onChange={(e)=>{handleChange(e)}}
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
                  <TableCell align="right">Patient Email</TableCell>
                  <TableCell align="right">Contact</TableCell>
                  <TableCell align="right">Doctor Name</TableCell>
                  <TableCell align="right">Time</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Fees</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {appArr.map((app) => (
                  <TableRow key={app._id}>
                    <TableCell sx={{ fontSize:"1.2rem" , width:"10%" }} >{app.patName}</TableCell>
                    <TableCell sx={{  width:"15%" }} align="right">---</TableCell>
                    <TableCell align="right"></TableCell>
                    <TableCell align="right">
                       {app.docName}
                    </TableCell>
                    <TableCell align="right">
                       {app.time}
                    </TableCell>
                    <TableCell align="right">
                       {app.date}
                    </TableCell>
                    <TableCell align="right">
                       {app.fees}
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