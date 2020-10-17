const express = require("express");
const router = express.Router(express);
const db = require("../connection")

router.get('/',function(req,res){
    

    //select sql 

    var S_select = "select * from admin order by `like` desc LIMIT 5"
    
    console.log("S_select", S_select)
    db.query(S_select,function(err,data){
    console.log("data", data)
        if(err){
            console.log(err)
        }else{
            res.send(data);
        }
    })


})

module.exports = router;