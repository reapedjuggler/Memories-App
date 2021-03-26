const mongoose = require('mongoose');
const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const signIn = async (req, res, next) => {

    // We need to check if there's any user in the db with that credentials
    
    // Email and Password are enough for now,

    /*  */


    try {

        // console.log("Welcome to SignIn -----------\n");

        console.log(req.body, " Iam in signin");

        const {email, password} = req.body;   
 
        const isEmailRegisteredResp = await user.findOne({email: email});

        console.log("\n---------------------\n" , isEmailRegisteredResp, "\n--------------------\n");

        if (isEmailRegisteredResp.length === 0) {
        
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

    // console.log("Welcome to SignUp -----------\n");

    // console.log(req.body, " Iam in signup");

    try {

        const {email, password, firstName, lastName, cnfpassword} = req.body;

        // Check if this profile already exist or not
        
        const isAlreadyReg = await user.find({email: email});

        // console.log(isAlreadyReg, " Am i reg\n");

        if (isAlreadyReg.length) {
            console.log("User has already registered, dont waste your time!!\n\n");
            return res.status(409).json("Another user exist with the given email id, Kindly Log In if you're already registered");
        }

        if (password !== cnfpassword) return res.status(404).json({message: "Password doesn't match"});

        // console.log(" Password matched\n");


        // Arigato Stack Overflow for updating there results

        /* 
            Just in Case : 
            Earlier bcrypt.hash didnt used to return a promise so you need to it manually but
            now they have updated the library and you can use them as a promise

        */

        const saltRounds = 12;       // A parameter for the creation of hash;

        const hashPassword = await bcrypt.hash(password, saltRounds)

        const data = {
            email: email,
            name: firstName + " " + lastName,
            password: hashPassword,
        };

        const resp = await user.create(data);  // Pro -- Tip:  When we create a new document we use .create otherwise we use .save to update

        console.log(resp, " \n-------------\n Iam the new resp\n\n")

        const privateKey = process.env.key;

        const token = jwt.sign({email: resp.email, id: resp._id}, privateKey, {expiresIn: '1h'});

        console.log("yo! success, from rags to riches");

        // 201 stands for the request has been created genrally used for post request

        res.status(201).json({resp, token });

    } catch (err) {
        console.log(err, " \n-----------\nIam err in signup\n\n");
        res.status(500).json({message: "F! Something Went Wrong, I'ma sleep Again"});
    }

};

exports = module.exports = {
    signIn,
    signUp
}