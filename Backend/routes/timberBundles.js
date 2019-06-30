const express = require('express');
const router = express.Router();
const TimberBundle  = require('../models/timberBundle');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/database');
const passport = require('passport');


router.post("/savebundle",function(req,res ){           //Create temp Recipe obj
    //console.log('save bundle call received \n');

    const newTimberBundle = new TimberBundle({
        bundleNumber:req.body.bundlenum,
        timberName: req.body.timbername.toLowerCase(),
        buyer:req.body.buyer.toLowerCase(),
        timber:req.body.timbers,
        warehouse:req.body.warehouse.toLowerCase(),
        totalPrice: req.body.price,
        purchaseDate: req.body.date,
        deleted:false,
        arrivalDate: null,
        totalPieces:req.body.piecesBundle,
        //agent: req.body.agent
        //timber: String
    });
    TimberBundle.saveTimberBundle(newTimberBundle, function(err,bundle){          //Save Temp Recipe
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(bundle){
            res.json({state:true,msg:"data inserted"});
        }
    });

});

router.post("/number",function (req,res){              //Search by Ingredients array
    //console.log("search bundle by number call received,  bundle : "+req.body.number+"\n");
    TimberBundle.timberBundleByNumber(req.body.number, function(err,bundle){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(bundle){
            //console.log(bundle);
            res.json({state:true,msg:"data found",bundle:bundle});
        }
    });
});

router.post("/timbername",function (req,res){            //Search by Ingredients (Except) array
    //console.log("search bundle by timber name call received, name : "+req.body.name);
    TimberBundle.timberBundleByTimberName(req.body.name, function(err,bundle){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(bundle){
            res.json({state:true,msg:"data found",bundle:bundle});
        }
    });
});

router.post("/warehouse",function (req,res){           //Search by health conditions array
    //console.log("search bundle by warehouse call received, warehouse : "+ req.body.warehouse);
    TimberBundle.timberBundleByWarehouse(req.body.warehouse, function(err,bundle){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(bundle){
            res.json({state:true,msg:"data found",bundle:bundle});
        }
    });
});

router.post("/warehousetime",function (req,res){           //Search by health conditions array
    //console.log("search bundle by warehouse with time call received, warehouse : "+ req.body.warehouse+"- date to : "+ req.body.dateto);
    TimberBundle.timberBundleByWarehouseWithTime(req.body.warehouse, req.body.datefrom, req.body.dateto, function(err,bundle){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(bundle){
            res.json({state:true,msg:"data found",bundle:bundle});
        }
    });
});

router.post("/buyername",function (req,res){         //Search by occasions array
    //console.log("search bundle by buyer call received ");
    TimberBundle.timberBundleByBuyer(req.body.buyer, function(err,bundle){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(bundle){
            res.json({state:true,msg:"data found",bundle:bundle});
        }
    });
});

router.post("/id",function(req,res){            //Search by unique ID
    //console.log("search bundle by id call received, id :" + req.body._id);
    TimberBundle.timberBundleById(req.body._id, function(err,bundle){
        if(err){
            res.json({state:false,msg:"data not found",error : err});
        }
        if(bundle){
            res.json({state:true,msg:"data found",bundle:bundle});
        }
    });
});


router.post("/delete", function(req,res){           //Delete recipe
    //console.log("delete call received : "+ req.body.arrivalDate);
    TimberBundle.deleteTimberBundle(req.body.bundleNumber,req.body.arrivalDate, function(err,bundle){
        if(err){
            //console.log(err);
            res.json({state:false,msg:"data not deleted"});
        }
        if(bundle){
            //console.log(err);
            res.json({state:true,msg:"data deleted",data:bundle});
        }
    });
});



module.exports  = router;