const mongoose= require('mongoose');
const BankerSchema = require('../models/models');

const postSchedule = async(req,res)=>{
    const {alloc, max, avail} = req.body;
    let data = await BankerSchema.insertMany({alloc, max, avail})
    .then((res)=>{
        res.status(200).send("Data Posted");
        res.send(data);
    })
    .catch((err)=>{
        res.send({err: err.message});
    });
}

const getSchedule = async(req, res)=>{
    const {id} = req.params;
    let data = await BankerSchema.findById(id)
    .then(()=>{
        res.status(200).send("Data Retreived");
        res.send(data);
    })
    .catch((err)=>{
        res.send({err: err.message});
    })
}
