import {
    makeStyles
} from "@mui/styles"


const patientUseStyles = makeStyles(() => ({
    div1: {
        height: "10vh",
        fontFamily: "cursive"
    },

    nav: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "1.4rem"
    },

    heading: {
        width: "75%",
    },

    info: {
        width: "25%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
    },

    div2: {
        height: "90vh",
        width: "100%",
        display: "flex",
        position: "relative"
    },

    highlight: {
        background: "#66A1FF!important"
    },

    breadboard: {
        height: "100%",
        width: "30%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    board: {
        display: "flex",
        flexDirection: "column",
        width: "70%",

    },
    bread: {
        borderRadius: "0.5rem!important",
        padding: "1rem!important",
        fontSize: "1rem!important",
        fontFamily: "cursive",
        letterSpacing: "2px!important"
    },

    funtions: {
        height: "100%",
        width: "70%",
        display: "flex",
        flexDirection: "column"
    },

    text: {
        width: "100%",
        height: "10%",
        textAlign: "right",
        marginRight: "10px",
        marginLeft: "-1rem"
    },

    chaingingComponent: {
        width: "100%",
        height: "90%",
        display: "flex",
    },

    booking: {
        height: "100%",
        width: "50%"

    },

    bookingFeatures: {
        height: "80%",
        width: "100%",
        display: 'flex',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },

    icon: {
        fontSize: "2rem!important",
        height: "20%!important",
        width: "100%!important"
    },

    bookingHistory: {
        height: "100%",
        width: "50%",
    },

    // for doctor dashboard
    dbookingHistory: {
        height: "100%",
        width: "80%",
    },

    bookingLink: {
        textDecoration: "none!important"
    },
    bookApp: {

        
        background: "#f2f3f4",
        boxShadow: "10px 5px 5px lightgrey",
        position: "absolute",
        zIndex: "20",
        height: "75%",
        width: "60%",
        top: "15%",
        right: "20%",
        display: "flex"
        
    },

    bookAppImg: {
        height: "100%",
        width: "50%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    bookImg: {
        width: "90%",
        height: "80%",
    },

    appDetailsForm: {
        height: "100%",
        width: "50%",
        // border:"1px solid red",
        display: "flex",
        flexDirection: "column",
    },

    crossBtn: {
        width: "100%",
        height: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end"
    },
    detailsArea: {
        width: "100%",
        height: "85%",
        display: "flex",
        flexDirection: "column"
    },

    detailsText: {
        width: "100%",
        height: "15%",
        fontSize: "2rem!important",
        display: "flex",
        alignItems: "center",
        fontFamily: "cursive!important"
    },
 
    appformik:{
        width: "100%",
        height: "90%",
    },

    detailsForm: {
        width: "100%",
        height: "100%",
        display: "flex",
    },

    detailsName: {
        height: "100%",
        width: "40%",
        display: "flex",
        flexDirection: "column",
    },
    detailsInfo1: {
        width:"100%",
        height:"20%",
        display: "flex",
        alignItems: "center",
    },

    detailsInfotext:{
        fontFamily: "cursive!important",
        fontSize:"1.4rem"
    },

    detailsInfo: {
        height: "100%",
        width: "60%",
        display: "flex",
        flexDirection: "column"
    },
    inputs: {
        height: "20%",
    },

    moveBtn: {
        width: "100%",
        height: "5%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "center"
    },

    specsDoc:{
        width: "100%",
        height: "90%",
        display: "flex",
        flexDirection:"column"
    },
    docProfile:{
        width:"100%",
        height:"60%",
        display:"flex"

    },
    docProImg:{
        width:"45%",
        height:"100%",

    },
    docProImg1:{
        width:"90%",
        height:"90%",
    },
    docInfo:{
        width:"55%",
        height:"100%",
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    docDetails:{
        width:"100%",
        height:"40%",
        textAlign:"center"
    }


}))

export default patientUseStyles;