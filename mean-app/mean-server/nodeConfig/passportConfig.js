/*const passport = require('passport');
const localStratagy = require('passport-local');
const mongoose = require('mongoose');

var User = mongoose.model('User');

passport.use(
    new localStratagy({ usernameField: 'email'},(username,password, done)=>{
        User.findOne({ email: username },(err,user) => {
            if(err)
                return done(err);
            // unknown user.
            else if(!user)
                return done( null, false, {message:'Email to registered'});
            // Worng password
            else if(!user.verifyPassword(password))
                return done (null,false, {message:'incorrect password'})

        }
        )
    })
);*/