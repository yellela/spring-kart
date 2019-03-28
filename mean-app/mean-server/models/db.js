const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI,(err) => {
    if(!err){
        console.log("MongoDb connceted sucefully")
    }else{
        console.log("Error in MongoDb conncetion:" + JSON.stringify(err,  undefined ,2));
    }
}); 

require('./user.model');