
const mongoose = require('mongoose');
var ObjectId = require('mongodb').ObjectID;


var timberBundleSchema = mongoose.Schema({
    bundleNumber:String,
    timberName: String,
    buyer:String,
    timber:Object,
    warehouse:String,
    totalPrice: Number,
    purchaseDate: Date,
    arrivalDate:Date,
    agent: String,
    deleted:Boolean,
    totalPieces:Number

});

const TimberBundle = module.exports = mongoose.model('timberBundle',timberBundleSchema);

module.exports.saveTimberBundle = function(newTimberBundle,callback){
    newTimberBundle.save(callback);
};

module.exports.timberBundleByNumber = function(bundleNumber,callback){           //Find by bundle Number
    const query = {bundleNumber : bundleNumber};
    TimberBundle.find(query,callback);
};

module.exports.timberBundleByTimberName = function(timberName,callback){      //Find by except ingredients
    //const query = {ingredients:{$nin : ingredients}};
    const query = {timberName : timberName.toLowerCase(), deleted:false};
    TimberBundle.find(query,callback);

};
module.exports.timberBundleByWarehouse = function(warehouse,callback){      //Health conditions search
    //const query = {health:{$in : health}};
    const query = {warehouse : warehouse.toLowerCase(), deleted:false};
    TimberBundle.find(query,callback);

};

module.exports.timberBundleByWarehouseWithTime = function(warehouse,datefrom,dateto,callback){      //Health conditions search
    //const query = {health:{$in : health}};
    const query = {warehouse : warehouse.toLowerCase(), purchaseDate: {$lt: datefrom}, arrivalDate:{$gta:dateto}};
    TimberBundle.find(query,callback);

};

module.exports.timberBundleByBuyer = function(buyer,callback){
    const query = {buyer:buyer.toLowerCase(), deleted:false};
    //console.log(buyer);
    TimberBundle.find(query,callback);

};

module.exports.timberBundleByAgent = function(agent,callback){      //By author
    const query = {agent:agent, deleted:false};
    TimberBundle.find(query,callback);

};

module.exports.timberBundleById = function (id,callback){     //By mongo ID
    const query = {_id : ObjectId(id)};
    TimberBundle.findOne(query,callback);
};


module.exports.deleteTimberBundle = function(number,arrivalDate,callback){      //Delete Recipe
    const query = {bundleNumber : number};
    TimberBundle.update({bundleNumber : number}, { $set: { deleted: true, arrivalDate:arrivalDate }}, callback);
};

module.exports.restoreTimberBundle = function(id,callback){      //Delete Recipe
    const query = {_id : ObjectId(id)};
    TimberBundle.update({_id : ObjectId(id)}, { $set: { deleted: false }}, callback);
};