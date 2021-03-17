const mongoose = require('mongoose');
const user = require('../models/user');

const signIn = async (req, res, next) => {

    // We need to check if there's any user in the db with that credentials
    
    // Email and Pa ssword are enough for now,

    /*  */

    try {

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