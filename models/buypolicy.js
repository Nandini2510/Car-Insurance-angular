const mongoose = require('mongoose');
//Schema
var buypolicy = mongoose.model('buypolicy',{
    fullname: {type : String},
    brandno:{type:Number},
    model: {type: String},
    mobileno: {type: String},
    dateofregistration:{type: Date}
});

module.exports = {buypolicy};
