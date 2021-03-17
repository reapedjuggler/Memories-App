const mongoose = require('mongoose');
const user = require('../models/user');
const bcrypt = require('bcrypt');

const signIn = async (req, res, next) => {

    // We need to check if there's any user in the db with that credentials
    
    // Email and Password are enough for now,

    /*  */

    try {

        const {email, password} = req.body;   
        const isEmailRegisteredResp = await user.findOne({email: email});

        if (isEmailRegisteredResp === false) {
             return res.status(404).json({message: "Provided Email doesn't exist"});
        }

        else {
            
            const myPlaintextPassword = password;   // password

            const isPasswordCorrect = bcrypt.compare(myPlaintextPassword, isEmailRegisteredResp.password);

            // const isPasswordRegistered =  ;

        }

    }

    catch (err) {
        console.log(err, "\n--------------------\nError in server signIn");
    }

};

const signUp = async (req, res, next) => {

    try {

    } catch (err) {
        console.log(err, "\n--------------------\nError in server signUp");
    }

};

exports = module.exports = {
    signIn,
    signUp
}