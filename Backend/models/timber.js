
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;


var timberSchema = mongoose.Schema({
    bundleNumber:String,
    size:String,
    unityPrice:Number,
    pieces:Object

});

const Timber = module.exports = mongoose.model('timber',timberSchema);

module.exports.saveTimber = function(newTimber,callback){
    newTimber.save(callback);
};