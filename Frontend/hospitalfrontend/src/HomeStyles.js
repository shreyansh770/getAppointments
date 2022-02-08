import {
    makeStyles
} from "@mui/styles"



const useStyles = makeStyles(() => ({

    div1: {
        height:"10vh",
        fontFamily:"cursive"
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
        justifyContent: "space-evenly"
    },

    authConatiner :{
        width:"100vw",
        height:"90vh",
        display:"flex",
        position:"relative"
    },

    loginImg:{
       width:"50%",
       height:"100%"
    },

    img:{
        height:"80%"
    },

    formik:{
       height:"100%",
       width:"100%"
    },

    loginContainer:{
        width:"100%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },

    login:{

        width:"70%",
        height:"80%",
        display:"flex",
        // border:"1px solid black",
        flexDirection:"column"

    },

    text:{
      width:"100%",
      height:"15%",
      display:"flex!important"
    },

    text1:{
       width: "70%"
    },

    text2:{
        width:"30%",
        paddingTop: "1rem"
    },

    input:{
        width: "75%!important",
        height: "80%",
        display: "flex!important",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },

    inputs:{
        width:"100%",
        marginBottom:"2.5rem!important"
    },

    btns:{
        width:"100%",
        height:"5%"
    },

    waves:{
        position:"absolute",
        bottom:"0px",
        zIndex:"-1"
    }
}))

export default useStyles;