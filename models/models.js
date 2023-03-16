const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BankerSchema = new Schema({
    //2-D Matrix of Processes X Reources
    
    alloc: {
        values: [
            {
            r1: Number,
            r2: Number,
            r3: Number
            }
        ]
    },

    max: {
        values: [
            {
            r1: Number,
            r2: Number,
            r3: Number
            }
        ]
    },

    avail: {
        r1:Number,
        r2:Number,
        r3:Number
    }
});

module.exports = mongoose.model('model', BankerSchema);