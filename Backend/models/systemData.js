
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;

var systemDataSchema = mongoose.Schema({
    dataNumber:String,
    timbernames:Object,
    crosssections:Object



});

const SystemData = module.exports = mongoose.model('systemdata',systemDataSchema);

module.exports.saveData = function(newData,callback){
    newData.save(callback);
};

module.exports.saveCross = function(newCross,callback){
    SystemData.update({dataNumber : "1"}, { $set: { crosssections: newCross}}, callback);
};

module.exports.saveName = function(newName,callback){
    SystemData.update({dataNumber : "1"}, { $set: { timbernames: newName}}, callback);
};

module.exports.getData = function(dataNumber,callback){
    const query = {dataNumber : "1"};
    SystemData.find(query,callback);
};