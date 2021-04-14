const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

var {buypolicy} = require('../models/buypolicy');
//to retrieve buypolicy data
router.get('/',(req,res) => {
    buypolicy.find((err,docs) => {
        if(!err) {
            res.send(docs);
        }
        else
        console.log(JSON.stringify(err,undefined,2));
    });
});

router.get('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with id : ${req.params.id}`);

        buypolicy.findById(req.params.id,(err,doc) => {
            if(!err){
                res.send(doc);
                
            }
            else
            console.log('Error in retrieving buypolicy data' + JSON.stringify(err,undefined,2));
        });

});
router.put('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record found with id : ${req.params.id}`);
        var bp ={
            fullname: {type : String},
            brandno:{type:Number},
            model: {type: String},
            mobileno: {type: String},
            dateofregistration:{type: Date}
        };

        buypolicy.findByIdAndUpdate(req.params.id, {$set : bp}, {new: true},(err,doc) => {
            if(!err){
                res.send(doc);
                
            }
            else
            console.log('Error in retrieving buypolicy data' + JSON.stringify(err,undefined,2));

        });
       
});

router.delete('/:id',(req,res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No record found with id : ${req.params.id}`);

    buypolicy.findByIdAndRemove(req.params.id, (err,doc) => {
        if(!err){
            res.send(doc);
            
        }
        else
        console.log('Error in retrieving buypolicy data' + JSON.stringify(err,undefined,2));

    });

});

router.post('/',(req,res) => {
    var bp = new buypolicy({
        fullname : req.body.name,
        brandno: req.body.brandno,
        model : req.body.model,
        mobileno: req.body.mobileno,
        dateofregistration : req.body.dateofregistration,
    });
    bp.save((err,doc) => {
        if(!err) {res.send(doc);}
        else
        console.log(JSON.stringify(err,undefined,2));
    });
});
module.exports= router;