const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const port  = process.env.PORT || 3000
const passport = require('passport');
const cors = require('cors');



app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());
//require('./config/passport')(passport);
require('./config/passportadmin')(passport);


const config = require("./config/database");


const timber = require("./routes/timbers");
const timberBundle = require("./routes/timberBundles");
const shipment = require("./routes/shipments");
const systemData = require("./routes/systemDatas");

const connection = mongoose.connect(config.database,{ useNewUrlParser: true });   //Establish database connection using mongoos
if (connection){
    console.log("database connected");
}else{
    console.log("database not connected");
}



//app.use(express.static(path.join(__dirname,"../client/dist")));          //Frontend build files
app.use(express.static(path.join(__dirname,"public")));

app.use('/timber',timber);
app.use('/timberbundle',timberBundle);
app.use('/shipment', shipment);
app.use('/data', systemData);




app.listen(port,function(){
    console.log("listening to port "+port);
    console.log('\x1b[36m%s\x1b[0m\x1b[1m', 'Kalum Timber Stock Management Application Running !!!');  //cyan
    console.log('\x1b[33m%s\x1b[0m', "!!!!!Don't close this window until you finish work !!!!!");  //yellow
});

module.exports = app;