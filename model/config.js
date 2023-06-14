const mongoose = require("mongoose");
mongoose.set('strictQuery', false);

// Here we are connecting the database to our localhost after enabling 
// mongodb in terminal 
mongoose.connect("mongodb://localhost:27017/blogDatabase")
.then(()=> console.log("connected to database"))
.catch((err) => console.log(err.message))