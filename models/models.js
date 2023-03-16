const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BankerSchema = new Schema({
    //2-D Matrix of Processes X Reources
    alloc: [{
       process: [{
            numb: Number
        }]
    }],

    //2-D Matrix of Proccesses X Resource
    max: [{
        processMax: [{
            num : Number
        }]
    }],

    //List of Avaiable space to each resource
    avail: [{
        availResource: Number
    }]

});

module.exports = mongoose.model('BankerSchema', BankerSchema);