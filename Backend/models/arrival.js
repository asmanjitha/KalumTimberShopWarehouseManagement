const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

var arrivalSchema = mongoose.Schema({

    date: Date,
    warehouse:String,
    bundles:Object,
    total:Number,
    buyer:String


});

const Arrival = module.exports = mongoose.model('arrival',arrivalSchema);

module.exports.saveArrival = function(newArrival,callback){
    newArrival.save(callback);
};