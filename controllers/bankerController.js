const { json } = require('express');
const mongoose= require('mongoose');
const BankerSchema = require('../models/models');
console.log(BankerSchema);

const postSchedule = async (req,res)=>{
    const body = req.body;
    console.log(body);

    const data = await BankerSchema.insertMany({alloc: {$push: {values: {$each: body.alloc.values}}}, max: {$push: {values: {$each: body.max.values}}}, $push: {avail: {$each: body.avail}} })
    .then((res)=>{
        JSON.parse(data);
        res.status(200).send("Data Posted");
        res.send(data);
    })
    .catch((err)=>{
        res.send({err: err.message});
    });
}

const getSchedule = async (req, res)=>{
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

module.exports = {postSchedule, getSchedule};
