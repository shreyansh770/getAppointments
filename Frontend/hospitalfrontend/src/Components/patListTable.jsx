import React from "react";
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
let PatListTable = (props) => {
  const classes = adminUseStyles();
  const [patArr, setPatArr] = useState([]);

  useEffect(async () => {
    if (props.state == "Patlist") {
      // fetching all the doctors from database
      let allPat = await api.getAllPat();
      setPatArr(allPat?.data.pats);
    }
  }, [props.state]);



  let handleChange = async (e) => {
    let allPat = await api.getAllPat();
    let arr = allPat?.data.pats.filter((content) => {
      return content.name.includes(e.target.value);
    });

    setPatArr(arr);
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
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Contact</TableCell>
                  <TableCell align="right">Appointments</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {patArr.map((doc) => (
                  <TableRow key={doc._id}>
                    <TableCell sx={{ fontSize: "1.2rem", width: "15%" }}>
                      {doc.name}
                    </TableCell>
                    <TableCell sx={{ width: "25%" }} align="right">
                      {doc.email}
                    </TableCell>
                    <TableCell align="right">{doc.phNo}</TableCell>
                    <TableCell align="right">
                      {doc.list.length != 0
                        ? doc.list.length
                        : "No Appointments"}
                    </TableCell>
                    <TableCell align="right">

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

export default PatListTable;
