const mongoose = require('mongoose');
const express = require('express');
const router = require('./routes/routes');
require('dotenv').config();
const cors = require('cors');

const app = express();

app.use(cors());
app.use('/api/v1', router);
app.use(express.json());
app.use(express.urlencoded({extended: true}));


mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=>{
    app.listen(process.env.PORT, ()=>{
        console.log("Server Running at port 5000");
})})

.catch((err)=>{
        console.log(err);
        res.status(401).send("Database Not connected");
})