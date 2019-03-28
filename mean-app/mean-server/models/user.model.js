const mongoose = require('mongoose');
const bcript = require('bcryptjs');

// Creating new schema using Schema()

var userSchema = new mongoose.Schema({
    fullName : {
        type:String,
        required: "FullName can't be Empty"
    },
    email: {
        type : String,
        required: "Email can't be Empty",
        unique:true
    },
    password : {
        type : String,
        required: "password can't be Empty",
        minlength : [8,'password must be at least 4 characters']
    },
    saltSecret : String
});


//Caustem Email validation
userSchema.path('email').validate((val) => {
    emailRegEx =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,13}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(val);
},'invalid e-mail');


//Events

/*userSchema.pre('save', function(next){
    bcript.getSalt(10, (err,salt) => {
        bcript.hash(this.password,salt, (err,hash)=>{
            this.password = hash;
            this.saltSecret = salt;
            next();
        });

    });
});*/

// Methods
userSchema.methods.verifyPassword = function(password) {
    return bcript.compareSync(password, this.password);
}

// Register Schema with Collection

mongoose.model('userDetails', userSchema);