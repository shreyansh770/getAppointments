import {
    makeStyles
} from "@mui/styles"


const adminUseStyles = makeStyles(() => ({
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
        display: "flex"
    },

    admincp: {
        height: "100%",
        width: "100%",
       
        display: "flex",
        flexDirection: "column"
    },

    top2: {
        
        height: "50%",
        width: "100%",
        display:"flex",
    },

    doclist:{
     height:"100%",
     width:"50%",
     display:"flex",
     flexDirection:"column",
     justifyContent:"center",
     alignItems:"center"
    },

    icon: {
        fontSize: "4rem!important",
        height: "40%!important",
        width: "100%!important"
    },
    bookingLink: {
        textDecoration: "none!important",
        marginTop:"1rem!important"
    },

    ppllist:{
        height:"100%",
        width:"50%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },

    bottom2: {
        height: "50%",
        width: "100%",
        display:"flex",
    },

    applist:{
        height:"100%",
        width:"50%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    adoc:{
        height:"100%",
        width:"50%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },

    dlist:{
        height:"100%",
        width:"100%",
        display:"flex",
        flexDirection:"column",
    },

    searchbar:{
        width:"100%",
        height:"10%",
        display:"flex",
        alignItems:"center"
    },

    searchfield:{
        width:"40%"
    },

    docTable:{
        width:"100%",
        height:"90%",
    },

    tc:{
        height:"100%!important"
    }

}))

export default adminUseStyles;