import {
    makeStyles,
} from "@mui/styles"


const aboutUseStyles = makeStyles(() => ({


    about: {
        height: "90vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "#4E00DC"
    },

    upperdiv: {
        width: "100%",
        height: "40%",

        display: "flex",
    },
    makeApp: {
        height: "100%",
        width: "25%",
        display: "flex",
        flexDirection: "column",
    },
    iconU: {
        width: "100%",
        height: "30%",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "5rem"
    },
    headU: {
        height: "20%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    textU: {
        width: "100%",
        height: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: 'center'

    },
    choosePack: {
        height: "100%",
        width: "25%",
        display: "flex",
        flexDirection: "column",
    },
    chooseSpec: {
        height: "100%",
        width: "25%",
        display: "flex",
        flexDirection: "column",
    },
    getReport: {
        height: "100%",
        width: "25%",
        display: "flex",
        flexDirection: "column",
    },

    lowerdiv: {
        width: "100%",
        height: "60%",
        display: "flex",
    },

    lowerphoto: {
        height: "100%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    lowerinfo: {
        height: "100%",
        width: "50%",
        display: "flex",
        flexDirection: "column"
    },
    lowerinfo1: {
           height:"33.4%",
           width:"100%",
           display:"flex",
    },
    lowerinfo2:{
        width:"50%",
        height:"100%",
        display:"flex"
    },
    infoicon:{
       width:"40%",
       height:"100%",
       display:"flex",
       justifyContent:'center',
       alignItems:'center',
       color:"white"
    },
    infotext:{
        width:"60%",
        height:"100%",
        display:"flex",
        flexDirection:"column",
    },
    infoBigTxt:{
      width:"100%",
      height:"40%",
      display:'flex',
      justifyContent:"center",
      alignItems:"center"
    },
    infoSmallTxt:{
        width:"100%",
        height:"60%",
        textAlign:'center',
        display:'flex',
        justifyContent:"center",
        alignItems:"center"
    },

    imgtag: {
        height: "80%",
        marginTop: "6rem"
    }


}))


export default aboutUseStyles;