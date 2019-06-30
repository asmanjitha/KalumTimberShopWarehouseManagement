const express = require('express');
const router = express.Router();
const Shipment  = require('../models/shipment');
const TimberBundle = require('../models/timberBundle');
const jwt = require('jsonwebtoken');
const dbConfig = require('../config/database');
const passport = require('passport');


router.post("/saveshipment",function(req,res ){           //Create shipment obj
    const newShipments = new Shipment({
        date:req.body.date,
        warehouse:req.body.warehouse,
        bundles:req.body.bundles,
        total : req.body.total,
        buyer: req.body.buyer
    });
    //console.log('save shipment call received');

    Shipment.saveShipment(newShipments, function(err,shipment){          //Save Temp Recipe
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(shipment){
            res.json({state:true,msg:"data inserted"});
        }
    });

});



module.exports  = router;