const mongoose = require('mongoose');

const User = mongoose.model('userDetails');


module.exports.register = (req,res,next) => {
    
console.log("register funtion is working");

// create user object 

var user = new User();

user.fullName = req.body.fullName;
user.email = req.body.email;

user.password = req.body.password;

// save user details 

user.save((err,doc) => {
    if(!err){
        res.send(doc);
    }else{
        if (err.code == 11000)
            res.status(422).send(['Duplicate email adrress found.']);
        else
            return next(err);
    }
});

}

module.exports.authenticate = (req, res, next)=>{
    //call for the passport Athentication
    passport.authenticateO('local', (err,user,info)=>{
        // error from passport middleware
        if(err) return res.status(400).json(err);
        // registered user
        else if(user) return res.status(200).json({"token": user.generateJwt()});
        // unknown user or worng password
        else return res.status(404)

    })(req, res);
}