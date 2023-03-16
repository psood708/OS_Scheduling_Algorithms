const mongoose = require('mongoose');
const express = require('express');
const router = require('./routes');
require('dotenv').config();

const app = express();
app.use('/api/v1', router);

app.use(express.json());
app.use(express.urlencoded({extended: true}));



mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
(err)=>{
    if(err){
        console.log(err)
    }else{
        app.listen(process.env.PORT, ()=>{
            console.log("Server Running at port 5000");
        })
    }
}
);


