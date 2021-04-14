const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/VehicleInsurance",(err) => {
    if(!err)
        console.log('Mongodb connected');
    else
        console.log(JSON.stringify(err,undefined,2));

});
module.exports = mongoose