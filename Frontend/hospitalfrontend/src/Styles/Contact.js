import {
    makeStyles
} from "@mui/styles"

const contactUseStyles = makeStyles(() => ({

    messageDiv: {
        height: "90vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    childmassa: {
        height: "65%",
        width: "50%",
        border: "1px solid black",
        borderRadius: "2rem",
        display: "flex",
        flexDirection: "column"
    },

    formtext: {
        width: "100%",
        height: "30%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    formmessage: {
        width: "100%",
        height: "70%",
        display: "flex",
        flexDirection: "column"
    },
    forminputs: {
        height: "80%",
        width: "100%",
        display: "flex",
    },
    formContacts: {
        height: "100%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: 'center'
    },
    formuser: {
        height: "100%",
        width: "50%",
    },

    frombtn: {
        height: "20%",
        width: "100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },

    formdetails: {
        width: "100%",
        display: "flex",
        justifyContent: "center"
    }

}))

export default contactUseStyles