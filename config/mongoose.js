const mongoose=require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connectiing to mongo db"));

db.once('open',function(){
    console.log("Connected to db succesfully");
});


module.exports=db;