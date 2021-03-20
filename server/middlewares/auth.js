const jwt = require('jsonwebtoken');

const auth = async (req, res, next) => {

    try {

        /* Note */
        // Certainly jwt has three components so 2nd one is the token

        const providedToken = await req.headers.authorization.split(" ")[1];

        const customToken = token.length < 500; // it means its a simple sign up not a google sign up

        let decoded;

        if (providedToken && customToken) {

            // User is valid and its our custom generaterd token because 

            const secret = process.env.key;

            decoded = jwt.verify(token, secret);

            /*
                In this way if we make middleware we can populate our request
                so that we can access it afterwards !!!!!!!

                Suppose for deleting a post we can't simply let a user 
                delete all the post even the ones which he didnt created 
                so we can check if the post was created by that particular user only

            */

            req.userId = decoded.id;

            next();       // if this works fine then give the user the permission to do the required action


        } else {               // Its Google Token 

            decoded = jwt.decode(token);

            req.userId = decoded.sub;    

            next();

        }

    } catch (err) {
        console.log("\n---------------------\n" + err);
    }

};

exports = module.exports = {
    auth,
}