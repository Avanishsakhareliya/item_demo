const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/Avanish',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{
    console.log("connection ok");
})
.catch((err)=>{
    console.log("error--",err)
})