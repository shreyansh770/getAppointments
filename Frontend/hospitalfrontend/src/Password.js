import {
    makeStyles
} from "@mui/styles"

const forgotStyles = makeStyles(() => ({
    forgotPasswordForm: {
        height: "90vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"

    },

    bigDiv: {
        width: "40%",
        height: "50%",
        border: "1px solid black",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: "column"
    },
    bigDivText: {
        width: "100%",
        height: "30%",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    
    formik:{
        height:"100%",
        width:"100%",
     },
    bigDivForm: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center"
    },

    optVerify: {
        width: "40%",
        height: "50%",
        border: "1px solid black",
        borderRadius: "2rem",
        display: "none",
        flexDirection: "column"
    },
    otpText: {
        width: "100%",
        height: "20%",
        display: "flex",
        justifyContent: 'center',
        alignItems: "center"
    },
    otpForm: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: 'space-around',
        alignItems: "center"
    }
}))

export default forgotStyles;