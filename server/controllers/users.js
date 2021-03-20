const mongoose = require('mongoose');
const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signIn = async (req, res, next) => {

    // We need to check if there's any user in the db with that credentials
    
    // Email and Password are enough for now,

    /*  */

    try {

        const {email, password} = req.body;   
        const isEmailRegisteredResp = await user.findOne({email: email});

        if (isEmaiu8lRegisteredResp.length === 0) {
        
            return res.status(404).json({message: "Provided Email doesn't exist"});
        
            }   else {

            const isPasswordCorrect = bcrypt.compare(password, isEmailRegisteredResp.password);

            // const isPasswordRegistered =  ;

            if (isPasswordCorrect === false) {
            
                return res.status(404).json({message: "Invalid Credentials, Please Try again"});
            
            } else {
                // Now check for jwt  

                const privateKey = process.env.key;

                const token = jwt.sign({email: isEmailRegisteredResp.email, id: isEmailRegisteredResp._id}, privateKey, {expiresIn: '1h'});

                // Only now We should to redirect him to the home page
                return res.status(200).json({resp: isEmailRegisteredResp, token: token});
            }

        }

    }

    catch (err) {
        console.log(err, "\n--------------------\nError in server signIn");
        res.status(500).json({message: "F! Something Went Wrong, I'ma sleep"});
    }

};

const signUp = async (req, res, next) => {

    try {

        const {email, password, firstName, lastName, cnfPassword} = req.body;

        // Check if this profile already exist or not
        
        const isAlreadyReg = await user.find({email: email});

        if (isAlreadyReg === false) {
            console.log("User has already registered, dont waste your time!!\n\n");
            res.status(409).send("Another user exist with the given email id, Kindly Log In if you're already registered");
        }

        if (password !== cnfPassword) return res.status(404).json({message: "Password doesn't match"});


        // Arigato Stack Overflow for updating there results

        /* 
            Just in Case : 
            Earlier bcrypt.hash didnt used to return a promise so you need to it manually but
            now they have updated the library and you can use them as a promise

        */

        const hashPassword = await bcrypt.hash(myPlaintextPassword, saltRounds)

        const data = new user({
            email: email,
            firstName: firstName,
            lastName: lastName,
            password: hashPassword,
        });

        
        const resp = await data.create();  // Pro -- Tip:  When we create a new document we use .create otherwise we use .save to update

        const token = jwt.sign({email: resp.email, id: resp._id}, privateKey, {expiresIn: '1h'});

        console.log("yo! success, from rags to riches");

        res.status(200).json({user: resp, token: token});

    } catch (err) {
        res.status(500).json({message: "F! Something Went Wrong, I'ma sleep Again"});
    }

};

exports = module.exports = {
    signIn,
    signUp
}