const express = require('express');
const router = express.Router();

const SystemData = require('../models/systemData');



router.post("/savedata",function(req,res ){           //Create shipment obj
    //console.log("received");
    const newSystemData = new SystemData({
        dataNumber:"1",
        timbernames:req.body.timbernames,
        crosssections:req.body.crosssections
    });
    //console.log('save system data call received');

    SystemData.saveData(newSystemData, function(err,data){          //Save Temp Recipe
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(data){
            res.json({state:true,msg:"data inserted", data:data});
        }
    });

});

router.post("/savename",function(req,res){
    SystemData.saveName(req.body.timbernames, function(err,data){          //Save Temp Recipe
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(data){
            res.json({state:true,msg:"data inserted", data:data});
        }
    });
});

router.post("/savecross",function(req,res){
    SystemData.saveCross(req.body.crosssections, function(err,data){          //Save Temp Recipe
        if(err){
            res.json({state:false,msg:"data not inserted"});
        }
        if(data){
            res.json({state:true,msg:"data inserted", data:data});
        }
    });
});

router.post("/getdata",function(req,res){
    SystemData.getData(req, function(err,data){          //Save Temp Recipe
        if(err){
            res.json({state:false,msg:"data not found"});
        }
        if(data){
            res.json({state:true,msg:"data found", data:data});
        }
    });
});



module.exports  = router;