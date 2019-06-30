
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

var shipmentSchema = mongoose.Schema({
    name:String,
    date: Date,
    warehouse:String,
    bundles:Object,
    total:Number,
    buyer:String


});

const Shipment = module.exports = mongoose.model('shipment',shipmentSchema);

module.exports.saveShipment = function(newShipment,callback){
    newShipment.save(callback);
};