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
let DocListTable = (props) => {
  const classes = adminUseStyles();
  const [docArr, setDocArr] = useState([]);

  console.log(props);

  useEffect(async () => {
    if (props.state == "Doclist") {
      // fetching all the doctors from database
      let allDoc = await api.getAllDoc();
      setDocArr(allDoc?.data.docs);
    }
  }, [props.state]);

  let handleChange = async (e)=>{
    
      let allDoc = await api.getAllDoc();
      let arr = allDoc?.data.docs.filter((content)=>{
        return content.name.includes(e.target.value)
      })

      setDocArr(arr)
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
                  <TableCell>Doctor Name</TableCell>
                  <TableCell align="right">Email</TableCell>
                  <TableCell align="right">Contact</TableCell>
                  <TableCell align="right">Specilization</TableCell>
                  <TableCell align="right">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {docArr.map((doc) => (
                  <TableRow key={doc._id}>
                    <TableCell sx={{ fontSize:"1.2rem" , width:"10%" }} >{doc.name}</TableCell>
                    <TableCell sx={{  width:"25%" }} align="right">{doc.email}</TableCell>
                    <TableCell align="right">{doc.phNo}</TableCell>
                    <TableCell align="right">
                      {doc.specs ? doc.specs : "No info"}
                    </TableCell>
                    <TableCell align="right">
                      <Button onClick={()=>{ props.setState("Remdoc")  }} variant="outlined" color="error">
                        Remove
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

export default DocListTable;
