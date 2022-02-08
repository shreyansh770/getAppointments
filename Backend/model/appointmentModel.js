const mongoose = require('mongoose');

let {
    db_link
} = require("../secrets");

mongoose.connect(db_link, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => {
    console.log("appointment model connected");
}).catch((err) => {
    console.log(err);
})


const appSchema = new mongoose.Schema({
    patName:{
        type: String,
        required: true
    },

    docName: {
        type: String,
        required: true
    },

    fees: {
        type: String
    },

    time: {
        type: String
    },

    date: {
        type: String,
    }


})

const appModel = mongoose.model("appModel", appSchema);

module.exports = appModel;