const express = require('express');
const jwt = require('jsonwebtoken');
const medicalModel = require('../model/medicalModel');
const {
    JWT_KEY
} = require('../secrets');

const authRouter = express.Router();

authRouter.route("/signUp").post(signUp)
authRouter.route("/signIn").post(signIn)
authRouter.route("/signOut").get(signOut)


async function signUp(req, res) {
    try {

        let userObj = req.body;

        let user = await medicalModel.create(userObj);

        let payload = user.email;

        const token = jwt.sign({
            id: payload
        }, JWT_KEY)

        // res.cookie('login', token, {
        //     httpOnly: true
        // })

        res.json({
            message: "User Signed up",
            user: user,
            token:token
        })

    } catch (error) {

        res.status(500).json({
            message: error.message
        })

    }
}

async function signIn(req, res) {
    try {

        let userObj = req.body;

        let user = await medicalModel.findOne({
            email: userObj.email
        })

        if (user.password == userObj.password) {

            let payload = user.email;

            const token = jwt.sign({
                id: payload
            }, JWT_KEY)


            // in case with frontend we will send token from backend
            // as res.json and frontend will store it in req.headers.authorization
            // and access the same way in backend

            // res.cookie('login', token, {
            //     httpOnly: true
            // })

            res.json({
                message: "User logged in",
                user: user,
                token:token
            })
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

async function signOut(req, res) {
    try {

        if(req.cookie.login){
            res.clearCookie('login');
            res.send("User logged out")
        }

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


module.exports = authRouter;