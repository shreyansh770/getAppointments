const jwt = require('jsonwebtoken');
const medicalModel = require('../model/medicalModel');
const {
    JWT_KEY
} = require('../secrets');


module.exports.protectRoute =
    function protectRoute(req, res, next) {

        try {

            console.log("Protect Route");

            let token =req.headers.authorization.split(" ")[1]
            // let token = req.cookies.login;

            if (token) {
                let isVerified = jwt.verify(token, JWT_KEY);

                if (isVerified) {
                    req.aId = isVerified.id
                    next();
                } else {
                    res.json({
                        message: "Please log in"
                    })
                }
            }



        } catch (error) {
            res.status(500).json({
                message: error.message
            })
        }

    }

module.exports.isAuth =
    function isAuth(roles) {

        return async function (req, res, next) {

            let {
                aId
            } = req


            try {

                

                let user = await medicalModel.find({
                    email: aId
                });

                if (user) {
           
                    console.log("isAuth middleware reached");
                    let isAuthorized = roles.includes(user[0].role);
                    if (isAuthorized) {
                        next();
                    } else {
                        res.json({
                            message: "User not allowed for following actions"
                        })
                    }
                }


            } catch (error) {
                res.status(500).json({
                    message: error.message
                })
            }
        }
    }