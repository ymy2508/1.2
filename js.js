var express = require('express');
var router = express.Router();
var fs=require('fs');
router.post('/', function(req, res, next) {
     res.header('Access-Control-Allow-Origin','*');
   fs.readFile("public/index.txt","utf-8",function(err,data){
       var str=JSON.parse(data);
       str.push({name:req.body.name ,tit:req.body.tit});
       console.log(str);
       fs.writeFile('public/index.txt',JSON.stringify(str),function(err){
           fs.readFile("public/index.txt","utf-8",function(err,data1){
               var data=JSON.parse(data1);
               res.send({name:data,tit:data.tit})
           })
       })
   })
});
module.exports = router;
