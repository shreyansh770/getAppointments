import {
    makeStyles
} from "@mui/styles"

let doctorUseStyles = makeStyles(()=>({
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

    
    dchaingingComponent: {
        width: "100%",
        height: "90%",
    },




}))

export default doctorUseStyles;