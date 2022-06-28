import { React, useState } from "react";
import { useNavigate } from "react-router";
import { Typography, CssBaseline, AppBar, Toolbar } from "@mui/material";
import {
  FaStethoscope,
  FaWheelchair,
  FaPlus,
  FaHeartbeat,
} from "react-icons/fa";
import dImg from "../Img/docImg.png";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import aboutUseStyles from "../Styles/About";
import useStyles from "../HomeStyles";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import DescriptionIcon from "@mui/icons-material/Description";

let About = () => {
  let classes = aboutUseStyles();
  let classes1 = useStyles();
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
                  onClick={() => navigate("/", { replace: true })}
                >
                  Home
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

        <div className={classes.about}>
          <div className={classes.upperdiv}>
            <div className={classes.makeApp}>
              <div className={classes.iconU}>
                <DownloadDoneIcon fontSize="5rem" />
              </div>
              <div className={classes.headU}>
                <Typography variant="h5" color="white">
                  Make an appointment
                </Typography>
              </div>
              <div className={classes.textU}>
                <Typography variant="p" color="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  repudiandae recusandae amet laborum, cum facilis maxime
                  dolores, hic illo rerum quasi soluta perferendis consectetur
                  pariatur, delectus nam minima. Atque, dolor!
                </Typography>
              </div>
            </div>
            <div className={classes.choosePack}>
              <div className={classes.iconU}>
                <MenuBookIcon fontSize="5rem" />
              </div>
              <div className={classes.headU}>
                <Typography variant="h5" color="white">
                  Choose your package
                </Typography>
              </div>
              <div className={classes.textU}>
                <Typography variant="p" color="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  repudiandae recusandae amet laborum, cum facilis maxime
                  dolores, hic illo rerum quasi soluta perferendis consectetur
                  pariatur, delectus nam minima. Atque, dolor!
                </Typography>
              </div>
            </div>
            <div className={classes.chooseSpec}>
              <div className={classes.iconU}>
                <LocalPharmacyIcon fontSize="5rem" />
              </div>
              <div className={classes.headU}>
                <Typography variant="h5" color="white">
                  Help from specialist
                </Typography>
              </div>
              <div className={classes.textU}>
                <Typography variant="p" color="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  repudiandae recusandae amet laborum, cum facilis maxime
                  dolores, hic illo rerum quasi soluta perferendis consectetur
                  pariatur, delectus nam minima. Atque, dolor!
                </Typography>
              </div>
            </div>
            <div className={classes.getReport}>
              <div className={classes.iconU}>
                <DescriptionIcon fontSize="5rem" />
              </div>
              <div className={classes.headU}>
                <Typography variant="h5" color="white">
                  Get diagnosed report
                </Typography>
              </div>
              <div className={classes.textU}>
                <Typography variant="p" color="white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                  repudiandae recusandae amet laborum, cum facilis maxime
                  dolores, hic illo rerum quasi soluta perferendis consectetur
                  pariatur, delectus nam minima. Atque, dolor!
                </Typography>
              </div>
            </div>
          </div>
          <div className={classes.lowerdiv}>
            <div className={classes.lowerphoto}>
              <img src={dImg} alt="" className={classes.imgtag} />
            </div>
            <div className={classes.lowerinfo}>
              <div className={classes.lowerinfo1}>
                <div className={classes.lowerinfo2}>
                  <div className={classes.infoicon}>
                    <FaStethoscope fontSize="5rem" />
                  </div>
                  <div className={classes.infotext}>
                    <div className={classes.infoBigTxt}>
                      <Typography variant="h6" color="white">
                        Health checkup
                      </Typography>
                    </div>
                    <div className={classes.infoSmallTxt}>
                      <Typography variant="p" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className={classes.lowerinfo2}>
                  <div className={classes.infoicon}>
                    <FaWheelchair fontSize="5rem" />
                  </div>
                  <div className={classes.infotext}>
                    <div className={classes.infoBigTxt}>
                      <Typography variant="h6" color="white">
                        Nursing Services
                      </Typography>
                    </div>
                    <div className={classes.infoSmallTxt}>
                      <Typography variant="p" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.lowerinfo1}>
                <div className={classes.lowerinfo2}>
                  <div className={classes.infoicon}>
                    <FaPlus fontSize="5rem" />
                  </div>
                  <div className={classes.infotext}>
                    <div className={classes.infoBigTxt}>
                      <Typography variant="h6" color="white">
                        Pharmacy
                      </Typography>
                    </div>
                    <div className={classes.infoSmallTxt}>
                      <Typography variant="p" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className={classes.lowerinfo2}>
                  <div className={classes.infoicon}>
                    <FaHeartbeat fontSize="5rem" />
                  </div>
                  <div className={classes.infotext}>
                    <div className={classes.infoBigTxt}>
                      <Typography variant="h6" color="white">
                        Health checkup
                      </Typography>
                    </div>
                    <div className={classes.infoSmallTxt}>
                      <Typography variant="p" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.lowerinfo1}>
                <div className={classes.lowerinfo2}>
                  <div className={classes.infoicon}>
                    <FaStethoscope fontSize="5rem" />
                  </div>
                  <div className={classes.infotext}>
                    <div className={classes.infoBigTxt}>
                      <Typography variant="h6" color="white">
                        Health checkup
                      </Typography>
                    </div>
                    <div className={classes.infoSmallTxt}>
                      <Typography variant="p" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </Typography>
                    </div>
                  </div>
                </div>
                <div className={classes.lowerinfo2}>
                  <div className={classes.infoicon}>
                    <FaStethoscope fontSize="5rem" />
                  </div>
                  <div className={classes.infotext}>
                    <div className={classes.infoBigTxt}>
                      <Typography variant="h6" color="white">
                        Health checkup
                      </Typography>
                    </div>
                    <div className={classes.infoSmallTxt}>
                      <Typography variant="p" color="white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit.
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
